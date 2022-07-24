import prisma from '../config/database.js';
import app from '../app.js';
import supertest from 'supertest';
import { faker } from '@faker-js/faker';
import userDataFactory from './factories/userDataFactory.js';
import userFactory from './factories/userFactory.js';

// export const authTest = () => {
beforeEach(async () => {
	await prisma.$executeRaw`TRUNCATE "users" CASCADE;`;
});

describe('POST /sign-up', () => {
	it('returns 201 for valid data. User created', async () => {
		const user = userDataFactory();

		const registredUser = await supertest(app).post('/sign-up').send(user);
		const status = registredUser.status;

		const createdUser = await prisma.user.findUnique({
			where: { email: user.email },
		});
		expect(status).toEqual(201);
		expect(createdUser).not.toBeNull();
	});

	it('returns 409 for valid data. User already created', async () => {
		const user = userDataFactory();
		await userFactory(user);
		const userAlreadyCreated = await supertest(app)
			.post('/sign-up')
			.send(user);
		const status = userAlreadyCreated.status;

		expect(status).toEqual(409);
	});
});

describe('POST /sign-in', () => {
	it('returns 200 for valid data. User logged in', async () => {
		const user = userDataFactory();
		await userFactory(user);
		const userLoggedIn = await supertest(app).post('/sign-in').send(user);
		const status = userLoggedIn.status;
		expect(status).toEqual(200);
	});

	it('returns 401 for invalid params. Invalid email', async () => {
		const user = userDataFactory();

		const userLoggedIn = await supertest(app)
			.post('/sign-in')
			.send({ ...user, email: faker.internet.email() });
		const status = userLoggedIn.status;
		expect(status).toEqual(401);
	});
});

afterAll(async () => {
	await prisma.$disconnect();
});
// };

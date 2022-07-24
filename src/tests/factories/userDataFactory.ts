import { faker } from '@faker-js/faker';
import { CreateUserData } from '../../types/userInterface';

const userDataFactory = (): CreateUserData => {
	return {
		email: faker.internet.email(),
		password: faker.internet.password(),
	};
};

export default userDataFactory;

import prisma from '../../src/config/database.js';
import { CreateUserData } from '../../src/types/userInterface.js';
import { bcryptEncryptData } from '../../src/utils/bcrypt.js';

const userFactory = (user: CreateUserData) => {
	return prisma.user.create({
		data: {
			...user,
			password: bcryptEncryptData(user.password),
		},
	});
};

export default userFactory;

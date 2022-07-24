import prisma from '../../config/database.js';
import { CreateUserData } from '../../types/userInterface.js';
import { bcryptEncryptData } from '../../utils/bcrypt.js';

const userFactory = (user: CreateUserData) => {
	return prisma.user.create({
		data: {
			...user,
			password: bcryptEncryptData(user.password),
		},
	});
};

export default userFactory;

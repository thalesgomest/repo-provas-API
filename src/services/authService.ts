import { CreateUserData } from '../types/userInterface.js';
import {
	bcryptEncryptData,
	bcryptCompareEncryptedData,
} from '../utils/bcrypt.js';
import { generateToken } from '../utils/JWT.js';

import * as userRepository from '../repositories/userRepository.js';

import AppError from '../config/error.js';

export const signUp = async (createUserData: CreateUserData) => {
	const { email, password } = createUserData;
	const existingUser = await userRepository.findByEmail(email);
	if (existingUser) {
		throw new AppError(
			'User already exists',
			400,
			'User already exists',
			"Ensure you're not using an existing email"
		);
	}
	const encryptedPassword = bcryptEncryptData(password);
	await userRepository.insert({
		...createUserData,
		password: encryptedPassword,
	});
};

export const signIn = async (signInData: CreateUserData) => {
	const { email, password } = signInData;
	const user = await userRepository.findByEmail(email);
	if (!user) {
		throw new AppError(
			'Invalid credentials',
			401,
			'Invalid credentials',
			'Ensure that the credentials are correct'
		);
	}
	const isPasswordValid = bcryptCompareEncryptedData(password, user.password);
	if (!isPasswordValid) {
		throw new AppError(
			'Invalid credentials',
			401,
			'Invalid credentials',
			'Ensure that the credentials are correct'
		);
	}
	const { id } = user;
	const token = generateToken(id);
	return token;
};

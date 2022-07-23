import jwt from 'jsonwebtoken';

export const generateToken = (userId: number) => {
	return jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: '24h',
	});
};

export const verifyToken = (token: string) => {
	return jwt.verify(token, process.env.JWT_SECRET);
};

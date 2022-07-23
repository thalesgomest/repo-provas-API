import bcrypt from 'bcrypt';

const bcryptEncryptData = (data: string) => {
	return bcrypt.hashSync(data, 10);
};

const bcryptCompareEncryptedData = (data: string, encryptedData: string) => {
	return bcrypt.compareSync(data, encryptedData);
};

export { bcryptEncryptData, bcryptCompareEncryptedData };

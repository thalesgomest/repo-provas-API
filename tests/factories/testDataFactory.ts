import { faker } from '@faker-js/faker';
import { CreateTestData } from '../../src/types/testInterface';

const testDataFactory = (): CreateTestData => {
	return {
		name: faker.lorem.words(2),
		pdfUrl: faker.internet.url(),
		category: 'Projeto',
		teacher: 'Diego Pinho',
		discipline: 'JavaScript',
	};
};

export default testDataFactory;

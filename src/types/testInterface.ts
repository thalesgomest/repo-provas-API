import { Test } from '@prisma/client';

export type TestData = Omit<Test, 'id' | 'createdAt'>;

export type CreateTestData = Omit<
	TestData,
	'teacherDisciplineId' | 'categoryId'
> & {
	category: string;
	discipline: string;
	teacher: string;
};

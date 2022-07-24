import { Test } from '@prisma/client';

export type TestData = Omit<Test, 'id'>;

export type CreateTestData = Omit<
	TestData,
	'teacherDisciplineId' | 'categoryId'
> & {
	category: string;
	discipline: string;
	teacher: string;
};

export interface Filter {
	groupBy: 'disciplines' | 'teachers';
	teacher?: string;
	discipline?: string;
}

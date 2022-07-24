import { TestData } from '../types/testInterface';
import prisma from '../config/database.js';

export const create = async (testData: TestData) => {
	return prisma.test.create({
		data: testData,
	});
};
export const getTestsByDiscipline = (discipline: string) => {
	return prisma.term.findMany({
		where: {
			disciplines: {
				some: {
					AND: {
						name: discipline,
						teacherDisciplines: { some: { tests: { some: {} } } },
					},
				},
			},
		},
		include: {
			disciplines: {
				include: {
					teacherDisciplines: {
						include: {
							teacher: true,
							tests: {
								include: {
									category: true,
								},
							},
						},
					},
				},
			},
		},
	});
};

export const getTestsByTeachers = (teacher: string) => {
	return prisma.teacherDiscipline.findMany({
		where: {
			AND: { teacher: { name: teacher }, tests: { some: {} } },
		},
		include: {
			teacher: true,
			discipline: true,
			tests: {
				include: {
					category: true,
				},
			},
		},
	});
};

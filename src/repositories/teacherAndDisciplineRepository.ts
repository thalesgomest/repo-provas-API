import prisma from '../config/database.js';

export const findByTeacherAndDisciplineId = (
	teacherId: number,
	disciplineId: number
) => {
	return prisma.teacherDiscipline.findFirst({
		where: {
			teacherId,
			disciplineId,
		},
	});
};

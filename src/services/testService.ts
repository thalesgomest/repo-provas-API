import { CreateTestData, Filter } from '../types/testInterface';

import queryFactory from '../factories/queryFactory.js';
import * as teacherDisciplineRepository from '../repositories/teacherAndDisciplineRepository.js';
import * as testRepository from '../repositories/testRepository.js';

import AppError from '../config/error.js';

export const insert = async (createTestData: CreateTestData) => {
	const { categoryId, teacherDisciplineId } =
		await ensureElegibilityToCreateTest(createTestData);
	const { name, pdfUrl } = createTestData;
	const { id } = await testRepository.create({
		name,
		pdfUrl,
		categoryId,
		teacherDisciplineId,
	});
	return { id, name, pdfUrl };
};

export const find = async (filter: Filter) => {
	if (filter.groupBy === 'disciplines') {
		return testRepository.getTestsByDiscipline(filter.discipline);
	} else if (filter.groupBy === 'teachers') {
		return testRepository.getTestsByTeachers(filter.teacher);
	}
};

const ensureElegibilityToCreateTest = async (
	createTestData: CreateTestData
) => {
	const { category, discipline, teacher } = createTestData;
	const existingCategory = await queryFactory.findByName(
		category,
		'Category'
	);
	if (!existingCategory) {
		throw new AppError(
			'Category not found',
			404,
			'Category not found',
			'Ensure category exists'
		);
	}
	const existingDiscipline = await queryFactory.findByName(
		discipline,
		'Discipline'
	);
	if (!existingDiscipline) {
		throw new AppError(
			'Discipline not found',
			404,
			'Discipline not found',
			'Ensure discipline exists'
		);
	}
	const existingTeacher = await queryFactory.findByName(teacher, 'Teacher');
	if (!existingTeacher) {
		throw new AppError(
			'Teacher not found',
			404,
			'Teacher not found',
			'Ensure teacher exists'
		);
	}
	const existingTeacherDiscipline =
		await teacherDisciplineRepository.findByTeacherAndDisciplineId(
			existingTeacher.id,
			existingDiscipline.id
		);
	if (!existingTeacherDiscipline) {
		throw new AppError(
			'Teacher and Discipline not match',
			404,
			'This teacher does not teach this discipline',
			'Ensure teacher teaches this discipline'
		);
	}
	return {
		categoryId: existingCategory.id,
		teacherDisciplineId: existingTeacherDiscipline.id,
	};
};

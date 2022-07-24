import prisma from '../src/config/database.js';
import { bcryptEncryptData } from '../src/utils/bcrypt.js';
import { faker } from '@faker-js/faker';

const main = async () => {
	const user = [
		{
			email: 'driven@gmail.com',
			password: bcryptEncryptData('driven'),
		},
	];
	const terms = [
		{
			number: 1,
		},
		{
			number: 2,
		},
		{
			number: 3,
		},
		{
			number: 4,
		},
		{
			number: 5,
		},
		{
			number: 6,
		},
	];
	const categories = [
		{
			name: 'Projeto',
		},
		{
			name: 'Prática',
		},
		{
			name: 'Recuperação',
		},
	];
	const teachers = [
		{
			name: 'Diego Pinho',
		},
		{
			name: 'Bruna Hamori',
		},
	];
	const disciplines = [
		{
			name: 'HTML e CSS',
			termId: 1,
		},
		{
			name: 'JavaScript',
			termId: 2,
		},
		{
			name: 'React',
			termId: 3,
		},
		{
			name: 'Humildade',
			termId: 4,
		},
		{
			name: 'Planejamento',
			termId: 5,
		},
		{
			name: 'Autoconfiança',
			termId: 6,
		},
	];
	const teachersDisciplines = [
		{
			teacherId: 1,
			disciplineId: 1,
		},
		{
			teacherId: 1,
			disciplineId: 2,
		},
		{
			teacherId: 1,
			disciplineId: 3,
		},
		{
			teacherId: 2,
			disciplineId: 4,
		},
		{
			teacherId: 2,
			disciplineId: 5,
		},
		{
			teacherId: 2,
			disciplineId: 6,
		},
	];

	const tests = [
		{
			name: 'Prova HTML e CSS',
			pdfUrl: faker.internet.url(),
			categoryId: 1,
			teacherDisciplineId: 1,
		},
		{
			name: 'Prova JavaScript',
			pdfUrl: faker.internet.url(),
			categoryId: 2,
			teacherDisciplineId: 2,
		},
		{
			name: 'Projeto Planejamento',
			pdfUrl: faker.internet.url(),
			categoryId: 1,
			teacherDisciplineId: 5,
		},
		{
			name: 'Prática Autoconfiança',
			pdfUrl: faker.internet.url(),
			categoryId: 2,
			teacherDisciplineId: 6,
		},
	];

	await prisma.user.createMany({ data: user, skipDuplicates: true });
	await prisma.term.createMany({ data: terms, skipDuplicates: true });
	await prisma.category.createMany({
		data: categories,
		skipDuplicates: true,
	});
	await prisma.teacher.createMany({
		data: teachers,
		skipDuplicates: true,
	});
	await prisma.discipline.createMany({
		data: disciplines,
		skipDuplicates: true,
	});
	await prisma.teacherDiscipline.createMany({
		data: teachersDisciplines,
		skipDuplicates: true,
	});
	await prisma.test.createMany({ data: tests, skipDuplicates: true });
};

main()
	.catch((err) => console.error(err))
	.finally(async () => prisma.$disconnect());

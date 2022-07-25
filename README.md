<p align="center">
  <img  width=300px src="https://user-images.githubusercontent.com/97575616/180822593-553c207a-ee85-4995-b612-877dbf87a6f2.png"

</p>
<h1 align="center">
  RepoProvas
</h1>
<div align="center">

  <h3>Built With</h3>

  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" height="30px"/>
  <!-- Badges source: https://dev.to/envoy_/150-badges-for-github-pnk -->
</div>

<br/>

# Description
<p align="justify">
<b>RepoProvas</b> is a system for sharing tests between students! In RepoProvas anyone can look for old tests of their subjects 
and teachers or send old tests to help 

</p>

</br>

## Features

-   Sign In and Sign Up account
-   Create/Get Tests by disciplines and teachers with specific names
-   Get categories                                                                                   

</br>

## API Reference

### AUTHENTICATION

### Sign Up

```http
POST /sign-up
```

#### Request:

| Body             | Type     | Description                        |
| :--------------- | :------- | :--------------------------------- |
| `email`         | `string` | **Required**. user email          |
| `password` | `string` | **Required**. user password |


#

#### Response:

```json
{
	"Created"
}
```

### Sign In

```http
POST /sign-in
```

#### Request:

| Body             | Type     | Description                        |
| :--------------- | :------- | :--------------------------------- |
| `name`           | `string` | **Required**. user name       |
| `email`         | `string` | **Required**. user email          |

#

#### Response:

```json
{
	"token": "jasonwebtoken (JWT)",
}
```

### TESTS

### Create a test

```http
POST /test
```

#### Request:

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authentication` | `string` | **Required**. token |

`Authorization format: Bearer jsonwebtoken`

####

| Body   | Type       | Description             |
| :----- | :--------- | :---------------------- |
| `name`           | `string` | **Required**. test name      |
| `pdfUrl`         | `string` | **Required**. test url          |
| `category` | `string` | **Required**. test category |
| `title` | `string` | **Required**. test title |

#

#### Response:

```json
{
	"id": 1,
	"name": "aut",
	"pdfUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/133.jpg"
}
```

#

### Get test groupBy disciplines or teachers

```http
GET /tests?groupBy=${queryString}
```

#### Request:

| Query strings      | Type      | Description           |
| :---------- | :-------- | :-------------------- |
| `groupBy` | `string` | **Required**. values: `disciplines` or `teachers` |

####

`example: /tests?groupBy=disciplines`

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authentication` | `string` | **Required**. token |

`Authorization format: Bearer jsonwebtoken`

####

#### Response:

```json
{
	"tests": [
		{
			"id": 2,
			"teacherId": 1,
			"disciplineId": 2,
			"teacher": {
				"id": 1,
				"name": "Diego Pinho"
			},
			"discipline": {
				"id": 2,
				"name": "JavaScript",
				"termId": 2
			},
			"tests": [
				{
					"id": 1,
					"name": "aut",
					"pdfUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/133.jpg",
					"categoryId": 3,
					"teacherDisciplineId": 2,
					"category": {
						"id": 3,
						"name": "Recuperação"
					}
				}
			]
		}
	]
}
```

#

### Get a test by a specific discipline name

```http
GET /tests?groupBy=${queryString}&discipline=${queryString}
```

#### Request:

| Query strings      | Type      | Description           |
| :---------- | :-------- | :-------------------- |
| `groupBy` | `string` | **Required**. values: `disciplines` or `teachers` |
| `discipline` | `string` | **Required**. values: `<discipline name>` |

####

`example: /tests?groupBy=disciplines&discipline=JavaScript`


| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authentication` | `string` | **Required**. token |

`Authorization format: Bearer jsonwebtoken`

####

#### Response:

```json
{
	"tests": [
		{
			"id": 2,
			"teacherId": 1,
			"disciplineId": 2,
			"teacher": {
				"id": 1,
				"name": "Diego Pinho"
			},
			"discipline": {
				"id": 2,
				"name": "JavaScript",
				"termId": 2
			},
			"tests": [
				{
					"id": 1,
					"name": "aut",
					"pdfUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/133.jpg",
					"categoryId": 3,
					"teacherDisciplineId": 2,
					"category": {
						"id": 3,
						"name": "Recuperação"
					}
				}
			]
		}
	]
}
```

#

### Get a test by a specific teacher name

```http
GET /tests?groupBy=${queryString}&teacher=${queryString}
```

#### Request:

| Query strings      | Type      | Description           |
| :---------- | :-------- | :-------------------- |
| `groupBy` | `string` | **Required**. values: `disciplines` or `teachers` |
| `teacher` | `string` | **Required**. values: `<teacher name>` |

####

`example: /tests?groupBy=teachers&teacher=Diego%20Pinho`


| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authentication` | `string` | **Required**. token |

`Authorization format: Bearer jsonwebtoken`

####

#### Response:

```json
{
	"tests": [
		{
			"id": 2,
			"number": 2,
			"disciplines": [
				{
					"id": 2,
					"name": "JavaScript",
					"termId": 2,
					"teacherDisciplines": [
						{
							"id": 2,
							"teacherId": 1,
							"disciplineId": 2,
							"teacher": {
								"id": 1,
								"name": "Diego Pinho"
							},
							"tests": [
								{
									"id": 2,
									"name": "Prova JavaScript",
									"pdfUrl": "http://narrow-zone.name",
									"categoryId": 2,
									"teacherDisciplineId": 2,
									"category": {
										"id": 2,
										"name": "Prática"
									}
								}
							]
						}
					]
				}
			]
		}
	]
}
```

### Get all categories of tests

```http
GET /categories
```

#### Request:

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authentication` | `string` | **Required**. token |

`Authorization format: Bearer jsonwebtoken`

####

#### Response:

```json
{
	"categories": [
		{
			"id": 1,
			"name": "Projeto"
		},
		{
			"id": 2,
			"name": "Prática"
		},
		{
			"id": 3,
			"name": "Recuperação"
		}
	]
}
```

#


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL = postgres://UserName:Password@Hostname:5432/DatabaseName`

`PORT = number #recommended:5000`

`JWT_SECRET = any string`



</br>

## Run Locally

Clone the project

```bash
  git clone https://github.com/thalesgomest/repo-provas-API.git
```

Go to the project directory

```bash
  cd repo-provas-API/
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

</br>

## Lessons Learned

In this project I learned a lot about how to structure an API with TypeScript and database with Prisma

</br>


### Author
---
<div align="center">
<img width= 200px src="https://user-images.githubusercontent.com/97575616/157583676-812b2612-a644-4c18-be9c-61f633406f50.png" alt=""/>
  <p> <i><b>Thales Gomes Targino</i></b> </p>

<br /> [![Twitter Badge](https://img.shields.io/badge/-@thales_targino-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/thales_targino)](https://twitter.com/thales_targino) [![Linkedin Badge](https://img.shields.io/badge/-thalesgomest-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/thales-gomes-targino/)](https://www.linkedin.com/in/thales-gomes-targino/) 
[![Gmail Badge](https://img.shields.io/badge/-thalestargino@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:thalestargino@gmail.com)](mailto:thalestargino@gmail.com)
  
</div>

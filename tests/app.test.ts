import { authTests } from './auth.js';
import { testsTests } from './tests.js';

describe('RepoProvas Integration Tests', () => {
	authTests();
	testsTests();
});

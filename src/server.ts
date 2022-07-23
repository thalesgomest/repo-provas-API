import app from './app.js';
import colors from 'colors';

const PORT = +process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(colors.green.bold(`Server is running on port ${PORT}`));
});

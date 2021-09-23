import { createExpressServer } from 'routing-controllers';
import "reflect-metadata"
const router = require('./controllers/PageController');

const app = createExpressServer();

app.use('/', router);

export default app;

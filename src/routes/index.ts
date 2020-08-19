import { Router } from 'express';

import usersRouter from './users.routes';
import classRouter from './class.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/classes', classRouter);

export default routes;

import { Router } from 'express';

import usersRouter from './users.routes';
import classRouter from './class.routes';
import connectionsRouter from './connections.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/classes', classRouter);
routes.use('/connections', connectionsRouter);

export default routes;

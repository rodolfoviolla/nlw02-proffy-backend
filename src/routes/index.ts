import { Router } from 'express';

import usersRouter from './users.routes';
import classesRouter from './classes.routes';
import connectionsRouter from './connections.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/classes', classesRouter);
routes.use('/connections', connectionsRouter);
routes.use('/sessions', sessionsRouter);

export default routes;

import { Router } from 'express';

import ClassesController from '../controllers/ClassesController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const classesRouter = Router();

const classesController = new ClassesController();

classesRouter.use(ensureAuthenticated);

classesRouter.post('/', classesController.create);
classesRouter.get('/', classesController.index);

export default classesRouter;

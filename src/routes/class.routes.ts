import { Router } from 'express';

import ClassController from '../controllers/ClassController';

const classRouter = Router();

const classController = new ClassController();

classRouter.post('/', classController.create);

export default classRouter;

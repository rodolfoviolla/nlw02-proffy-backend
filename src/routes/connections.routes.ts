import { Router } from 'express';

import ConnectionsController from '../controllers/ConnectionsController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const connectionsRouter = Router();

const connectionsController = new ConnectionsController();

connectionsRouter.post('/', ensureAuthenticated, connectionsController.create);
connectionsRouter.get('/', connectionsController.index);

export default connectionsRouter;

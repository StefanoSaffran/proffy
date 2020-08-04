import { Router } from 'express';

import ConnectionsController from '../controllers/ConnectionsController';

const connectionsRouter = Router();
const connectionsController = new ConnectionsController();

connectionsRouter.get('/', connectionsController.index);
connectionsRouter.post('/', connectionsController.create);

export default connectionsRouter;

import { Router } from 'express';

import ClassController from '../controllers/ClassController';

const classRouter = Router();
const classController = new ClassController();

classRouter.post('/', classController.create);
classRouter.get('/', classController.index);

export default classRouter;

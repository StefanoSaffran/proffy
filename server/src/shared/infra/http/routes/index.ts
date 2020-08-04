import { Router } from 'express';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import classesRouter from '@modules/classes/infra/http/routes/classes.routes';
import connectionsRouter from '@modules/connections/infra/http/routes/connections.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/classes', classesRouter);
routes.use('/connections', connectionsRouter);

export default routes;

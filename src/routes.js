import { Router } from 'express';

import AdminUserController from './app/controllers/AdminUserController';

const routes = new Router();

routes.post('/users', AdminUserController.store);

export default routes;

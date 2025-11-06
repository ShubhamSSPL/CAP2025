/**
 * Login Module Routes
 * Routes for the login flow
 */

import { RouteObject } from 'react-router-dom';
import Login from './pages/Login';

export const loginRoutes: RouteObject = {
  path: '/login',
  element: <Login />,
};

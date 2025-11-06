/**
 * Main App Component
 * Root component with routing setup
 */

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { registrationRoutes } from '@modules/registration';
import { loginRoutes } from '@modules/login';

// Create router with all module routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/registration" replace />,
  },
  registrationRoutes,
  loginRoutes,
  // Add other module routes here as they are implemented
  // candidateRoutes,
  // verificationRoutes,
  // etc.
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

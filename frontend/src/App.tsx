/**
 * Main App Component
 * Root component with routing setup
 */

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '@/shared/components/layout';
import Homepage from '@/pages/Homepage';
import { registrationRoutes } from '@modules/registration';
import { loginRoutes } from '@modules/login';

// Create router with all module routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      registrationRoutes,
      loginRoutes,
      // Add other module routes here as they are implemented
      // candidateRoutes,
      // verificationRoutes,
      // etc.
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

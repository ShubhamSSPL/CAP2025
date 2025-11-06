/**
 * Main App Component
 * Root component with routing and layout
 */

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { MainLayout } from './shared/components/layout';
import { HomePage } from './shared/pages/HomePage';
import RegistrationForm from './modules/registration/pages/RegistrationForm';
import OTPVerification from './modules/registration/pages/OTPVerification';
import RegistrationSuccess from './modules/registration/pages/RegistrationSuccess';

// Layout wrapper for all routes
const LayoutWrapper = () => (
  <MainLayout>
    <Outlet />
  </MainLayout>
);

// Create router with all routes wrapped in layout
const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutWrapper />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'registration',
        children: [
          {
            index: true,
            element: <RegistrationForm />,
          },
          {
            path: 'verify-otp',
            element: <OTPVerification />,
          },
          {
            path: 'success',
            element: <RegistrationSuccess />,
          },
        ],
      },
      {
        path: 'login',
        element: <div>Login Page (Coming Soon)</div>,
      },
      {
        path: 'important-dates',
        element: <div>Important Dates (Coming Soon)</div>,
      },
      {
        path: 'instructions',
        element: <div>Instructions (Coming Soon)</div>,
      },
      {
        path: 'helpline',
        element: <div>Helpline (Coming Soon)</div>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

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
import Login from './modules/login/pages/Login';
import Dashboard from './pages/dashboard/Dashboard';

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
        element: <Login />,
      },
      {
        path: 'candidate/dashboard',
        element: <Dashboard />,
      },
      {
        path: 'important-dates',
        element: <div className="max-w-7xl mx-auto px-4 py-16 text-center"><h1 className="text-3xl font-bold text-dark-900">Important Dates (Coming Soon)</h1></div>,
      },
      {
        path: 'instructions',
        element: <div className="max-w-7xl mx-auto px-4 py-16 text-center"><h1 className="text-3xl font-bold text-dark-900">Instructions (Coming Soon)</h1></div>,
      },
      {
        path: 'faqs',
        element: <div className="max-w-7xl mx-auto px-4 py-16 text-center"><h1 className="text-3xl font-bold text-dark-900">FAQs (Coming Soon)</h1></div>,
      },
      {
        path: 'contact',
        element: <div className="max-w-7xl mx-auto px-4 py-16 text-center"><h1 className="text-3xl font-bold text-dark-900">Contact (Coming Soon)</h1></div>,
      },
      {
        path: 'helpline',
        element: <div className="max-w-7xl mx-auto px-4 py-16 text-center"><h1 className="text-3xl font-bold text-dark-900">Helpline (Coming Soon)</h1></div>,
      },
      {
        path: 'grievance',
        element: <div className="max-w-7xl mx-auto px-4 py-16 text-center"><h1 className="text-3xl font-bold text-dark-900">Submit Grievance (Coming Soon)</h1></div>,
      },
      {
        path: 'tickets',
        element: <div className="max-w-7xl mx-auto px-4 py-16 text-center"><h1 className="text-3xl font-bold text-dark-900">My Tickets (Coming Soon)</h1></div>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/ui/Root';
import MainPage from './components/pages/MainPage';
import ErrorPage from './components/pages/ErrorPage';
import SignupPage from './components/pages/SignupPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <MainPage />,
        },
        {
          path: 'signup',
          element: <SignupPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

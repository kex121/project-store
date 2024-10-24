import React, { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/ui/Root';
import MainPage from './components/pages/MainPage';
import ErrorPage from './components/pages/ErrorPage';
import SignupPage from './components/pages/SignupPage';
import axiosInstance, { setAccessToken } from './services/axiosInstance';
import ProtectedRoute from "./components/HOC/ProtectedRoute";
import LoginPage from './components/pages/LoginPage';
import axios from 'axios';



function App() {
  const [user, setUser] = useState();

  const [formData, setFormData] = useState({
    email: "",
    pass: "",
  });

  useEffect(() => {
    axiosInstance
      .get('/tokens/refresh')
      .then((res) => {
        setUser(res.data.user);
        setAccessToken(res.data.accessToken);
      })
      .catch(() => {
        setUser(null);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  console.log(formData)
  const signupHandler = async (e, formData) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post('/auth/signup', formData);
      if (response.data.redirectPath) {
        window.location.href = response.data.redirectPath;
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.text);
      }
    }
  };

  const loginHandler = async (e, formData) => {
    e.preventDefault();
    console.log('!!!!', formData)
    try {
    const response = await axiosInstance.post('/auth/login', formData);
    console.log('res',response)
    setUser(response.data.user);
    setAccessToken(response.data.accessToken);}
    catch(error) {
      console.error(error.message);
    }
  };

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
          element: <ProtectedRoute isAllowed={user === null} />,
          children: [
            {
              path: '/signup',
              element: <SignupPage signupHandler={signupHandler} />,
            },
            {
              path: '/login',
              element: <LoginPage loginHandler={loginHandler} setFormData={setFormData} formData={formData} handleChange={handleChange} />,
            },
          ],
        },
      ],
    },
  ]);

  // if (user === undefined) return <h1>Loading...</h1>;

  return <RouterProvider router={router} />;
}

export default App;

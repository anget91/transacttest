import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {  createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/transacttest/",
    element: <App />,
    children:[
      {
        path: "/transacttest/",
        element: <Home/>
      }
    ] 
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
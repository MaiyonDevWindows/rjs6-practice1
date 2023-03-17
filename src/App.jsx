import { createBrowserRouter, RouterProvider, Navigate, Link } from 'react-router-dom';

import './App.css';
import Layout from './Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    )
  },
  {
    path: "/about",
    element: <Layout></Layout>,
    children: [
      {
        path: '/about',
        element: <div>About Us</div>
      },
      {
        path: '/about/us',
        element: <div>US</div>
      },
      {
        path: '/about/me',
        element: <div>me</div>
      }
    ]
  },
  {
    path: '/404',
    element: <div>404-Not Found</div>
  },
  {
    path: '*',
    element: <Navigate to='/404'></Navigate>
  }
]);

const App = () => {
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
}

export default App;

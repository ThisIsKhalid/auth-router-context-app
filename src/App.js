import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import LogIn from './components/LogIn';
import Orders from './components/Orders';
import Register from './components/Register';
import Layout from './Layout/Layout';
import PrivateRoute from './routes/PrivateRoute';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout></Layout>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <LogIn></LogIn>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/orders',
          element: <PrivateRoute><Orders></Orders></PrivateRoute>
        }
      ]
    }
  ]);

  return (
    <div className='App'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

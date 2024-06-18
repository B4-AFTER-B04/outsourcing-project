import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import MainPage from '../pages/MainPage';
import Detail from '../pages/DetailPage/Detail';
import Layout from '../layouts/Layout';

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <MainPage />
      },
      {
        element: <Layout />,
        children: [{ path: `detail/:id`, element: <Detail /> }]
      }
    ]
  }
]);

export default router;

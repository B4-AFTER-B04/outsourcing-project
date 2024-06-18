import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import DetailPage from '../pages/DetailPage';
import MainPage from '../pages/MainPage';

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <MainPage />
      },
      {
        path: '/detail/:id',
        element: <DetailPage />
      }
    ]
  }
]);

export default router;

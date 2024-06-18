import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import './styles/color.css';

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

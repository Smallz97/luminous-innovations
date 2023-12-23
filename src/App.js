// App is acting as a layout for the entire application
import { RouterProvider } from 'react-router-dom';
import router from './configurations/router';
import './App.css';

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
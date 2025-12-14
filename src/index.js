import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Settings from "./Components/Settings";
import Library from "./Components/Library";
import GameDetails from "./Components/GameDetails";
import Layout from "./Components/Layout";

 const router = createBrowserRouter([
   {path: "/",
   element: <Layout />,
   children: [
  {path: "/", element: <App />},
  {path: "/library", element: <Library />},
  {path: "/settings", element: <Settings />},
  {path: "/game/:id", element: <GameDetails />}
   ]
   }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <RouterProvider router={router} />  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './components/Error';
import HomeScreen from './pages/HomeScreen';
import { Provider } from 'react-redux';
import store from './utils/store';
import LoginScreen from './pages/LoginScreen';
import OtpVerify from './components/Login/OtpVerify';

const appRouter = createBrowserRouter([{
  path:"/",
  element:<App />,
  errorElement: <Error />,
  children:[
    {
      path:"/",
      element:<HomeScreen />
    },{
      path:"/login",
      element:<LoginScreen />
    },{
      path:"/verify",
      element:<OtpVerify />
    }
  ]
}])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </React.StrictMode>
);


reportWebVitals();

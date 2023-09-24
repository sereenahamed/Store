import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/home'
 import Login from './Pages/Login'
import Register from './Pages/Register'




import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Populerpage from './Pages/Populer';
import About from './Pages/About';
import FruitCategory from './items/Fruit';
import VegitableCategory from './items/Vegitable';
import FrozenCategory from './items/Frozen';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
  },
  {
    path: "/home",
    element:<Home/>,
  },
  {
    path: "/Populer",
    element:<Populerpage/>,
  },
  {
    path: "/About",
    element:<About/>,
  },
  {
    path: "/Fruit",
    element:<FruitCategory/>,
  },
  {
    path: "/Vegitable",
    element:<VegitableCategory/>,
  },
  {
    path: "/Frozen food",
    element:<FrozenCategory/>,
  },
  {
    path: "/Login",
    element:<Login/>,
  },
  {
    path: "/Register",
    element:<Register/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<RouterProvider router={router} />
  
  </React.StrictMode>
)


{/* <Header/>
<CategoryHeader/>
<Category/> */}

{/* <FruitCategory/> */}
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../component/Header";
import Body from "../component/Body";
import About from "../component/About";
import Resturant_menu from "../component/Resturant_menu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Restaurantcard from "../component/Restaurantcard";
import { Provider } from "react-redux";
import UserContext from "../utils/UserContext";
import appStore from "../utils/appStore";
import Grocery from "../component/Grocery";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { useState,useEffect } from "react";
import Cart from "../component/Cart";
 

// const Grocery = lazy(() => import("../component/Grocery"));

const Applayout = () => {
  const [userName, setUserName] = useState();

  //authentication
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "Karan Vashisht",
    };
    setUserName(data.name);
  }, []);
      return(
        <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser:userName, setUserName }}>
          <div className="app">
            <Header />
          <Outlet/>
          </div>
        </UserContext.Provider>
      </Provider>
    )

}

const approuter = createBrowserRouter([
  {
    path:"/",
    element:<Applayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/About",
        element:<About/>
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery/>
          </Suspense>
        ),
      },
      {
        path:"/Restaurant/:resId",
        element:<Resturant_menu/>
      },
      {
        path:"/Contact",
        element:<About/>
      },
      {
        path:"/Cart",
        element:<Cart/>
      }
    ]
  },
])

const heading_display= ReactDOM.createRoot(document.getElementById("main"));
heading_display.render(<Applayout/>);
heading_display.render(<RouterProvider router={approuter}/>);






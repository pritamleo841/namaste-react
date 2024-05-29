import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

//static loading 
import Header from "./components/Header";
import Body from "./components/Body";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestuarantMenu from "./components/RestuarantMenu";
import UserContext from "./utils/UserContext";

//lazy loading - on demand loading/code spilliting/dynamic bundling/dynamic import
const Grocery = lazy(()=>import("./components/Grocery"));

//redux imports
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const AppLayout = () => {

  const [userName,setUserName] = useState();

  useEffect(()=>{
    const info = {
      name : "Pritam Sharma"
    }
    setUserName(info.name);
  },[]);

  return (
    <Provider store={appStore}>
         <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
          <div className="app">
            <Header />
            <Outlet />
          </div>
        </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restuarant/:resId",
        element: <RestuarantMenu />,
      },
      {
        path:"/cart",
        element:<Cart />
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading Grocery Page</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

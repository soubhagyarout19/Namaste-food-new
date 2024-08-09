import ReactDOM from "react-dom/client";
import Body from "./src/Body";
import Header from "./src/Header";
import Footer from "./src/Footer";
import Contact from "./src/Pages/Contact";
import Error from "./src/Pages/Error";
import Cart from "./src/Pages/Cart";
import Login from "./src/Pages/Login";
import RestaurantMenu from "./src/Pages/RestaurantMenu";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Profile from "./src/Pages/Inside About/Profile";
import { lazy,Suspense } from "react";
import store from "./src/utils/store";
import { Provider } from "react-redux";

const About = lazy(()=>import("./src/Pages/About"));

const App = ()=>{
    return(
        <>
        <Provider store={store}>
        <Header />
        <Outlet/>
        <Footer />
        </Provider>
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<Suspense><About/></Suspense>,
                children:[
                    {
                        path:"profile",
                        element:<Profile/>
                    }
                ]
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/restaurant/:id",
                element:<RestaurantMenu/>
            },
            {
                path:"/login",
                element:<Login/>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
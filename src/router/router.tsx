import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/HomePage";
import About from "../pages/AboutPage";
import Contact from "../pages/ContactPage";
import Error from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {path: '/', element: <Home />},
            {path: '/home', element: <Home />},
            {path: '/about', element: <About />},
            {path: '/contact', element:<Contact />}
        ]
    },
    {
        path: '/*',
        element: <Error />
    }
    
])

export default router
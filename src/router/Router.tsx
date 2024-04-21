import { createBrowserRouter } from "react-router-dom";
import Layout from '../layouts/layout.jsx';
import Auth from '../components/auth/auth.jsx';

const Router = createBrowserRouter([
    {
        path: '/', element: <Layout />
    },
    {
        path: '/auth', element: <Auth />
    },
    {
        path: '*', element: <div>Page Not Found</div>
    }
]);

export default Router;
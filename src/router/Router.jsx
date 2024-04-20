import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from '../layouts/layout.tsx';
import Auth from '../components/auth/auth.tsx';

const Router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/' element={<Layout />}/>
            <Route path='/auth' element={<Auth />}/>
            <Route path='*' element={<div>Page Not Found</div>} />
        </>
    )
);

export default Router;
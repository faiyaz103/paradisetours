import React from 'react';
import { Route,
        createBrowserRouter,
        createRoutesFromElements,
        Router,    
        RouterProvider
 } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import DestinationsPage from './pages/DestinationsPage';
import PackagesPage from './pages/PackagesPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

const App = () => {

    const router=createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<MainLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path='/destinations' element={<DestinationsPage/>}/>
                <Route path='/packages' element={<PackagesPage/>}/>
                <Route path='/blog' element={<BlogPage/>}/>
                <Route path='/contact' element={<ContactPage/>}/>
            </Route>
        )
    );


  return <RouterProvider router={router}/>
}

export default App
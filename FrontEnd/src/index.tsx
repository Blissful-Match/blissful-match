import './styles/index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';

import configureAppStore, { getPreloadedState } from './store/configureStore';
import AppContextProvider from './contexts/AppContextProvider';
// import { ToDoList } from '@components/ToDo/ToDoList';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login/LoginPage';
import Home from './pages/Home/HomePage';
import About from './pages/AboutPage';
import MembersList from './pages/Members/MembersList';
import { Packages } from './pages/packages';
import MyViewHistory from './pages/MyViewHistory/MyViewHistory';
import LikedProfiles from './pages/LikedProfiles/LikedProfiles';
import { Profile } from './pages/profile';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/members',
        element: <MembersList />,
    },
    {
        path: '/my-view-history',
        element: <MyViewHistory />,
    },
    {
        path: '/packages',
        element: <Packages />,
    },
    {
        path: '/profile/:id',
        element: <Profile />,
    },
    {
        path: '/liked-profiles',
        element: <LikedProfiles />,
    },
]);

(async () => {
    const preloadedState = getPreloadedState();

    const root = createRoot(document.getElementById('root'));

    root.render(
        <React.StrictMode>
            <ReduxProvider store={configureAppStore(preloadedState)}>
                <AppContextProvider>
                    <RouterProvider router={router} />
                </AppContextProvider>
            </ReduxProvider>
        </React.StrictMode>
    );
})();

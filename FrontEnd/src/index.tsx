import './styles/index.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';

import configureAppStore, { getPreloadedState } from './store/configureStore';

import AppContextProvider from './contexts/AppContextProvider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login/LoginPage';
import Home from './pages/Home/HomePage';
import About from './pages/AboutPage';
import MembersList from './pages/Members/MembersList';

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

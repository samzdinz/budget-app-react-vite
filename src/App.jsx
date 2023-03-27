import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//layouts
import Main, { mainLoader } from './layouts/Main';

//route
import Dashboard, { dashboardLoader } from './pages/dashboard';
import Error from './pages/Error';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        loader: mainLoader,
        errorElement: <Error />,
        children: [
            {
                index: true,
                path: '/',
                element: <Dashboard />,
                loader: dashboardLoader,
                errorElement: <Error />,
            },
            {
                path: '/about',
                element: <p>ini about</p>,
                loader: dashboardLoader,
                errorElement: <Error />,
            },
        ],
    },
]);

function App() {
    return (
        <div className='App'>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;

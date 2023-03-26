import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//route
import Dashboard, { dashboardLoader } from './pages/dashboard';
import Error from './pages/Error';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />,
        loader: dashboardLoader,
        errorElement: <Error />,
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

import { Outlet, useLoaderData } from 'react-router-dom';
import { fetchData } from '../helpers';

import wave from '../assets/wave.svg';
import Nav from '../components/Nav';

export function mainLoader() {
    const userName = fetchData('userName');
    return { userName };
}

const Main = () => {
    const { userName } = useLoaderData();
    return (
        <div className='layout'>
            <Nav />
            <h1>main</h1>
            <main>
                <Outlet />
            </main>
            <img src={wave} alt='' srcset='' />
        </div>
    );
};

export default Main;

import React from 'react';
import { NavLink } from 'react-router-dom';

//logo home
import logohome from '../assets/logomark.svg';

export default function Nav() {
    return (
        <nav>
            <NavLink>
                <img src={logohome} alt='' height={30} />
                <span>UangKeyzie</span>
            </NavLink>
        </nav>
    );
}

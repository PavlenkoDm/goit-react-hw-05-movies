import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Suspense } from 'react';

const SharedLayout = () => {
    return (
        <>
            <header className="header">
                <nav>
                    <NavLink to="/" className="navlink">
                        Home
                    </NavLink>

                    <NavLink to="/movies" className="navlink">
                        Movies
                    </NavLink>
                </nav>
            </header>
            <Suspense>
                <Outlet />
            </Suspense>
        </>
    );
};

export default SharedLayout;

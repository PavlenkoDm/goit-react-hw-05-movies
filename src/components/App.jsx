import { Navigate, Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
const Home = lazy(() => import('pages/Home'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Movies = lazy(() => import('pages/Movies'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));
const SharedLayout = lazy(() => import('./SharedLayout'));


export function App() {
    return (
        <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route index element={<Home />} />
                    <Route path="/movies" element={<Movies />} />

                    <Route path="/movies/:movieId" element={<MovieDetails />}>
                        <Route path="cast" element={<Cast />} />
                        <Route path="reviews" element={<Reviews />} />
                    </Route>

                <Route path="*" element={<Navigate to="/" />} />
            </Route>
        </Routes>
    );
}

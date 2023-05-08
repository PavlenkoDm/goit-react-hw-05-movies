import { Link, useNavigate, Outlet, useLocation, useParams } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { Loading } from 'notiflix';
import { getImagesFromApi } from 'components/index';

const baseImageURL = 'https://image.tmdb.org/t/p/original';

const MovieDetails = () => {
    const { movieId } = useParams();
    const location = useLocation();
    const [movie, setMovie] = useState({});
    const fromLink = useRef(location.state?.from ?? { pathname: '/' });
    const navigate = useNavigate();

    useEffect(() => {
        if (!movieId) return;
        Loading.arrows();

        getImagesFromApi(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=854977f2e9fa8d2e098b4e957b2e6d0a&language=en-US`
        )
            .then(data => {
                if (!data) {
                    console.log('Ooops something wrong!');
                    return;
                }

                const { genres, title, release_date, poster_path, vote_average, overview } = data;

                setMovie({
                    movieGenres: genres.map(({ name }) => name).join(' '),
                    releaseDate: new Date(release_date).getUTCFullYear(),
                    title,
                    imgUrl: `${baseImageURL}${poster_path}`,
                    userScore: Math.round(vote_average * 10),
                    overview,
                });
            })
            .catch(err => console.log(err.message))
            .finally(() => {
                Loading.remove();
            });
    }, [movieId]);

    const { movieGenres, releaseDate, title, imgUrl, userScore, overview } = movie;

    return (
        <main>
            <section>
                <button
                    className='back-btn'
                    type="button"
                    onClick={() => navigate(`${fromLink.current.pathname}${fromLink.current.search}`)}
                >
                    Go Back
                </button>
                <h1 style={{ display: 'none' }}>Main movie info</h1>
                <article className='movie-info'>
                    <img className='poster' src={imgUrl} alt={movieGenres} style={{ width: 200 }} />
                    <div>
                        <h2>
                            {title} ({releaseDate})
                        </h2>
                        <p>User Score: {userScore}%</p>
                        <h3>Overview</h3>
                        <p className='description'>{overview}</p>
                        <h3>Genres</h3>
                        <p>{movieGenres}</p>
                    </div>
                </article>
            </section>
            <section className='additional'>
                <h2>Additional information</h2>
                <div>
                    <ul className='additional_list'>
                        <li>
                            <Link to="cast">Cast</Link>
                        </li>
                        <li>
                            <Link to="reviews">Rewievs</Link>
                        </li>
                    </ul>
                </div>
            </section>
            <Outlet />
        </main>
    );
};

export default MovieDetails;

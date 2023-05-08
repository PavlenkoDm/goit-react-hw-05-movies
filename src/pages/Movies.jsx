import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Loading } from 'notiflix';
import { getImagesFromApi } from 'components/index';
import SearchForm from '../components/SearhForm';
import LinkToMovie from 'components/LinkToMovie';

const Movies = () => {
    const [searchedMovies, setSearchedMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const queryParams = searchParams.get('query');

    useEffect(() => {
        if (!queryParams) return;

        setSearchedMovies([]);

        Loading.arrows();

        getImagesFromApi(
            `https://api.themoviedb.org/3/search/movie?api_key=854977f2e9fa8d2e098b4e957b2e6d0a&query=${queryParams}&language=en-US`
        )
            .then(response => {
                const { results } = response;
                if (results.length === 0) {
                    alert('We found nothing');
                    return;
                }

                const modifiedResult = results.map(({ title, id }) => {
                    return { id, title };
                });
                setSearchedMovies(modifiedResult);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(Loading.remove);
    }, [queryParams]);

    const handleSubmit = value => {
        setSearchParams({ query: value });
    };

    return (
        <main>
            <SearchForm onSubmit={handleSubmit}/>

            <ul>
                {searchedMovies.map(item => {
                    return (
                        <LinkToMovie key={item.id} {...item} />
                    );
                })}
            </ul>
        </main>
    );
};

export default Movies;

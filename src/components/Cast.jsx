import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getImagesFromApi } from 'api/api';
import { Loading } from 'notiflix';

const baseImageURL = 'https://image.tmdb.org/t/p/original';

const Cast = () => {
    const { movieId } = useParams();
    const [actors, setActors] = useState([]);

    useEffect(() => {
        if (!movieId) return;
        Loading.arrows();
        getImagesFromApi(
            `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=854977f2e9fa8d2e098b4e957b2e6d0a&language=en-US`
        )
            .then(response => {
                const { cast } = response;
                const actorsInfo = cast.map(actor => {
                    const { character, name, profile_path } = actor;
                    return {
                        character,
                        name,
                        photo: `${baseImageURL}${profile_path}`,
                    };
                });

                setActors(actorsInfo);
            })
            .catch(error => console.log(error))
            .finally(Loading.remove);
    }, [movieId]);

    return (
        <>
            <ul>
                {actors.map(actor => {
                    const { name, character, photo } = actor;
                    return (
                        <li key={name}>
                            <img className='actors' src={photo} alt={name} style={{ width: 75, height: 110}} />
                            <p>{name}</p>
                            <p>Character: {character}</p>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default Cast;

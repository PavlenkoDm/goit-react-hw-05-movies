import { useEffect, useState } from 'react';
import { getImagesFromApi } from 'components/index';
import { Loading } from 'notiflix';
import LinkToMovie from 'components/LinkToMovie';


const Home = () => {
    const [trending, setTrending] = useState([]);

    useEffect(() => {
        Loading.arrows();
        getImagesFromApi('https://api.themoviedb.org/3/trending/movie/day?api_key=854977f2e9fa8d2e098b4e957b2e6d0a&language=en-US')
            .then(response => {
                const { results } = response;
                
                const modifiedResult = results.map(({ title, id}) => {
                    return { id, title};
                });
                
                setTrending(modifiedResult);
            })
            .catch(error => console.log(error))
            .finally(Loading.remove);
    }, []);

    return (
        <main>
            <h1>Tranding today</h1>
            <ul>
                {trending.map(item => {
                    return (
                        <LinkToMovie key={item.id} {...item} />
                    );
                })}
            </ul>
        </main>
    );
};

export default Home;

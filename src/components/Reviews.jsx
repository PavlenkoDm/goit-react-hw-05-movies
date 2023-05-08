import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getImagesFromApi } from 'api/api';
import { Loading } from 'notiflix';

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        if (!movieId) return;
        Loading.arrows();
        getImagesFromApi(
            `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=854977f2e9fa8d2e098b4e957b2e6d0a&language=en-US&page=1`
        )
            .then(response => {
                if (response.results.length === 0) {
                    console.log('No reviews yet...');
                    return;
                }
                const { results } = response;
                const reviewInfo = results.map(result => {
                    const { author, id, content } = result;
                    return {
                        author,
                        id,
                        content,
                    };
                });
                setReviews(reviewInfo);
            })
            .catch(error => console.log(error))
            .finally(Loading.remove);
    }, [movieId]);

    return (
        <>
            {reviews.length === 0 ? (
                <p>We don't have any reviews for this movie</p>
            ) : (
                <ul>
                    {reviews.map(review => {
                        const { author, id, content } = review;
                        return (
                            <li key={id}>
                                <h3>Author: {author}</h3>
                                <p>{content}</p>
                            </li>
                        );
                    })}
                </ul>
            )}
        </>
    );
};

export default Reviews;

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function SingleMovie() {

    //prende l'id dall'url 
    const { id } = useParams()

    //stato per conservare i dati del film
    const [movie, setMovies] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3000/api/v1/movies/${id}`)
            .then(response => response.json())
            .then(data => {
                setMovies(data)
                console.log(data)
            })
            .catch(error => console.error('Nessun film trovato', error));
    }, [id]);

    //funzione per creare la valutazione

    function star(vote) {
        const stars = [];
        const empty = [];

        for (let i = 0; i < vote; i++) {
            stars.push(<i key={`star-${i}`} className="bi bi-star-fill text-warning"></i>);
        }

        for (let i = 0; i < 5 - vote; i++) {
            empty.push(<i key={`empty-${i}`} className="bi bi-star text-warning"></i>);
        }

        return [...stars, ...empty];
    }

    return (
        <>
            {/* jumbotron */}
            <div className="jumbotron p-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img
                                src={`http://localhost:3000/images/${movie.image}`}
                                alt={movie.title}
                                className="img-fluid"
                            />
                        </div>
                        <div className="col-md-8">
                            <h1 className="display-4">{movie.title}</h1>
                            <p className="lead">{movie.abstract}</p>
                            <hr className="my-4" />
                            <p><strong>Genre:</strong> {movie.genre}</p>
                            <p><strong>Director:</strong> {movie.director}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* reviews */}
            {movie?.reviews && movie.reviews.length > 0 ? (
                <div className="container mb-5 reviews">
                    <h2 className='text-center mb-3'>Reviews</h2>
                    <ul className="list-group">
                        {movie.reviews.map((review) => (
                            <li key={review.id} className="list-group-item">
                                <strong><i className="bi bi-person"></i> {review.name}:</strong>
                                <p>{review.text}</p>
                                <span>Voto: {star(review.vote)}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (<p>Nessuna review disponibile</p>)}
        </>
    );
}

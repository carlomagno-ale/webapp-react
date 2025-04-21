import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import MovieReview from '../components/MovieReview';

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

    return (
        <>
            <Link to={`/`} className="text-decoration-none text-dark">
                <div className="container mt-3 text-center">
                    <button
                        className="btn btn-outline-dark"
                    >
                        <i className="bi bi-arrow-left"></i> Torna alla Homepage
                    </button>

                </div>
            </Link>

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
                            <MovieReview key={review.id} userReview={review} />
                        ))}
                    </ul>
                </div>
            ) : (<p>Nessuna review disponibile</p>)}
        </>
    );
}

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';


export default function Home() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/movies')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setMovies(data);
            })
    }, []);


    return (

        <>
            <div className="container d-flex justify-content-center pt-4">
                <div className="row justify-content-center">
                    {movies.map((movie) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4 d-flex justify-content-center" key={movie.id}>
                            <Link to={`/movies/${movie.id}`} className="text-decoration-none text-dark">
                                <div className="card">
                                    <img
                                        src={`http://localhost:3000/images/${movie.image}`}
                                        className="card-img-top"
                                        alt={movie.title}
                                    />
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
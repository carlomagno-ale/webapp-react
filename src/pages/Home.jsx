import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';


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

        <div className="container d-flex justify-content-center pt-4">
            <div className="row justify-content-center">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>

    )
}
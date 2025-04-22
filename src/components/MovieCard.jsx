import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {

    const { id, title, image } = movie;

    return (

        <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4 d-flex justify-content-center">
            <Link to={`/movies/${id}`} className="text-decoration-none text-dark">
                <div className="card">
                    <img
                        src={image ? `http://localhost:3000/images/${image}` : '/placeholder.jpg'}
                        className="card-img-top"
                        alt={title}
                    />
                </div>
            </Link>
        </div>
    )
}
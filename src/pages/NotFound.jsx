import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="text-center my-5">
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link to={`/`} className="text-decoration-none text-dark">
                <div className="container mt-3 text-center">
                    <button
                        className="btn btn-outline-dark"
                    >
                        <i className="bi bi-arrow-left"></i> Torna alla Home
                    </button>

                </div>
            </Link>

        </div>
    );
}
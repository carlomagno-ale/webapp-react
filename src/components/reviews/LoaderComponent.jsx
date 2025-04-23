export default function () {

    return (

        <div className="d-flex justify-content-center align-items-center vh-100">

            <div className="spinner-grow text-primary" role="status">
            </div>
            <div className="spinner-grow text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-danger" role="status">
            </div>
        </div>
    )
}
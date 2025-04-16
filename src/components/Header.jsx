import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {

    return (

        <header>
            <div className="container mb-4 text-center">
                <a className="navbar-brand" href="/">
                    <img src="./public/logoipsum-custom-logo.svg" alt="logo" />
                </a>
            </div>
        </header>

    );
}
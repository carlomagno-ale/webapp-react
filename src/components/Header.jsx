import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {

    return (

        <header>
            <div className="container text-center">
                <a className="navbar-brand" href="/">
                    <img src="/logoipsum-custom-logo.svg" alt="logo" />
                </a>
            </div>
        </header>

    );
}
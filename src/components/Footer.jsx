export default function Footer() {

    return (
        <footer className="footer-up text-center text-lg-start">
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">About Us</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ad illo repellendus sint quas iste asperiores optio ducimus iure dolores.
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#" className="text-dark">Home</a>
                            </li>
                            <li>
                                <a href="#" className="text-dark">About</a>
                            </li>
                            <li>
                                <a href="#" className="text-dark">Services</a>
                            </li>
                            <li>
                                <a href="#" className="text-dark">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Follow Us</h5>
                        <div className="d-flex gap-2">

                            <a href="#" className="text-dark ">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="#" className="text-dark">
                                <i className="bi bi-twitter"></i>
                            </a>
                            <a href="#" className="text-dark ">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="#" className="text-dark">
                                <i className="bi bi-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center p-3 footer-low">
                © 2025 Copyright
            </div>
        </footer>
    );
}
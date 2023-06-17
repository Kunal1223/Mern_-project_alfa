import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Navbar</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto me-3" >
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Contect</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Signup</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar

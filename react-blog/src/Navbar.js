function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg brand-dark-bg">
            <div className="container-fluid">
            <div className="navbar-brand typewriter">-= RM =-</div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link typewriter" aria-current="page" href="https://www.google.com">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link typewriter" href="https://www.google.com">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link typewriter" href="https://www.google.com">About</a>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    )
};

export default Navbar;
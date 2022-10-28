function Navbar(props) {

    function handleClick(linkID) {
        props.pageUpdater(linkID);
    }

    return (
        <nav className="navbar navbar-expand-lg brand-dark-bg text-end">
            <div className="container-fluid">
            <div className="navbar-brand typewriter" id="Landing" onClick={()=>handleClick("Landing")}>-= RM =-</div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse text-end" id="navbarNav">
                <ul className="navbar-nav text-end">
                    <li className="nav-item">
                        <span className="nav-link typewriter" aria-current="page" id="Blog" onClick={()=>handleClick("Blog")}>Blog</span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link typewriter" id="Portfolio" onClick={()=>handleClick("Portfolio")}>Portfolio</span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link typewriter" id="About" onClick={()=>handleClick("About")}>About</span>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    )
};

export default Navbar;
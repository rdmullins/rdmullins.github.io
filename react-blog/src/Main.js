import BlogTeaser from "./BlogTeaser";
import TWBackground from "./tw-cropped-horizontal.png";

function Main() {
    return (
        <div className="card text-bg-dark">
            <img src={TWBackground} className="card-img" alt="Horizontal Image - Typewriter on a Desk"/>
            <div className="card-img-overlay">
                <h5 className="card-title display-6">Roger Mullins</h5>
                <p className="card-text typewriter">Full-Stack Web Developer</p>
                <BlogTeaser />
            </div>
        </div>
    )
};

export default Main;
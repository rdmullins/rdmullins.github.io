import BlogTeaserImage from "./pexels-luis-gomes-546819.jpg";

function BlogTeaser() {
    return (
        <div className="card brand-dark-bg opacity-75 p-2 teaser-card">
            <h3 className="card-title">Latest Blog Entries</h3>
              <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card brand-bg">
                        <img src={BlogTeaserImage} className="card-img-top" alt="Screen of Code"/>
                        <div className="card-body">
                            <h5 className="card-title">Exploring the Development Process</h5>
                            <p className="card-text">Concepts from bootcamp for use in the bigger task of software development.</p>
                            <a href="https://www.google.com" className="btn btn-dark">Read More...</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card brand-bg">
                        <img src={BlogTeaserImage} className="card-img-top" alt="Screen of Code"/>
                        <div className="card-body">
                            <h5 className="card-title">Exploring the Development Process</h5>
                            <p className="card-text">Concepts from bootcamp for use in the bigger task of software development.</p>
                            <a href="https://www.google.com" className="btn btn-dark">Read More...</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BlogTeaser;
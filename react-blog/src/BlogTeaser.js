function BlogTeaser() {
    return (
        <div className="card text-bg-warning opacity-75 p-2">
            <h5 className="card-title display-6">Latest Blog Entries</h5>
              <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card">
                        <img src="../img/pexels-luis-gomes-546819.jpg" className="card-img-top" alt="Screen of Code"/>
                        <div className="card-body">
                            <h5 className="card-title">Exploring the Development Process</h5>
                            <p className="card-text">Concepts from bootcamp for use in the bigger task of software development.</p>
                            <a href="https://www.google.com" class="btn btn-dark">Read More...</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BlogTeaser;
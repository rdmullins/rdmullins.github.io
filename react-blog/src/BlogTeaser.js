import { blogPosts } from "./blogData";

function BlogTeaser() {

    console.log("Inside BlogTeaser function.");

    // This function pulls data from the two most recently-added posts
    // to the blogData.js file and uses that to generate the two
    // teaser cards displayed on the Main page

    let post1TeaserTitle = blogPosts[0].teaserTitle;
    let post2TeaserTitle = blogPosts[1].teaserTitle;
    let post1TeaserText = blogPosts[0].teaserText;
    let post2TeaserText = blogPosts[1].teaserText;
    let post1TeaserPhoto = blogPosts[0].teaserPhoto;
    let post2TeaserPhoto = blogPosts[1].teaserPhoto;

    console.log(blogPosts[0], blogPosts[1])

    return (
        <div className="card brand-dark-bg opacity-75 p-2 teaser-card">
            <h3 className="card-title">Latest Blog Entries</h3>
              <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card brand-bg">
                        <img src={post1TeaserPhoto} className="card-img-top" alt="Blog Teaser"/>
                        <div className="card-body">
                            <h5 className="card-title">{post1TeaserTitle}</h5>
                            <p className="card-text">{post1TeaserText}</p>
                            <a href="https://www.google.com" className="btn btn-dark">Read More...</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card brand-bg">
                        <img src={post2TeaserPhoto} className="card-img-top" alt="Blog Teaser"/>
                        <div className="card-body">
                            <h5 className="card-title">{post2TeaserTitle}</h5>
                            <p className="card-text">{post2TeaserText}</p>
                            <a href="https://www.google.com" className="btn btn-dark">Read More...</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BlogTeaser;
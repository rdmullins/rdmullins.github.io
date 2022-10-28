import Contact from "./Contact";
import RMResume from "./RM Resume.pdf";

function Footer() {
    return (
        <div className="footer sticky-bottom text-light brand-dark-bg p-4 text-center">
            <div className="row">
                <div className="col">
                    This is the footer.
                </div>
                <div className="col">
                    <a href={RMResume} target="blank">My Resume</a>
                </div>
                <div className="col">
                    Contact Information{/* <Contact /> */}
                </div>
            </div>
        </div>
    )
};

export default Footer;
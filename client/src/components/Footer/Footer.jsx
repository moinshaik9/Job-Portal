import "./Footer.css";

function Footer(){

    return(

        <footer className="footer">

            <h2>JobPortal</h2>

            <p>
                Connecting Talent with Opportunities.
            </p>

            <div className="footer-links">

                <a href="/">Home</a>
                <a href="/jobs">Jobs</a>
                <a href="/login">Login</a>
                <a href="/register">Register</a>

            </div>

            <p className="copyright">
                © 2026 JobPortal. All Rights Reserved.
            </p>

        </footer>

    );

}

export default Footer;

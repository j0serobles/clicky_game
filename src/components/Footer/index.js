import React    from "react";
import "./style.css";

function Footer(props) {

    return (
        <footer className="bd-footer text-muted">
        <div className="container mt-3">
            
            <p>
                Built with <a href="https://reactjs.org/" target="_blank"><i class="fab fa-react"></i>   React JS</a>
            </p>
            <p>
                Access the <a href="https://github.com/j0serobles/clicky-game" target="_blank">GitHub Repo</a>
            </p>
        </div>
        </footer>
    );
}

export default Footer;
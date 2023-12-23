import { Link } from "react-router-dom";

const Root = () => {
    return (
        <>
            <header>
                <h2>This is the header</h2>
            </header>
            <main>
                <p>This is the Homepage, click <Link to="/about">here</Link> for more details about us</p>
            </main>
            <footer>
                <h6>This is the footer of the page</h6>
            </footer>
        </>
    );
}

export default Root;
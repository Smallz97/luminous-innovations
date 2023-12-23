import { Link } from "react-router-dom";

const AboutPage = () => {
    return (
        <>
            <h3>This is the About page.</h3>
            <p>Click <Link to="/contact">here</Link> to visit the contact's page</p>
        </>
    );
}

export default AboutPage;
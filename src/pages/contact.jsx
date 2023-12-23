import { Link } from "react-router-dom";

const ContactPage = () => {
    return (
        <>
            <h3>This is the contact page.</h3>
            <p>Click <Link to="/about">here</Link> to visit the about page</p>
            <p>Click <Link to="/">here</Link> to go back to the home page</p>
        </>
    );
}

export default ContactPage;
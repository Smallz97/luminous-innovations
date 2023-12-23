import { createBrowserRouter } from "react-router-dom";
import Root from '../pages/root';
import AboutPage from '../pages/about';
import ContactPage from '../pages/contact';
import ErrorBoundary from '../pages/error';

const router = createBrowserRouter ([
    {
        path: "/",
        Component: Root,
        ErrorBoundary: ErrorBoundary
    },
    {
        path: "/about",
        Component: AboutPage
    },
    {
        path: "/contact",
        Component: ContactPage
    }
]);

export default router;
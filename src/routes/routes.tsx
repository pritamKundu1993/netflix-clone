import { Route, Routes } from 'react-router';
import { AuthLayout, BrowserLayout } from '../Layout';
import { Browse, Login, NotFoundPage, WatchPage } from '../pages';

const AppRoutes = () => {
    return (
        <Routes>
            {/* Auth Routes */}
            <Route element={<AuthLayout />}>
                <Route path="/" element={<Login />} />
            </Route>

            {/* Browse Routes (protected section) */}
            <Route element={<BrowserLayout />}>
                <Route path="/browse" element={<Browse />} />
                <Route path="/movie/:id" element={<WatchPage />} />
            </Route>

            {/* Wildcard Route for 404 Not Found */}
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default AppRoutes;

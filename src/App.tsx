import { BrowserRouter } from 'react-router';
import AppRoutes from './routes/routes';
import { Toaster } from 'react-hot-toast';

const App = () => {
    return (
        <>
            <Toaster position="top-right" />
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </>
    );
};

export default App;

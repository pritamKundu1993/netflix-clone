import { useEffect } from 'react';
import AppRoutes from './routes/routes';
import { auth } from './utils/firebase';
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from './features/auth/authSlice';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid, email, displayName }));
            } else {
                dispatch(removeUser());
            }
        });
    }, []);

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

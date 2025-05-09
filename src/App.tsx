import { useEffect } from 'react';
import AppRoutes from './routes/routes';
import { auth } from './utils/firebase';
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from './features/auth/authSlice';

const App = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid, email, displayName }));
                navigate('/browse');
            } else {
                dispatch(removeUser(user));
                navigate('/');
            }
        });
        return () => unsubcribe();
    }, []);

    return (
        <>
            <Toaster position="top-right" />
            <AppRoutes />
        </>
    );
};

export default App;

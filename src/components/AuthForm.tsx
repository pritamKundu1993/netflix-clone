import { useState } from 'react';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from 'firebase/auth';
import { auth } from '@/utils/firebase';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { addUser } from '@/features/auth/authSlice';

// Zod validation schemas
const signInSchema = z.object({
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
        .string()
        .min(8, 'Password must be at least 8 characters')
        .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character'),
});

const signUpSchema = signInSchema.extend({
    name: z.string().min(1, 'Full name is required'),
});

type SignInData = z.infer<typeof signInSchema>;
type SignUpData = z.infer<typeof signUpSchema>;
type FormData = SignInData | SignUpData;

const AuthForm = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [showRecaptchaInfo, setShowRecaptchaInfo] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const toggleMode = () => setIsSignIn((prev) => !prev);
    const handleRecaptchaClick = () => setShowRecaptchaInfo(true);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        mode: 'all',
        resolver: zodResolver(isSignIn ? signInSchema : signUpSchema),
    });

    const onSubmit = async (data: FormData) => {
        try {
            if (isSignIn) {
                const userCredential = await signInWithEmailAndPassword(
                    auth,
                    data.email,
                    data.password
                );

                const user = userCredential.user;

                dispatch(
                    addUser({
                        email: user.email ?? '',
                        uid: user.uid,
                        displayName: user.displayName ?? '',
                        photoURL: user.photoURL ?? '',
                    })
                );

                toast.success('Successfully signed in!');
                navigate('/browse');
            } else {
                const userCredential = await createUserWithEmailAndPassword(
                    auth,
                    data.email,
                    data.password
                );
                const user = userCredential.user;

                if ('name' in data) {
                    await updateProfile(user, {
                        displayName: data.name,
                        photoURL:
                            'https://i.pinimg.com/564x/1b/a2/e6/1ba2e6d1d4874546c70c91f1024e17fb.jpg',
                    });

                    // Reload user to get updated displayName
                    await user.reload();

                    const updatedUser = auth.currentUser;

                    if (updatedUser) {
                        dispatch(
                            addUser({
                                email: updatedUser.email ?? '',
                                uid: updatedUser.uid,
                                displayName: updatedUser.displayName ?? '',
                                photoURL: updatedUser.photoURL ?? '',
                            })
                        );
                    }
                }

                toast.success('Account created successfully!');
                navigate('/browse');
            }

            reset();
        } catch (error) {
            const err = error as Error;
            toast.error(err.message);
        }
    };

    return (
        <div className="relative z-10 flex justify-center items-center h-full">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-[rgba(0,0,0,.8)] text-white p-10 w-[380px] rounded-md space-y-6"
            >
                <h2 className="text-3xl font-semibold">{isSignIn ? 'Sign In' : 'Sign Up'}</h2>

                {!isSignIn && (
                    <div>
                        <input
                            type="text"
                            placeholder="Full Name"
                            {...register('name')}
                            className="w-full px-4 py-3 rounded bg-[#333] focus:outline-none"
                        />
                        {errors.name && (
                            <p className="text-sm text-red-500">{errors.name.message}</p>
                        )}
                    </div>
                )}

                <div>
                    <input
                        type="email"
                        placeholder="Email or mobile number"
                        {...register('email')}
                        className="w-full px-4 py-3 rounded bg-[#333] focus:outline-none"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                </div>

                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        {...register('password')}
                        className="w-full px-4 py-3 rounded bg-[#333] focus:outline-none"
                    />
                    {errors.password && (
                        <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 transition-colors py-3 font-semibold rounded cursor-pointer"
                >
                    {isSignIn ? 'Sign In' : 'Sign Up'}
                </button>

                {isSignIn && (
                    <>
                        <div className="text-center text-gray-400">OR</div>
                        <button
                            type="button"
                            className="w-full bg-gray-600 hover:bg-gray-500 transition-colors py-3 font-medium rounded"
                        >
                            Use a sign-in code
                        </button>

                        <div className="flex justify-between items-center text-sm text-gray-400">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="accent-white" />
                                Remember me
                            </label>
                            <a href="#" className="hover:underline">
                                Forgot password?
                            </a>
                        </div>
                    </>
                )}

                <div className="text-sm text-gray-400">
                    {isSignIn ? 'New to Netflix?' : 'Already have an account?'}{' '}
                    <button
                        type="button"
                        onClick={toggleMode}
                        className="text-white hover:underline cursor-pointer"
                    >
                        {isSignIn ? 'Sign up now.' : 'Sign in.'}
                    </button>
                </div>

                <p className="text-xs text-gray-500 leading-snug">
                    This page is protected by Google reCAPTCHA to ensure you're not a bot.&nbsp;
                    {!showRecaptchaInfo ? (
                        <a
                            onClick={handleRecaptchaClick}
                            className="text-blue-500 hover:underline cursor-pointer"
                        >
                            Learn more.
                        </a>
                    ) : (
                        <>
                            The information collected by Google reCAPTCHA is subject to the{' '}
                            <a
                                href="https://policies.google.com/privacy"
                                className="text-blue-500 underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Google Privacy Policy
                            </a>{' '}
                            and{' '}
                            <a
                                href="https://policies.google.com/terms"
                                className="text-blue-500 underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Terms of Service
                            </a>
                            .
                        </>
                    )}
                </p>
            </form>
        </div>
    );
};

export default AuthForm;

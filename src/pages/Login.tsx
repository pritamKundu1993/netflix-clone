import { LoginHeader, AuthForm } from '../components';

const Login = () => {
    return (
        <div className="relative h-screen w-full">
            {/* Background image */}
            <img
                src="https://assets.nflxext.com/ffe/siteui/vlv3/9390f6f6-cf80-4bc9-8981-8c2cc8adf98a/web/IN-en-20250421-TRIFECTA-perspective_dc5bcfdf-88a5-4972-8ffe-b28ff942f76e_large.jpg"
                alt="Netflix Background"
                className="absolute inset-0 w-full h-[150vh] object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 w-full h-[150vh] bg-black opacity-50"></div>

            {/* Header with logo */}
            <LoginHeader />
            {/* Login form */}
            <AuthForm />
        </div>
    );
};

export default Login;

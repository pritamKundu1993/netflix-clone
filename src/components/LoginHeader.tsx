// src/components/LoginHeader.tsx

import { LOGO_URL } from '@/utils/constanct';

const LoginHeader = () => {
    return (
        <div className="relative z-10 pt-5 pl-[150px]">
            <img src={LOGO_URL} alt="Netflix Logo" className="w-[150px] h-[70px]" />
        </div>
    );
};

export default LoginHeader;

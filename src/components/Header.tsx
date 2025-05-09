import toast from 'react-hot-toast';
import { RootState } from '../store';
import { signOut } from 'firebase/auth';
import { auth } from '@/utils/firebase';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router';
import { LOGO_URL, PROFILE_URL } from '@/utils/constanct';
import { Bell, Heart, Search, ChevronDown } from 'lucide-react';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const BrowseHeader = () => {
    const user = useSelector((state: RootState) => state.user);

    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                toast.success('Signed out successfully');
                navigate('/');
            })
            .catch((error) => {
                toast.error('Error signing out');
                console.error(error);
            });
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 bg-gradient-to-b from-black/80 to-transparent text-white">
            {/* Left Section */}
            <div className="flex items-center gap-10">
                <img
                    src={LOGO_URL}
                    alt="Netflix Logo"
                    className="w-[150px] h-[70px] object-contain"
                />
                <nav className="flex gap-5 text-sm font-semibold">
                    <Link to="/browse" className="hover:text-gray-300">
                        HOME
                    </Link>
                    <a href="#" className="hover:text-gray-300">
                        TV SHOWS
                    </a>
                    <a href="#" className="hover:text-gray-300">
                        MOVIES
                    </a>
                    <a href="#" className="hover:text-gray-300">
                        NEW & POPULAR
                    </a>
                </nav>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-6">
                <Search className="w-5 h-5 cursor-pointer hover:text-gray-300" />
                <Heart className="w-5 h-5 cursor-pointer hover:text-gray-300" />
                <Bell className="w-5 h-5 cursor-pointer hover:text-gray-300" />

                {/* Dropdown */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className="flex items-center gap-2 cursor-pointer">
                            <img
                                src={PROFILE_URL}
                                alt="User"
                                className="w-10 h-10 rounded object-cover"
                            />
                            <span className="text-sm">{user?.displayName || 'Profile'}</span>
                            <ChevronDown className="w-4 h-4" />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-black text-white border border-gray-700 mt-2 w-48 cursor-pointer">
                        <DropdownMenuLabel>Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Manage Profiles</DropdownMenuItem>
                        <DropdownMenuItem>Account Settings</DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={handleSignOut}
                            className="text-red-500 hover:bg-red-500 hover:text-white cursor-pointer"
                        >
                            Sign Out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
};

export default BrowseHeader;

import React from 'react';

interface VideoTitleProps {
    title: string;
    overview: string;
}

const VideoTitle: React.FC<VideoTitleProps> = ({ title, overview }) => {
    return (
        <div className="absolute inset-0  text-white p-6 md:p-12 flex flex-col justify-center z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
            <p className="text-sm md:text-lg max-w-2xl mb-6 line-clamp-4">{overview}</p>
            <div className="flex gap-4">
                <button className="bg-white text-black font-semibold px-6 py-2 rounded cursor-pointer hover:bg-opacity-80 transition">
                    ▶ Play
                </button>
                <button className="bg-gray-500  text-white font-semibold px-6 py-2 rounded hover:bg-opacity-50 transition cursor-pointer">
                    ℹ More Info
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;

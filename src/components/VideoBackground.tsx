import { useYoutubeTrailer } from '@/hooks/useYouTubeTrailer';
import React from 'react';

interface VideoBackgroundProps {
    movieId: number;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ movieId }) => {
    const { trailerKey, loading } = useYoutubeTrailer(movieId);

    if (loading || !trailerKey) return null;

    return (
        <div className="w-full h-[120vh]  relative overflow-hidden">
            <iframe
                className="w-full h-full aspect-video absolute top-0 left-0 pointer-events-none"
                src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&showinfo=0&loop=1&playlist=${trailerKey}`}
                title="Movie Trailer"
                allow="autoplay; encrypted-media"
                allowFullScreen
            />
        </div>
    );
};

export default VideoBackground;

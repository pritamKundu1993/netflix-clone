// hooks/useYoutubeTrailer.ts
import { API_OPTIONS, BACKGROUND_VIDEO_BASE_API_URL } from '@/utils/constanct';
import { useEffect, useState } from 'react';

export interface TMDBVideo {
    id: string;
    key: string;
    name: string;
    site: 'YouTube' | 'Vimeo';
    type: string;
    official: boolean;
}

export const useYoutubeTrailer = (movieId: number) => {
    const [trailerKey, setTrailerKey] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTrailer = async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    `${BACKGROUND_VIDEO_BASE_API_URL}/movie/${movieId}/videos`,
                    API_OPTIONS
                );
                const data = await response.json();

                const trailer = data.results.find(
                    (video: TMDBVideo) =>
                        video.type === 'Trailer' && video.site === 'YouTube' && video.official
                );

                setTrailerKey(trailer?.key ?? null);
            } catch (error) {
                console.error('Failed to fetch trailer:', error);
                setTrailerKey(null);
            } finally {
                setLoading(false);
            }
        };

        if (movieId) fetchTrailer();
    }, [movieId]);

    return { trailerKey, loading };
};

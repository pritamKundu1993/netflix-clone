import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { API_OPTIONS, BACKGROUND_VIDEO_BASE_API_URL } from '@/utils/constanct';

const WatchPage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [videoKey, setVideoKey] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTrailer = async () => {
            try {
                const response = await fetch(
                    `${BACKGROUND_VIDEO_BASE_API_URL}/movie/${id}/videos`,
                    API_OPTIONS
                );
                const data = await response.json();
                const trailer = data.results.find(
                    (vid: any) => vid.type === 'Trailer' && vid.site === 'YouTube'
                );
                setVideoKey(trailer?.key || null);
            } catch (error) {
                console.error('Failed to fetch trailer:', error);
            } finally {
                setLoading(false);
            }
        };

        if (id) fetchTrailer();
    }, [id]);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen bg-black">
                <Loader2 className="w-6 h-6 text-white animate-spin" />
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black px-4 py-6">
            <Button onClick={() => navigate(-1)} className="mb-4">
                ⬅ Back
            </Button>

            {videoKey ? (
                <div className="w-full max-w-4xl aspect-video">
                    <iframe
                        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1`}
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title="Movie Trailer"
                        className="w-full h-full rounded-md"
                    />
                </div>
            ) : (
                <p className="text-white">Trailer not available</p>
            )}
        </div>
    );
};

export default WatchPage;

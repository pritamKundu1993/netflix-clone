import { Card } from '@/components/ui/card';
import { IMAGE_CDN } from '@/utils/constanct';
import { Link } from 'react-router';

type Movie = {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    vote_average: number;
};

const MovieCard = ({ movie }: { movie: Movie }) => {
    return (
        <Link to={`/movie/${movie.id}`}>
            <Card className="min-w-[200px] max-w-[200px] h-auto flex-shrink-0 bg-background border-none shadow-black hover:scale-100 transition-transform duration-300 overflow-hidden cursor-pointer rounded-none p-0">
                <img
                    src={IMAGE_CDN + movie.poster_path}
                    alt={movie.title}
                    className="w-full h-[300px] object-cover"
                />
            </Card>
        </Link>
    );
};

export default MovieCard;

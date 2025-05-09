import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MovieCard from './MovieCard';

type Movie = {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    vote_average: number;
};

const MovieList = ({ title, movies }: { title: string; movies: Movie[] }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo =
                direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    if (!movies?.length) return null;

    return (
        <div className="relative group px-6 py-6">
            <h2 className="text-xl font-semibold mb-4 text-bold text-gray-400">{title}</h2>

            {/* Scroll Left Button */}
            <button
                onClick={() => scroll('left')}
                className="hidden group-hover:block absolute z-10 left-0 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full cursor-pointer"
            >
                <ChevronLeft />
            </button>

            {/* Movie Scroll Row */}
            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-scroll no-scrollbar scroll-smooth"
            >
                {movies?.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>

            {/* Scroll Right Button */}
            <button
                onClick={() => scroll('right')}
                className="hidden group-hover:block absolute z-10 right-0 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full cursor-pointer"
            >
                <ChevronRight />
            </button>
        </div>
    );
};

export default MovieList;

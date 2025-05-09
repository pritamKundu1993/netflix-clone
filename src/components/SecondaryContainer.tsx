import { useSelector } from 'react-redux';
import MovieList from './MovieList';
import { RootState } from '@/store';

const SecondaryContainer = () => {
    const movies = useSelector((store: RootState) => store.movies);

    return (
        <div className="flex flex-col gap-1 px-6 bg-black">
            <div className="-mt-65">
                <MovieList title="Now Playing Movies" movies={movies.nowPlayingMovies} />
                <MovieList title="popular Movies" movies={movies.popularMovies} />
                <MovieList title="Top rated Movies" movies={movies.topRatedMovies} />
                <MovieList title="upcoming Movies" movies={movies.upcomingMovies} />
            </div>
        </div>
    );
};

export default SecondaryContainer;

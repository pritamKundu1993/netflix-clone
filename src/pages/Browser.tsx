import { MainContainer, SecondaryContainer } from '@/components';
import useNowPlayingMovies from '@/hooks/useNowPlayingMovies';
import usePopularMovies from '@/hooks/usePopularMovies';
import useTopRatedMovies from '@/hooks/useTopRatedMovies';
import useUpcomingMovies from '@/hooks/useUpcomingMovies';

const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    return (
        <>
            <MainContainer />
            <SecondaryContainer />
        </>
    );
};

export default Browse;

import { MainContainer, SecondaryContainer } from '@/components';
import useNowPlayingMovies from '@/hooks/useNowPlayingMovies';

const Browse = () => {
    useNowPlayingMovies();
    return (
        <>
            <MainContainer />
            <SecondaryContainer />
        </>
    );
};

export default Browse;

import { RootState } from '@/store';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector((state: RootState) => state.movies?.nowPlayingMovies);

    if (movies === null) return;

    const randomIndex = Math.floor(Math.random() * movies?.length);

    const mainMovie = movies?.[randomIndex];
    const { original_title, overview, id } = mainMovie;
    console.log(mainMovie);

    return (
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    );
};

export default MainContainer;

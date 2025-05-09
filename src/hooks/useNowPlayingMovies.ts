import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '@/utils/constanct';
import { addNowPlayingMovies } from '@/features/movies/movieSlice';
import { AppDispatch } from '@/store';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        const fetchNowPlaying = async () => {
            try {
                const res = await fetch(
                    'https://api.themoviedb.org/3/movie/now_playing?page=1',
                    API_OPTIONS
                );
                const data = await res.json();
                dispatch(addNowPlayingMovies(data.results));
            } catch (error) {
                console.error('Failed to fetch now playing movies:', error);
            }
        };

        fetchNowPlaying();
    }, [dispatch]);
};

export default useNowPlayingMovies;

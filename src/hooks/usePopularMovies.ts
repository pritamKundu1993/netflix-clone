import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '@/utils/constanct';
import { addPopularMovies } from '@/features/movies/movieSlice';
import { AppDispatch } from '@/store';

const usePopularMovies = () => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        const fetchPopularMovies = async () => {
            try {
                const res = await fetch(
                    'https://api.themoviedb.org/3/movie/popular?page=1',
                    API_OPTIONS
                );
                const data = await res.json();
                dispatch(addPopularMovies(data.results));
            } catch (error) {
                console.error('Failed to fetch now playing movies:', error);
            }
        };

        fetchPopularMovies();
    }, [dispatch]);
};

export default usePopularMovies;

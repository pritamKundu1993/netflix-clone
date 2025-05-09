import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '@/utils/constanct';
import { addUpcomingMovies } from '@/features/movies/movieSlice';
import { AppDispatch } from '@/store';

const useUpcomingMovies = () => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        const fetchUpcomingMovies = async () => {
            try {
                const res = await fetch(
                    'https://api.themoviedb.org/3/movie/upcoming?page=1',
                    API_OPTIONS
                );
                const data = await res.json();
                dispatch(addUpcomingMovies(data.results));
            } catch (error) {
                console.error('Failed to fetch Top rated movies:', error);
            }
        };

        fetchUpcomingMovies();
    }, [dispatch]);
};

export default useUpcomingMovies;

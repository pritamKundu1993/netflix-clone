import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '@/utils/constanct';
import { addTopRatedMovies } from '@/features/movies/movieSlice';
import { AppDispatch } from '@/store';

const useTopRatedMovies = () => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        const fetchTopRatedMovies = async () => {
            try {
                const res = await fetch(
                    'https://api.themoviedb.org/3/movie/top_rated?page=1',
                    API_OPTIONS
                );
                const data = await res.json();
                dispatch(addTopRatedMovies(data.results));
            } catch (error) {
                console.error('Failed to fetch Top rated movies:', error);
            }
        };

        fetchTopRatedMovies();
    }, [dispatch]);
};

export default useTopRatedMovies;

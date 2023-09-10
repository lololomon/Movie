import React, { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout from '../../HOCs/Layout';
import { fetchProfile } from '../Auth/thunk';
import HomeCarousel from './components/HomeCarousel';
import HomeNews from './components/HomeNews';
import HomeTabs from './components/HomeTabs';
import IntroduceApp from './components/IntroduceApp';

import { fetchBanners, fetchInfoTheater, fetchMovies } from './thunk';
const MovieList = React.lazy(() => import('./components/MovieList'))
const Home = () => {
    const dispatch = useDispatch();
    const [useSearch, setSearchParam] = useSearchParams();

    useEffect(() => {
        dispatch(fetchBanners);
        dispatch(fetchInfoTheater);
        dispatch(fetchProfile)
    }, [])

    useEffect(() => {
        dispatch(fetchMovies(useSearch.get('page')))
    }, [useSearch.get('page')])
    return (
        <Layout>
            <Suspense fallback={<p>Loading...</p>}>
                <HomeCarousel />
                <MovieList />
                <HomeTabs />
                <HomeNews />
                <IntroduceApp />
            </Suspense>
        </Layout>
    );
};

export default Home;
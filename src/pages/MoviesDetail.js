import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const MoviesDetail = () => {

    // 불러드릴 상세페이지엔 useParams를 불러오자.

    const { moviesid } = useParams();

    const [movies, setMovies] = useState({})

    const getMoviesInfo = async () => {

        const address = `https://api.themoviedb.org/3/movie/${moviesid}?api_key=082f2526d129a66e53e595b94fce8985&language=ko-KR`;

        try{
            const movieData = await axios.get(address)
            setMovies(movieData.data)
        } catch (err) {
            console.log(err)
        }

    };

    useEffect(() => {
        getMoviesInfo()
    })

    return (
        <div>
            <h1>{moviesid}</h1>
            <h2>{movies.original_title}</h2>
            <h2>{movies.overview}</h2>
        </div>
    );
};

export default MoviesDetail;
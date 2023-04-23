import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const App = () => {

    // 1. useState를 활용하지만 api의 상태를 보고 object, array로 구분

    const [movies, setMovies] = useState([])

    // 2. async - await 로 api 가져오기

    const getMovies = async () => {
        // 3. api 주소 가져오기
        const address = "https://api.themoviedb.org/3/discover/movie?api_key=082f2526d129a66e53e595b94fce8985&language=ko-KR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";

        // 4. try - catch로 데이터 틀 만들어 주기.

        try {

            // 5. 상수 지정으로 axids 지정으로 api 불러오기

            const res = await axios.get(address);

            setMovies(res.data.results)

        } catch (err) {
            console.log(err)
        }

    }

    // 6. useEffect로 상시 실행 시켜주기.

    useEffect(() => {
        getMovies()
    }, [])




    // 7. api에서 map을 이용하여 각 요소를 뿌려준다.

    return (
        <Container>
            <Row>
                {movies && movies.map(m => (
                    <Col className={'mt-5'}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${m.poster_path}`} />
                            <Card.Body>
                                <Card.Title>{m.title}</Card.Title>
                                <Card.Text>
                                    출시일 : {m.release_date}
                                </Card.Text>
                                <Card.Text>
                                    {m.overview.slice(0, 150)}...
                                </Card.Text>
                                <Link to={`/movies/${m.id}`}>
                                    <Button>Go somewhere</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default App;
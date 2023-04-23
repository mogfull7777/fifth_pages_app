import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Container, Row, Table} from "react-bootstrap";

const News = () => {

    const [News, setNews] = useState([]);

    const getNews = async () => {

        const address = "https://newsapi.org/v2/everything?q=tesla&from=2023-03-23&sortBy=publishedAt&apiKey=4d991139f4ef4bcc8dc6cff0c1b0a93d";

        try {

            const res = await axios.get(address);
            setNews(res.data.articles)

        } catch (err) {
            console.log(err)
        }

    };

    useEffect(() => {
        getNews()
    }, [])

    return (
        <Container>
            <Row>
                {News && News.map(n => (
                        <Table>
                        <thead>
                        <tr>
                            <th>기사제목</th>
                            <th>발행일</th>
                            <th>기사내용</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{n.title}</td>
                            <td>{n.publishedAt}</td>
                            <td>{n.content}</td>
                        </tr>
                        </tbody>
                        </Table>
                    ))}
            </Row>
        </Container>
    );
};

export default News;
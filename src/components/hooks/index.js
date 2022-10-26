import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Form, InputGroup, Row } from 'react-bootstrap';
import Cards from './card';
import { api } from './api';
import './style.css';

export default function Hooks() {
  const [article, setArticle] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState('Not Found');
  useEffect(() => {
    tampilData();
  }, []);

  const tampilData = () => {
    return axios
      .get(api)
      .then((res) => {
        const respon = res.data.articles;
        setArticle(respon);
      })
      .catch((error) => {
        if (error) {
          setError(error.message);
        }
      });
  };
  const hendlesearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    return axios
      .get(api + `&q=${search}`)
      .then((res) => {
        const respon = res.data.articles;
        setArticle(respon);
      })
      .catch((error) => {
        if (error) {
          setError(error.message);
        }
      });
  };

  return (
    <>
      <InputGroup className="mb-3 input">
        <Form.Control type="search" placeholder="search news todays" onChange={hendlesearch} />
      </InputGroup>
      <Row>
        {article.length === 0 ? (
          <div className="text-center text-danger">{error}</div>
        ) : (
          article
            .filter((news) => news.title.toLowerCase().includes(search.toLowerCase()))
            .map((news, i) => {
              return <Cards key={i} nama={news} />;
            })
        )}
      </Row>
    </>
  );
}

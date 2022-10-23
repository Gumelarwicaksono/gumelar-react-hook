import axios from 'axios';
import React, { Component } from 'react';
import { Form, InputGroup, Row } from 'react-bootstrap';
import Cards from './card';
import { api } from './api';
import './style.css';

export default class lifesycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: [],
      fill: '',
      error: 'Not Found',
    };
  }
  componentDidMount() {
    axios
      .get(api)
      .then((res) => {
        const respon = res.data.articles;
        this.setState({ article: respon });
      })
      .catch((errors) => {
        if (errors) {
          this.setState({ error: errors.message });
        }
      });
  }
  hendlesearch = (e) => {
    e.preventDefault();
    this.setState({ fill: e.target.value });
    return axios
      .get(api + `&q=${this.state.fill}`)
      .then((res) => {
        const respon = res.data.articles;
        this.setState({ article: respon });
      })
      .catch((errors) => {
        if (errors) {
          this.setState({ error: errors.message });
        }
      });
  };

  render() {
    const { article, fill, error } = this.state;
    console.log(article);
    return (
      <>
        <InputGroup className="mb-3 input">
          <Form.Control type="search" placeholder="search news todays" onChange={this.hendlesearch} />
        </InputGroup>
        <Row>
          {article.length === 0 ? (
            <div className="text-center text-danger">{error}</div>
          ) : (
            article
              .filter((news) => news.title.toLowerCase().includes(fill.toLocaleLowerCase()))
              .map((news, i) => {
                return <Cards key={i} nama={news} />;
              })
          )}
        </Row>
      </>
    );
  }
}

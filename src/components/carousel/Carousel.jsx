import React from 'react';
import Title from '../titles/Title';
import Quote from '../quotes/Quote';
import Attribution from '../attributions/Attribution';

import Carousel from 'react-bootstrap/Carousel';
import './Carousel.scss';

const MyCarousel = ({ theme, quotes, title }) => {
  return (
    <Carousel>
      {quotes.map((quote) => {
        return (
          <Carousel.Item>
            <Title theme={theme}>{title}</Title>
            <Quote theme={theme}>{quote.message}</Quote>
            <hr className='divider'></hr>
            <Attribution theme={theme}>{quote.attribution}</Attribution>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default MyCarousel;

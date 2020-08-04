import React from 'react';
import Carousel from '../carousel/Carousel';
import Asterik from '../asteriks/Asterik';
import Button from '../buttons/Button';
import './Page.scss';

const Page = ({ message, theme, btn }) => {
  return (
    <div className={'page ' + (theme === 'main' ? '' : 'page--secondary')}>
      <Carousel
        theme={theme}
        title={message.section_title}
        quotes={message.quotes}
      />
      <Asterik theme={theme} />
      <Button btn={btn}>View All</Button>
    </div>
  );
};

export default Page;

import React, { Fragment, FC } from 'react';

import LanguageHeader from '../LanguageHeader/LanguageHeader';
import aboutImg from '../assets/about.jpg';

interface AboutProps {
  translate: (key: string) => string
}

const About: FC<AboutProps> = ({ translate }) => {
  return (
    <Fragment>
      <LanguageHeader />
      <section className="about">
        <div className="container">
          <h1>{translate('men')}</h1>
          <img src={aboutImg} alt="" />
          <p>{translate('aboutUsText')}</p>
          <p>{translate('aboutPage')}</p>
        </div>
      </section>
    </Fragment>
  );
}

export default About;
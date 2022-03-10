import React, { Fragment, FC } from 'react';

import LanguageHeader from '../LanguageHeader/LanguageHeader';

interface HomepageProps {
  translate: (key: string) => string
}

const LanguageHome: FC<HomepageProps> = ({ translate }) => {
  return (
    <Fragment>
      <LanguageHeader fixed transparent />
      <section className="">
        <div className=""></div>
        <div className="">
          <h1>Home</h1>
          <p>{translate('introText')}</p>
        </div>
      </section>
    </Fragment>
  );
}

export default LanguageHome;
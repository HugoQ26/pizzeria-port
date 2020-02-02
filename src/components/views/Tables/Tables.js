import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Tables.module.scss';

const Tables = () => {

  console.log(process.env.PUBLIC_URL);

  return (
    <div className={styles.component}>
      <h2>Tables view</h2>
      <ul>
        <li>
          <Link to={process.env.PUBLIC_URL + '/booking/new'}>Book new Table</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + '/booking/newOrder123'}>Tables numer 1234</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + '/events/new'}>Book new Table for events</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + '/events/newEvent456'}>Events No31`13</Link>
        </li>
      </ul>
    </div>
  );
};

export default Tables;

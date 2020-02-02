import React from 'react';
import { useParams } from 'react-router-dom';

import styles from './Table.module.scss';

const Table = () => {
  const {id} = useParams();
  return (
    <div className={styles.component}>
      <h2>Table view</h2>
      <h3>Params: {id}</h3>
    </div>
  );
};

export default Table;

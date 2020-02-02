import React from 'react';
import { useParams } from 'react-router-dom';

import styles from './WaiterOrder.module.scss';

const WaiterOrder = () => {

  const {id} = useParams();
  return (
    <div className={styles.component}>
      <h2>WaiterOrder view</h2>
      <h3>This is order from Waiter No {id}</h3>
    </div>
  );
};

export default WaiterOrder;

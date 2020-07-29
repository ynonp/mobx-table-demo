import React from 'react';
import _ from 'lodash';
import { observer } from 'mobx-react';

import Data from './mobx/data';

export default observer(function Stats(props) {
  const numberOfRows = Data.data.length;
  const averageLatitude = Data.data.reduce((acc, val) => (acc + Number(val[1])) / numberOfRows, 0);
  const averageLongitude = Data.data.reduce((acc, val) => (acc + Number(val[2])) / numberOfRows, 0);

  return (
    <p>
      Number of rows: {numberOfRows}
      Average Lat: {averageLatitude}
      Average Long: {averageLongitude}
    </p>
  );
});

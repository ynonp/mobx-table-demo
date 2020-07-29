import React from 'react';
import { observer } from 'mobx-react';
import DataTable from 'react-data-table-component';
import _ from 'lodash';
import Data from './mobx/data';

export default observer(function Table(props) {
  const headers = Data.headers;
  const data = Data.data.map(row => _.zipObject(headers, row));
  const columns = headers.map(key => ({
    name: key,
    selector: key,
    sortable: true,
  }));

  return (
    <DataTable title="Arnold Movies" data={data} columns={columns} />
  );
});

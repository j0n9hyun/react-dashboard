import React from 'react';

const Table = ({ columns, data }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, indicator_type, indicator, reg_date }) => (
            <tr key={id + indicator_type + indicator + reg_date}>
              <td>{id}</td>
              <td>{indicator_type}</td>
              <td>{indicator}</td>
              <td>{reg_date.slice(0, 19).replace('T', ' ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* {data.map((v) => v.indicator)} {columns} */}
    </div>
  );
};

export default Table;

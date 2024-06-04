import React, { useState } from 'react';

const DataTable = ({ data }) => {
  const [visibleColumns, setVisibleColumns] = useState(
    Object.keys(data[0] || {}).reduce((acc, column) => {
      acc[column] = true;
      return acc;
    }, {})
  );

  const handleCheckboxChange = (column) => {
    setVisibleColumns((prev) => ({
      ...prev,
      [column]: !prev[column],
    }));
  };

  const columns = Object.keys(visibleColumns);

  return (
    <div className="container">
      <div>
        {columns.map((column) => (
          <label key={column}>
            <input
              type="checkbox"
              checked={visibleColumns[column]}
              onChange={() => handleCheckboxChange(column)}
            />
            {column}
          </label>
        ))}
      </div>
      <table id="list">
        <thead>
          <tr>
            {columns
              .filter((column) => visibleColumns[column])
              .map((column) => (
                <th key={column}>{column}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns
                .filter((column) => visibleColumns[column])
                .map((column) => (
                  <td key={column}>{row[column]}</td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;

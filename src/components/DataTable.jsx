import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const DataTable = ({ apiUrl }) => {

  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setData(data);

        // Generate columns from the keys of the first object in the data array
        if (data.length > 0) {
          const columnsFromData = Object.keys(data[0]).map(key => ({
            field: key,
            headerName: key.charAt(0).toUpperCase() + key.slice(1), // Capitalize the key
            width: 130,
          }));
          setColumns(columnsFromData);
        }
      });
  }, [apiUrl]);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={data} columns={columns} pageSize={5} />
    </div>
  );
};

export default DataTable;
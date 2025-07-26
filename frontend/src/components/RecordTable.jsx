import React, { useEffect, useState } from 'react';
import { fetchRecords, updateRecord } from '../api/record';
import '../styles/table.css';

const response = await axios.get('http://localhost:8080/api/records');

function RecordTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchRecords()
      .then(setData)
      .catch(console.error);
  }, []);

  const handleChange = (index, field, value) => {
    const updated = [...data];
    updated[index][field] = value;
    setData(updated);
  };

  const handleUpdate = (record) => {
    updateRecord(record.id, record)
      .then(() => alert('Updated successfully'))
      .catch(() => alert('Update failed'));
  };

  return (
    <div>
      <h2>Record Maintaining Table</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Address</th>
            <th>City</th>
            <th>Country</th>
            <th>Profession Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((record, index) => (
            <tr key={record.id}>
              <td>
                <input
                  value={record.name}
                  onChange={(e) => handleChange(index, 'name', e.target.value)}
                />
              </td>
              <td>
                <input
                  value={record.contact}
                  onChange={(e) => handleChange(index, 'contact', e.target.value)}
                />
              </td>
              <td>
                <input
                  value={record.address}
                  onChange={(e) => handleChange(index, 'address', e.target.value)}
                />
              </td>
              <td>
                <input
                  value={record.city}
                  onChange={(e) => handleChange(index, 'city', e.target.value)}
                />
              </td>
              <td>
                <input
                  value={record.country}
                  onChange={(e) => handleChange(index, 'country', e.target.value)}
                />
              </td>
              <td>
                <input
                  value={record.professionType}
                  onChange={(e) => handleChange(index, 'professionType', e.target.value)}
                />
              </td>
              <td>
                <button onClick={() => handleUpdate(record)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecordTable;

import React from 'react';

const History = ({ historyData, onDelete }) => {
  return (
    <div className="history">
      <table>
        <thead>
          <tr>
            <th>SR No.</th>
            <th>Amount</th>
            <th>GST Type</th>
            <th>Tax Type</th>
            <th>Actual Amount</th>
            <th>GST Amount</th>
            <th>Total Amount</th>
            <th>Actions</th> 
          </tr>
        </thead>
        <tbody>
          {historyData.map((entry, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>₹{entry.amount.toFixed(2)}</td>
              <td>{entry.gstType}%</td>
              <td>{entry.taxType}</td>
              <td>₹{entry.actualAmount.toFixed(2)}</td>
              <td>₹{entry.gstAmount.toFixed(2)}</td>
              <td>₹{entry.totalAmount.toFixed(2)}</td>
              <td>
                <button onClick={() => onDelete(index)}>Delete</button> 
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;

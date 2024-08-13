
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const HistoryPage = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
  
    const savedHistory = Cookies.get('history');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  return (
    <div>
      <h2>Stored History</h2>
      <div className="table-container">
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
            </tr>
          </thead>
          <tbody>
            {history.map((entry, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>₹{entry.amount.toFixed(2)}</td>
                <td>{entry.gstType}%</td>
                <td>{entry.taxType}</td>
                <td>₹{entry.actualAmount.toFixed(2)}</td>
                <td>₹{entry.gstAmount.toFixed(2)}</td>
                <td>₹{entry.totalAmount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoryPage;

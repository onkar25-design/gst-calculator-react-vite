import React from 'react';
import { formatIndianCurrency } from './formatCurrency'; 

const HistoryTable = ({ history, selectedRows, onRowClick, onDelete }) => {
    return (
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
                {history.map((entry, index) => (
                    <tr
                        key={index}
                        onClick={() => onRowClick(index)}
                        style={{ backgroundColor: selectedRows.includes(index) ? 'lightgreen' : 'transparent' }} 
                    >
                        <td>{index + 1}</td>
                        <td>₹{formatIndianCurrency(entry.amount.toFixed(2))}</td>
                        <td>{entry.gstType}%</td>
                        <td>{entry.taxType}</td>
                        <td>₹{formatIndianCurrency(entry.actualAmount.toFixed(2))}</td>
                        <td>₹{formatIndianCurrency(entry.gstAmount.toFixed(2))}</td>
                        <td>₹{formatIndianCurrency(entry.totalAmount.toFixed(2))}</td>
                        <td>
                            <button onClick={(e) => { e.stopPropagation(); onDelete(index); }}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default HistoryTable;

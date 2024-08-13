import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const formatIndianCurrency = (number) => {
    if (isNaN(number)) return '';
    const [integer, decimal] = number.toString().split('.');
    const lastThreeDigits = integer.slice(-3);
    const otherDigits = integer.slice(0, -3);
    const formattedInteger = otherDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + ',' + lastThreeDigits;
    return decimal ? formattedInteger + '.' + decimal : formattedInteger;
};

const HistoryManager = ({ result }) => {
    const [history, setHistory] = useState([]);
    const [selectedRows, setSelectedRows] = useState([]); 

    useEffect(() => {
        const savedHistory = Cookies.get('history');
        if (savedHistory) {
            setHistory(JSON.parse(savedHistory));
        }
    }, []);

    useEffect(() => {
        if (result) {
            const newEntry = {
                amount: parseFloat(result.amount),
                gstType: parseFloat(result.gstType),
                taxType: result.taxType,
                actualAmount: result.actualAmount,
                gstAmount: result.gstAmount,
                totalAmount: result.totalAmount,
            };
            const updatedHistory = [...history, newEntry];
            setHistory(updatedHistory);
            Cookies.set('history', JSON.stringify(updatedHistory), { expires: 7 }); 
        }
    }, [result]);

    const handleDelete = (index) => {
        const updatedHistory = history.filter((_, i) => i !== index);
        setHistory(updatedHistory);
        Cookies.set('history', JSON.stringify(updatedHistory), { expires: 7 }); 
        setSelectedRows((prevSelected) => prevSelected.filter(rowIndex => rowIndex !== index)); 
    };

    const handleRowClick = (index) => {
        setSelectedRows((prevSelectedRows) => {
            if (prevSelectedRows.includes(index)) {
                return prevSelectedRows.filter(rowIndex => rowIndex !== index);
            } else {
                return [...prevSelectedRows, index];
            }
        });
    };

    const handleDeleteAll = () => {
        if (window.confirm("Are you sure you want to delete all entries?")) {
            setHistory([]);
            Cookies.remove('history'); 
            setSelectedRows([]); 
        }
    };

    return (
        <div>
            <h2>History</h2>
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
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map((entry, index) => (
                            <tr
                                key={index}
                                onClick={() => handleRowClick(index)}
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
                                    <button onClick={(e) => { e.stopPropagation(); handleDelete(index); }}>Delete</button> 
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className='deleteAllBtn' onClick={handleDeleteAll}>Delete All</button> 
            </div>
        </div>
    );
};

export default HistoryManager;

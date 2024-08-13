import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import HistoryTable from './HistoryTable'; 
import DeleteAllButton from './DeleteAllButton'; 


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
                <HistoryTable
                    history={history}
                    selectedRows={selectedRows}
                    onRowClick={handleRowClick}
                    onDelete={handleDelete}
                />
                <DeleteAllButton onDeleteAll={handleDeleteAll} />
            </div>
        </div>
    );
};

export default HistoryManager;

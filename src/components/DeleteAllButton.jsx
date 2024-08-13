import React from 'react';

const DeleteAllButton = ({ onDeleteAll }) => {
    const handleClick = () => {
        if (window.confirm("Are you sure you want to delete all entries?")) {
            onDeleteAll();
        }
    };

    return (
        <button className='deleteAllBtn' onClick={handleClick}>
            Delete All
        </button>
    );
};

export default DeleteAllButton;

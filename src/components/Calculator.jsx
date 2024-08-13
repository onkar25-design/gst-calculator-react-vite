import React, { useState } from 'react';


const formatToIndianCurrency = (number) => {
    const [integerPart, decimalPart] = number.toFixed(2).split('.');
    const lastThreeDigits = integerPart.slice(-3);
    const otherDigits = integerPart.slice(0, -3);
    const formattedIntegerPart = otherDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' + lastThreeDigits;

    return `₹${formattedIntegerPart}.${decimalPart}`;
};

const Calculator = ({ onCalculate }) => {
    const [amount, setAmount] = useState('');
    const [gstType, setGstType] = useState('5');
    const [taxType, setTaxType] = useState('Without GST');
    const [result, setResult] = useState(null);

    const calculateGST = () => {
        const parsedAmount = parseFloat(amount);
        const parsedGstType = parseFloat(gstType);

        if (isNaN(parsedAmount) || isNaN(parsedGstType)) {
            alert('Please enter valid numeric values.');
            return;
        }

        let gstAmount, totalAmount, actualAmount;

        if (taxType === 'With GST') {
            actualAmount = parsedAmount / (1 + (parsedGstType / 100));
            gstAmount = parsedAmount - actualAmount;
            totalAmount = parsedAmount;
        } else {
            gstAmount = parsedAmount * (parsedGstType / 100);
            totalAmount = parsedAmount + gstAmount;
            actualAmount = parsedAmount;
        }

        const calculationResult = { 
            amount: parsedAmount,
            gstType: parsedGstType,
            taxType,  
            actualAmount,
            gstAmount,
            totalAmount 
        };
        setResult(calculationResult);
        onCalculate(calculationResult);  
    };

    return (
        <div className="calculator">
            <div className="form">
                <label htmlFor="amount">Amount</label>
                <input
                    type="number"
                    className="form-control"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                />
            </div>
            <div className="form">
                <label htmlFor="taxType">Tax</label>
                <select
                    className="form-control"
                    id="taxType"
                    value={taxType}
                    onChange={(e) => setTaxType(e.target.value)}
                >
                    <option value="Without GST">Without GST</option>
                    <option value="With GST">With GST</option>
                </select>
            </div>
            <div className="form">
                <label htmlFor="gstType">GST Type</label>
                <select
                    className="form-control"
                    id="gstType"
                    value={gstType}
                    onChange={(e) => setGstType(e.target.value)}
                >
                    <option value="5">5%</option>
                    <option value="12">12%</option>
                    <option value="18">18%</option>
                    <option value="28">28%</option>
                </select>
            </div>
            <button className="btn" onClick={calculateGST}>
                Calculate GST
            </button>
            {result && (
                <div className="output" id="result">
                    <div className="result-item">
                        <p>{formatToIndianCurrency(result.actualAmount)}</p>
                        <small>Actual Amount</small>
                    </div>
                    <div className="result-item">
                        <p>+ {formatToIndianCurrency(result.gstAmount)}</p>
                        <small>GST Amount</small>
                    </div>
                    <div className="result-item">
                        <p>= {formatToIndianCurrency(result.totalAmount)}</p>
                        <small>Total Amount</small>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Calculator;

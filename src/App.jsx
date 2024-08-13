import React, { useState } from 'react';
import Calculator from './components/Calculator';
import Header from './components/Header';
import Footer from './components/Footer';
import HistoryManager from './components/HistoryManager';


function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="container">
      <Header />
      <Calculator onCalculate={(calcResult) => setResult(calcResult)} />
      <HistoryManager result={result} />
      <Footer />
      
    </div>
  );
}

export default App;

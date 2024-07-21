import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  useEffect(() => {
    if (currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    }
  }, [amount, to, currencyInfo]);

  const swap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
    setAmount(convertedAmount);
  };

  return (
    <div className='flex flex-col justify-center items-center' style={{ backgroundImage: `url('https://images.pexels.com/photos/842948/pexels-photo-842948.jpeg')` }}>
      
      <div className='relative h-screen flex flex-col justify-center items-center p-10 bg-opacity-50' >
      <h1 className='text-center text-white text-4xl mb-7 font-bold text-opacity-50'>Currency Converter</h1>
      <InputBox
        className='w-4/5 mb-10'
        label="From"
        amount={amount}
        onAmountChange={setAmount}
        onCurrencyChange={setFrom}
        currencyOptions={options}
        selectCurrency={from}
      />
      <div className='p-1'></div>
      <InputBox
        className='w-4/5 mt-10'
        label="To"
        amount={convertedAmount}
        onAmountChange={setConvertedAmount}
        onCurrencyChange={setTo}
        currencyOptions={options}
        selectCurrency={to}
        amountDisable={true}
      />
       <button className='w-full 2 my-2 py-1 p-3 bg-black text-white rounded-xl' onClick={swap}>Swap</button>
    </div>
    </div>
  );
}

export default App;

import React from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) {
  return (
    <div className=" bg-white flex items-center px-4 py-2 pb-1 rounded-lg border border-gray-300 m-8" style={{margin:'0 12% 0 12%'}}>
      <div className="flex flex-col w-3/5 ">
        <label className="text-gray-500 text-sm">{label}</label>
        <input
          type="text"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          className="w-fit p-2 my-5 rounded-md border-none border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{ backgroundColor: "whitesmoke" }}
        />
      </div>
      <div className="flex flex-col w-2/5 ml-5 items-end">
        <p className="text-gray-500 text-sm w-fit">Currency Type</p>
        <select
          className="w-fit p-2 my-5 pr-6 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={currencyDisable}
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;

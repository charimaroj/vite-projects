import React, { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

const Exchange = () => {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);//passing label name 
  const options = Object.keys(currencyInfo);// getting currenty option keys from api

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };
  return (
    <div
      className="vh-100 d-flex align-items-center justify-content-center flex-column"
      style={{ background: "#000" }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
      >
        <InputBox
          label="From"
          amount={amount}
          currencyOptions={options}
          onCurrencyChange={(currency) => setFrom(currency)}
          selectCurrency={from}
          onAmountChange={(amount) => setAmount(amount)}
          amoundDisable={false}
        />
        <div className="row">
          <div className="col-md-12 py-4 px-0">
            <div className="btn btn-primary btn-warning w-100" onClick={swap}>
              SWAP
            </div>
          </div>
        </div>
        <InputBox
          label="To"
          amount={convertedAmount}
          currencyOptions={options}
          onCurrencyChange={(currency) => setTo(currency)}
          selectCurrency={to}
          amoundDisable={false}
        />
        <div className="row">
          <div className="col-md-12 py-4 px-0">
            <button className="btn btn-primary btn-lg w-100" type="submit">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Exchange;

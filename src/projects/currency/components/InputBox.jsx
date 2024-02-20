import React, {useId} from "react";

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amoundDisable = false,
  currencyDisable = false,
  className = "",
}) => {
    const amountInputId = useId()
  return (
    <div className={`row card d-flex flex-row p-4 ${className}`}>
      <div className="col-md-6 ">
        <div className="mb-3">
          <label htmlFor={amountInputId} className="form-label">
            {label}
          </label>
          <input
            type="number"
            className="form-control"
            id={amountInputId}
            disabled={amoundDisable}
            value={amount}
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
          />
        </div>
      </div>

      <div className="col-md-6 ">
        <div className="mb-3">
          <label htmlFor="currencytype" className="form-label">
            Currency Type
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            id="currencytype"
            value={selectCurrency}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
            disabled={currencyDisable}
          >
            {currencyOptions.map((currency) => {
              return (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default InputBox;

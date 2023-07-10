"use client"; // This is a client component
import React, { useState } from "react";
import { Dropdown } from "@nextui-org/react";
import { Input } from "@nextui-org/react";

const ConversionRates = {
  INR: 75.5, // 1 USD = 75.5 INR
  USD: 1, // 1 USD = 1 USD
  EUR: 0.9, // 1 USD = 0.9 EUR
  JPY: 110, // 1 USD = 110 JPY
};

export default function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("INR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState("");

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFromCurrencyChange = (value) => {
    setFromCurrency(value);
  };

  const handleToCurrencyChange = (value) => {
    setToCurrency(value);
  };

  const handleConversion = () => {
    const converted =
      (amount / ConversionRates[fromCurrency]) * ConversionRates[toCurrency];
    setConvertedAmount(converted);
  };

  return (
    <div className="w-full flex flex-row">
      <div>
        <Input
          placeholder="Enter Amount"
          value={amount}
          onChange={handleAmountChange}
        />
        <Dropdown value={fromCurrency} onChange={handleFromCurrencyChange}>
          <Dropdown.Button flat>Select Currency</Dropdown.Button>
          <Dropdown.Menu aria-label="Static Actions">
            <Dropdown.Item value="INR">Indian Rupee (INR)</Dropdown.Item>
            <Dropdown.Item value="USD">U.S. Dollar (USD)</Dropdown.Item>
            <Dropdown.Item value="EUR">European Euro (EUR)</Dropdown.Item>
            <Dropdown.Item value="JPY">Japanese Yen (JPY)</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div>
        <Input
          placeholder="Converted Amount"
          value={convertedAmount}
          readOnly
        />
        <Dropdown value={toCurrency} onChange={handleToCurrencyChange}>
          <Dropdown.Button flat>Select Currency</Dropdown.Button>
          <Dropdown.Menu aria-label="Static Actions">
            <Dropdown.Item value="INR">Indian Rupee (INR)</Dropdown.Item>
            <Dropdown.Item value="USD">U.S. Dollar (USD)</Dropdown.Item>
            <Dropdown.Item value="EUR">European Euro (EUR)</Dropdown.Item>
            <Dropdown.Item value="JPY">Japanese Yen (JPY)</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <button onClick={handleConversion}>Convert</button>
    </div>
  );
}

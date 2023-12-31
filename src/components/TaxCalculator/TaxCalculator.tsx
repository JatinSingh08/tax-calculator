import Image from "next/image";
import React, { useState } from "react";
import CheckIcon from "@/assets/check-icon.svg";
import useTaxCalculation from "@/lib/useTaxCalculation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

import Australia from "@/assets/australia-flag.svg";

const TaxCalculator = () => {
  const [inputs, setInputs] = useState({
    purchase_price: 0,
    sale_price: 0,
    expenses: 0,
    annual_income: "0-18200",
    term_selected: "short_term",
  });
  const {
    capitalGainsAmount,
    discount,
    netCapitalGains,
    taxRate,
    taxToBePaid,
  } = useTaxCalculation(inputs);
  const formattedNetCapitalGains = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(netCapitalGains);

  return (
    <div className="p-[17px] w-full lg:pl-[79px] lg:pt-[35px] lg:pr-[73px] lg:pb-[48px] border border-[#DEE1E6] md:border-none  bg-white rounded-xl md:rounded-2xl flex flex-col items-center justify-center">
      <p className="text-[--gray-1] text-center text-2xl md:text-[32px] lg:text-[40px] font-bold leading-[34px]">
        Free Crypto Tax Calculator - Australia
      </p>

      {/* Financial Yeary & Country  */}
      <div className="flex  items-center justify-between w-full mt-10 gap-5 md:gap-10">
        <div className="flex-col md:flex-row flex items-start md:items-center justify-center gap-3 w-full">
          <label
            htmlFor="years"
            className="text-[--gray-1] text-[15px] font-normal leading-6 whitespace-nowrap"
          >
            Financial Year
          </label>

          <Select>
            <SelectTrigger
              name="fy"
              id="years"
              className={cn(
                "py-[17px] outline-none w-full text-start px-2 sm-2:px-4 rounded-[8px] cursor-pointer bg-[#EFF2F5] text-[--gray-1] text-[14px] sm-2:text-[18px] font-medium flex items-center justify-between "
              )}
            >
              <SelectValue placeholder="FY 2023-24" />
            </SelectTrigger>
            <SelectContent className="rounded-[8px]">
              <SelectItem value="24">FY 2023-24</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex-col md:flex-row flex items-start md:items-center justify-center gap-3 w-full">
          <label
            htmlFor="years"
            className="text-[--gray-1] text-[15px] font-normal leading-6"
          >
            Country
          </label>

          <Select>
            <SelectTrigger
              name="country"
              id="country"
              className={cn(
                "py-[17px] outline-none w-full text-start px-2 sm-2:px-4 rounded-[8px] cursor-pointer bg-[#EFF2F5] text-[--gray-1] text-[14px] sm-2:text-[18px]  font-medium flex items-center justify-between "
              )}
            >
              <SelectValue placeholder="🌍 Australia" />
            </SelectTrigger>
            <SelectContent className="rounded-[8px]">
              <SelectItem value="Australia">🌍 Australia</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* border  */}
      <div className="w-full h-[1px] bg-[--border] my-[28px]"></div>

      {/* Purchase Price & Sales Price */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-5 md:gap-10">
        <div className="flex-col flex items-start justify-center gap-3 w-full">
          <label
            htmlFor="years"
            className="text-[--gray-1] text-[15px] font-normal leading-6"
          >
            Enter purchase price of Crypto
          </label>
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
              $
            </span>
            <input
              type="number"
              placeholder="Purchase Price"
              onChange={(e) =>
                setInputs((prevInputs) => ({
                  ...prevInputs,
                  purchase_price: Number(e.target.value),
                }))
              }
              className="pl-8 pr-3 py-[12px] outline-none focus-visible:outline-[#0052FE] border w-full text-start px-4 rounded-[8px] bg-[#EFF2F5] text-[--gray-1]  text-base md:text-[18px] font-medium flex items-center justify-center"
            />
          </div>
        </div>
        <div className="flex-col flex items-start justify-center gap-3 w-full">
          <label
            htmlFor="years"
            className="text-[--gray-1] text-[15px] font-normal leading-6"
          >
            Enter sale price of Crypto
          </label>
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
              $
            </span>
            <input
              type="number"
              placeholder="Sale Price"
              onChange={(e) =>
                setInputs((prevInputs) => ({
                  ...prevInputs,
                  sale_price: Number(e.target.value),
                }))
              }
              className="pl-8 pr-3 py-[12px] focus-visible:outline-[#0052FE] outline-none border w-full text-start px-4 rounded-[8px] bg-[#EFF2F5] text-[--gray-1]  text-base md:text-[18px] font-medium flex items-center justify-center"
            />
          </div>
        </div>
      </div>

      {/* Expenses & Term plan  */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-5 md:gap-10 mt-5 md:mt-[28px]">
        <div className="flex-col flex items-start justify-center gap-3 w-full">
          <label
            htmlFor="years"
            className="text-[--gray-1] text-[15px] font-normal leading-6"
          >
            Enter your Expenses
          </label>
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
              $
            </span>
            <input
              type="number"
              placeholder="Expenses"
              onChange={(e) =>
                setInputs((prevInputs) => ({
                  ...prevInputs,
                  expenses: Number(e.target.value),
                }))
              }
              className="pl-8 pr-3 py-[12px] outline-none focus-visible:outline-[#0052FE] border w-full text-start px-4 rounded-[8px] bg-[#EFF2F5] text-[--gray-1]  text-base md:text-[18px] font-medium flex items-center justify-center"
            />
          </div>
        </div>

        <div className="flex-col flex items-start justify-center gap-3 w-full">
          <label
            htmlFor="years"
            className="text-[--gray-1] text-[15px] font-normal leading-6"
          >
            Investment Type
          </label>
          <div className="flex items-center justify-center gap-[10px] w-full">
            <div className="w-full">
              <button
                className={`px-3 rounded-[8px] relative bg-[btn-bg] h-12 w-full flex items-center justify-center gap-1 text-[--gray-2] border-[--gray-2] border text-base md:text-[18px] font-medium ${
                  inputs.term_selected === "short_term" &&
                  "rounded-[8px] selected_btn"
                }`}
                onClick={() =>
                  setInputs((prevInputs) => ({
                    ...prevInputs,
                    term_selected: "short_term",
                  }))
                }
              >
                Short Term
                {inputs.term_selected === "short_term" && (
                  <span>
                    <Image
                      alt="check_icon"
                      src={CheckIcon}
                      className="w-6 h-6"
                    />
                  </span>
                )}
              </button>
              <p className="text-[--gray-2] absolute text-[15px] font-medium leading-6 mt-1">
                {"< 12 months"}
              </p>
            </div>
            <div className="w-full">
              <button
                className={`px-3 rounded-[8px] relative bg-[btn-bg] h-12 w-full flex items-center justify-center gap-1 text-[--gray-2] border-[--gray-2] border text-base md:text-[18px] font-medium ${
                  inputs.term_selected === "long_term" &&
                  "rounded-[8px] selected_btn"
                }`}
                onClick={() =>
                  setInputs((prevInputs) => ({
                    ...prevInputs,
                    term_selected: "long_term",
                  }))
                }
              >
                Long Term
                {inputs.term_selected === "long_term" && (
                  <span>
                    <Image
                      alt="check_icon"
                      src={CheckIcon}
                      className="w-6 h-6"
                    />
                  </span>
                )}
              </button>
              <p className="text-[--gray-2] absolute text-[15px] font-medium leading-6 mt-1">
                {"> 12 months"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Annaul Income & Tax Rate  */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-5 md:gap-10 mt-[44px] md:mt-[28px]">
        <div className="flex-col flex items-start justify-center gap-3 w-full">
          <label
            htmlFor="years"
            className="text-[--gray-1] text-[15px] font-normal leading-6"
          >
            Select your Annual Income
          </label>

          <Select
            onValueChange={(e) => {
              console.log("onChange triggered:", e);
              setInputs((prevInputs) => ({
                ...prevInputs,
                annual_income: e,
              }));
            }}
          >
            <SelectTrigger
              name="fy"
              id="years"
              className={cn(
                "py-[17px] outline-none w-full text-start px-2 sm-2:px-4 rounded-[8px] cursor-pointer bg-[#EFF2F5] text-[--gray-1] text-[14px] sm-2:text-[18px] font-medium flex items-center justify-between "
              )}
            >
              <SelectValue placeholder="Select your annual income" />
            </SelectTrigger>
            <SelectContent className="rounded-[8px]">
              <SelectItem value="0-18200">$0 - $18,200</SelectItem>
              <SelectItem value="18201-45000">$18,201 - $45,000</SelectItem>
              <SelectItem value="45001-120000">$45,001 - $120,000</SelectItem>
              <SelectItem value="120001-180000">$120,001 - $180,000</SelectItem>
              <SelectItem value="180001+">$180,001+</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-row md:flex-col items-start justify-start mt-0 md:mt-8 gap-3 w-full">
          <label
            htmlFor="years"
            className="text-[--gray-1] text-[12px] sm-2:text[14px] sm:text-[15px] flex font-normal leading-6 text-start"
          >
            Tax Rate
            <span className="block md:hidden">{":"}</span>
          </label>
          <p className="text-[--gray-1] text-[12px] sm-2:text-[14px] sm:text-[15px] font-normal leading-6">
            {taxRate?.tax}
          </p>
        </div>
      </div>

      {/* Gain Amount & Long term gains  */}
      {inputs.term_selected === "long_term" && (
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-5 md:gap-10 mt-5 md:mt-[28px]">
          <div className="flex-col flex items-start justify-center gap-3 w-full">
            <label
              htmlFor="years"
              className="text-[--gray-1] text-[15px] font-normal leading-6"
            >
              Capital gains amount
            </label>
            <div className="relative w-full">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                $
              </span>
              <input
                type="number"
                placeholder="Capital Gains"
                value={capitalGainsAmount}
                className="pl-8 pr-3 py-[12px] outline-none focus-visible:outline-[#0052FE] border w-full text-start px-4 rounded-[8px] bg-[#EFF2F5] text-[--gray-1]  text-base md:text-[18px] font-medium flex items-center justify-center"
              />
            </div>
          </div>
          <div className="flex-col flex items-start justify-center gap-3 w-full">
            <label
              htmlFor="years"
              className="text-[--gray-1] text-[15px] font-normal leading-6"
            >
              Discount for long term gains
            </label>
            <div className="relative w-full">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                $
              </span>
              <input
                type="number"
                placeholder="Long Term Gains"
                value={discount}
                className="pl-8 pr-3 py-[12px] focus-visible:outline-[#0052FE] outline-none border w-full text-start px-4 rounded-[8px] bg-[#EFF2F5] text-[--gray-1]  text-base md:text-[18px] font-medium flex items-center justify-center"
              />
            </div>
          </div>
        </div>
      )}

      {/* Capital gains & Tax results */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-5 md:gap-10 mt-5 md:mt-[28px]">
        <div className="flex-col flex items-center justify-center w-full bg-[#EBF9F4] h-[97px] px-2 rounded-[8px] gap-2">
          <p className="text-[--gray-1] text-base font-medium">
            Net Capital gains tax amount
          </p>
          <p className="text-[--green-1] text-2xl font-bold text-center">
            {formattedNetCapitalGains}
          </p>
        </div>
        <div className="flex-col flex items-center justify-center w-full bg-[#EBF2FF] h-[97px] px-2 rounded-[8px] gap-2">
          <p className="text-[--gray-1] text-base font-medium">
            The tax you need to pay*
          </p>
          <p className="text-[--primary-dark-blue] text-2xl font-bold text-center">
            $ {taxToBePaid.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaxCalculator;

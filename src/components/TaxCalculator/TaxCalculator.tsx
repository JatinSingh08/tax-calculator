import React from "react";

const TaxCalculator = () => {
  return (
    <div className="p-[17px] w-full md:pl-[79px] md:pt-[35px] md:pr-[73px] md:pb-[48px] bg-white rounded-2xl flex flex-col items-center justify-center">
      <p className="text-[--gray-1] text-center text-2xl md:text-[40px] font-bold leading-[34px]">
        Free Crypto Tax Calculator - Australia
      </p>

      {/* Financial Yeary & Country  */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full mt-10 gap-10">
        <div className="flex-col md:flex-row flex items-start md:items-center justify-center gap-3 w-full">
          <label
            htmlFor="years"
            className="text-[--gray-1] text-[15px] font-normal leading-6"
          >
            Financial Year
          </label>
          <select
            name="fy"
            id="years"
            className="py-[17px] outline-none w-full text-start px-4 rounded-[8px] cursor-pointer bg-[#EFF2F5] text-[--gray-1]  text-base md:text-[18px] font-medium flex items-center justify-center"
          >
            <option value="24">FY 2023-24</option>
            <option value="23">FY 2022-23</option>
          </select>
        </div>
        <div className="flex-col md:flex-row flex items-start md:items-center justify-center gap-3 w-full">
          <label
            htmlFor="years"
            className="text-[--gray-1] text-[15px] font-normal leading-6"
          >
            Country
          </label>
          <select
            name="country"
            id="country"
            className="py-[17px] text-start outline-none px-4 w-full rounded-[8px] bg-[#EFF2F5] cursor-pointer text-[--gray-1]  text-base md:text-[18px] font-medium flex items-center justify-center"
          >
            <option value="Australia">🌍 Australia</option>
            <option value="us">🌍 US</option>
          </select>
        </div>
      </div>

      {/* border  */}
      <div className="w-full h-[1px] bg-[--border] my-[28px]"></div>

      {/* Purchase Price & Sales Price */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10">
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
              className="pl-8 pr-3 py-[12px] focus-visible:outline-[#0052FE] outline-none border w-full text-start px-4 rounded-[8px] bg-[#EFF2F5] text-[--gray-1]  text-base md:text-[18px] font-medium flex items-center justify-center"
            />
          </div>
        </div>
      </div>

      {/* Expenses & Term plan  */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10 mt-[28px]">
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
            <button className="px-3 rounded-[8px] bg-[btn-bg] h-12 w-full flex items-center justify-center text-[--gray-2] border-[--gray-2] border text-base md:text-[18px] font-medium">
              Short Term
            </button>
            <button className="px-3 rounded-[8px] bg-[btn-bg] h-12 w-full flex items-center justify-center text-[--gray-2] border-[--gray-2] border text-base md:text-[18px] font-medium">
              Long Term
            </button>
          </div>
        </div>
      </div>

      {/* Annaul Income & Tax Rate  */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10 mt-[28px]">
        <div className="flex-col flex items-start justify-center gap-3 w-full">
          <label
            htmlFor="years"
            className="text-[--gray-1] text-[15px] font-normal leading-6"
          >
            Select your Annual Income
          </label>
          <select
            name="fy"
            id="years"
            className="py-[17px] text-start px-4 outline-none w-full rounded-[8px] cursor-pointer bg-[#EFF2F5] text-[--gray-1]  text-base md:text-[18px] font-medium flex items-center justify-center"
          >
            <option value="24">$0 - $18,200</option>
            <option value="24">$18,201 - $45,000</option>
            <option value="24">$45,001 - $120,000</option>
            <option value="24">$120,001 - $180,000</option>
            <option value="23">$180,001+</option>
          </select>
        </div>
        <div className="flex-col flex items-start justify-center gap-3 w-full">
          <label
            htmlFor="years"
            className="text-[--gray-1] text-[15px] font-normal leading-6 text-start"
          >
            Tax Rate
          </label>
          <p className="text-[--gray-1] text-[15px] font-normal leading-6">$ 5,902 + 32.5% of excess over $45,001 </p>
        </div>
      </div>


      {/* Capital gains & Tax results */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10 mt-[28px]">
        <div className="flex-col flex items-center justify-center w-full bg-[#EBF9F4] h-[97px] px-2 rounded-[8px] gap-2">
          <p className="text-[--gray-1] text-base font-medium">Net Capital gains tax amount</p>
          <p className="text-[--green-1] text-2xl font-bold text-center">$ 2,500</p>
        </div>
        <div className="flex-col flex items-center justify-center w-full bg-[#EBF2FF] h-[97px] px-2 rounded-[8px] gap-2">
          <p className="text-[--gray-1] text-base font-medium">The tax you need to pay*</p>
          <p className="text-[--primary-dark-blue] text-2xl font-bold text-center">$ 812.5</p>
        </div>
      </div>
    </div>
  );
};

export default TaxCalculator;

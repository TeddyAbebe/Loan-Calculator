import React from "react";
import LoanCalculator from "../LoanCalculator";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <div className="flex flex-col gap-5 max-w-[40rem] md:w-1/2 text-start p-10">
        <h1 className="font-SFBold text-5xl bg-clip-text text-transparent bg-gradient-to-br from-[#4A186D] to-[#00B0AD]">
          Loan Calculator
        </h1>
        <p className="text-2xl font-SFLight text-[#4A176D]">
          Fill the loan amount, interest rate, and loan term and it will
          automatically calculate monthly payment, total interest, and total
          principal & interest amount
        </p>
      </div>
      <LoanCalculator />
    </div>
  );
};

export default Home;

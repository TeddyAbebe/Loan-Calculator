import React, { useState, useEffect } from "react";

function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState("500,000 Br");
  const [annualInterestRate, setAnnualInterestRate] = useState("15%");
  const [loanTermInMonths, setLoanTermInMonths] = useState("60");
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPrincipalAndInterest, setTotalPrincipalAndInterest] = useState(0);

  useEffect(() => {
    const calculateLoan = () => {
      const principal = parseFloat(loanAmount.replace(/,/g, "")) || 0;

      const rate =
        parseFloat(annualInterestRate.replace(/,/g, "")) / 100 / 12 || 0;

      const term = parseInt(loanTermInMonths.replace(/,/g, "")) || 0;

      if (principal === 0 || rate === 0 || term === 0) {
        setMonthlyPayment(0);
        setTotalInterest(0);
        setTotalPrincipalAndInterest(0);
      } else {
        const monthlyPayment =
          (principal * rate) / (1 - Math.pow(1 + rate, -term));

        const totalInterest = monthlyPayment * term - principal;

        setMonthlyPayment(
          monthlyPayment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        );

        setTotalInterest(
          totalInterest.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        );

        setTotalPrincipalAndInterest(
          (principal + totalInterest)
            .toFixed(2)
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        );
      }
    };

    calculateLoan();
  }, [loanAmount, annualInterestRate, loanTermInMonths]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "loanAmount":
        setLoanAmount(
          value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " Br"
        );
        break;
      case "annualInterestRate":
        setAnnualInterestRate(
          value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "%"
        );
        break;
      case "loanTermInMonths":
        setLoanTermInMonths(
          value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        );
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center gap-10 px-10 items-center">
      <div className="flex flex-col py-10 max-w-[40rem] w-full gap-4 md:w-1/2">
        <div className="flex flex-col gap-1 relative">
          <h2
            htmlFor="loanAmount"
            className="text-[#4E4E4E] text-base text-start font-normal"
          >
            Loan Amount <span className="text-[#E53E3E]">*</span>
          </h2>

          <input
            type="text"
            id="loanAmount"
            name="loanAmount"
            value={loanAmount}
            onChange={handleInputChange}
            inputMode="numeric"
            pattern="\d*"
            required
            className="w-full shadow-sm text-lg border-[#A0AEC0] border p-3 ml-1 rounded-md"
          />
        </div>

        <div className="flex flex-col gap-1">
          <h2
            htmlFor="annualInterestRate"
            className="text-[#4E4E4E] text-base text-start font-normal"
          >
            Interest Rate <span className="text-[#E53E3E]">*</span>
          </h2>

          <input
            type="text"
            id="annualInterestRate"
            name="annualInterestRate"
            value={annualInterestRate}
            onChange={handleInputChange}
            inputMode="numeric"
            pattern="\d*"
            required
            className="w-full shadow-sm text-lg border-[#A0AEC0] border p-3 ml-1 rounded-md"
          />
        </div>

        <div className="flex flex-col gap-1">
          <h2
            htmlFor="loanTermInMonths"
            className="text-[#4E4E4E] text-base text-start font-normal"
          >
            Loan Term in Months <span className="text-[#E53E3E]">*</span>
          </h2>

          <input
            type="text"
            id="loanTermInMonths"
            name="loanTermInMonths"
            value={loanTermInMonths}
            onChange={handleInputChange}
            inputMode="numeric"
            pattern="\d*"
            required
            className="w-full shadow-sm text-lg border-[#A0AEC0] border p-3 ml-1 rounded-md"
          />
        </div>
      </div>

      <div className="bg-[#F8F8F8] rounded-2xl max-w-[40rem] w-full md:w-1/2 flex flex-col gap-10 p-10 sm:p-12">
        <div className="flex flex-col gap-5 items-start">
          <h1 className="text-xl sm:text-2xl font-SFMedium text-[#4E4E4E]">
            Monthly Payment
          </h1>
          <p className="font-SFBold text-4xl sm:text-6xl bg-clip-text text-transparent bg-gradient-to-br from-[#4A186D] to-[#00B0AD]">
            {monthlyPayment} Br
          </p>
        </div>

        <div className="flex xl:flex-row flex-col gap-5 xl:gap-0 w-full">
          <div className="w-full xl:w-1/2 flex flex-col gap-2 text-start items-start justify-center">
            <h1 className="text-lg font-SFLight text-[#4E4E4E]">
              Total Interest
            </h1>
            <p className="font-SFMedium text-xl text-[#4A186D]">
              {totalInterest} Br
            </p>
          </div>

          <div className="w-full xl:w-1/2 flex flex-col gap-2 text-start items-start justify-center">
            <h1 className="text-lg font-SFLight text-[#4E4E4E]">
              Total Principal & Interest
            </h1>
            <p className="font-SFMedium text-xl text-[#4A186D]">
              {totalPrincipalAndInterest} Br
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoanCalculator;

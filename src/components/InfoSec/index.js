import React from "react";

function InfoSec() {
  return (
    <>
      <section className="">
        <div className=" w-full flex items-center justify-center my-3">
          <img src="/images/Family-1.png" alt="Family" />
        </div>

        <div className="px-6">
          <h1 className="font-bold items-center justify-center flex py-2">
            At Ultra Loan we believe in one thing: getting a forgivable loan
            should be easy and simple.
          </h1>
          <p className="items-center justify-center flex">
            As the deadly wave of COVID-19 overwhelmed the world, we have
            partnered with local and government organizations to help
            individuals, families and small businesses access urgently needed
            financial support to alleviate its negative impact of affected person.
          </p>
        </div>

        <div className="flex justify-center items-center py-6 p-5 mt-5">
          <a
            href="/signup"
            className="border font-extrabold border-blue-300 text-blue-500 py-4 px-2 rounded-md text-md"
          >
            GET STARTED
          </a>
        </div>
      </section>
    </>
  );
}

export default InfoSec;

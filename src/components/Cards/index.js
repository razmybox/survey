import React from "react";

function Card() {
  return (
    <>
      <hr className="w-1/5 mx-auto" />
      <div className="bg-gray-200 w-full flex justify-center items-center py-5">
        <div className="w-60 bg-white p-2 rounded-xl">
          <img
            src="/images/picture1.png"
            alt=""
            className="h-40 object-cover rounded-xl"
          />
          <div className="p-2">
            <h2 className="font-bold text-lg">Heading</h2>
            <p className="text-sm text-gray-600">
              Lorem ipsum is a name for a common type of placeholder text. Also
              known as filler or dummy text,
            </p>
          </div>
          <div className="m-2">
            <a href="/" className="text-white bg-blue-500 px-3 py-1 rounded-md">
              Start
            </a>
          </div>
        </div>
      </div>

      <div className="px-6 py-4">
          <h1 className="font-bold items-center justify-center flex py-2">Please check out this survey</h1>
          <p className="items-center justify-center flex">
            There's no point creating another class for a nav component when
            after all that will be the only component with those classes. It
          </p>
        </div>
    </>
  );
}

export default Card;

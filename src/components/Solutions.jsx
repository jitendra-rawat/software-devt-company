import React from "react";

const Solutions = () => {
  return (
    <section className="bg-black py-28 px-4 lg:px-0">
      <div className="px-4 lg:px-0 lg:max-w-7xl mx-auto container">
        <div className="mb-28">
          <h3 className="mb-4 text-4xl font-poppins font-bold text-white lg:text-center">
            WE SHAPE THE PERFECT SOLUTIONS.
          </h3>
          <p className="font-poppins text-base text-white lg:text-center">
            We are committed to providing our customers with exceptional service
            while offering our employees the best training.
          </p>
        </div>

        {/* first row */}
        <div className="flex flex-wrap gap-8 justify-between items-center">
          <div className="mb-4 hover:scale-110 bg-white w-[300px] h-[250px] p-4 rounded-lg hover:text-white hover:bg-red-500 cursor-pointer">
            <img
              className="w-48 object-cover "
              src="https://cdn-icons-gif.flaticon.com/10690/10690782.gif"
              alt=""
            />
            <p className="text-base    font-poppins font-bold ">
              UI/UX DESIGNING
            </p>
          </div>

          <div className="mb-4 hover:scale-110 bg-white w-[300px] h-[250px] p-4 rounded-lg hover:text-white hover:bg-red-500 cursor-pointer">
            <img
              className="w-48  "
              src="https://cdn-icons-gif.flaticon.com/14447/14447498.gif"
              alt=""
            />
            <p className="text-base  font-bold   font-poppins ">
              APP DEVELOPMENT
            </p>
          </div>

          <div className="mb-4 hover:scale-110 bg-white w-[300px] h-[250px] p-4 rounded-lg hover:text-white hover:bg-red-500 cursor-pointer">
            <img
              className="w-48  "
              src="https://cdn-icons-gif.flaticon.com/14183/14183429.gif"
              alt=""
            />
            <p className="text-base font-bold    font-poppins ">
              SEO & CONTENT WRITING
            </p>
          </div>

          <div className="mb-4 hover:scale-110 bg-white w-[300px] h-[250px] p-4 rounded-lg hover:text-white hover:bg-red-500 cursor-pointer">
            <img
              className="w-48  "
              src="https://cdn-icons-gif.flaticon.com/10971/10971749.gif"
              alt=""
            />
            <p className="text-base font-bold    font-poppins ">
              TECHNOLOGY SUPPORT
            </p>
          </div>

          <div className="mb-4 hover:scale-110 bg-white w-[300px] h-[250px] p-4 rounded-lg hover:text-white hover:bg-red-500 cursor-pointer">
            <img
              className="w-48  "
              src="https://cdn-icons-gif.flaticon.com/14447/14447532.gif"
              alt=""
            />
            <p className="text-base font-bold    font-poppins ">
              CLOUD MIGRATIONS
            </p>
          </div>

          <div className="hover:scale-110 bg-white w-[300px] h-[250px] p-4 rounded-lg hover:text-white hover:bg-red-500 cursor-pointer">
            <img
              className="w-48  "
              src="https://cdn-icons-gif.flaticon.com/14447/14447789.gif"
              alt=""
            />
            <p className="text-base font-bold    font-poppins ">
              WEBSITE DEVELOPMENT
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;

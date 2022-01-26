import React from 'react';

function Hero() {
  return <div className="mx-4 sm:mx-12 mb-2 mt-5">
        <div className="w-100 h-28 rounded bg-no-repeat bg-cover flex items-left justify-center flex-col pl-6 sm:pl-12" style={{backgroundImage:`url('/hero/bg.png')`}}>
          <h1 className="text-fadeWhite-500 uppercase text-5xl font-bold not-italic leading-58 mb-4">Colleges</h1>
          <p className="w-full sm:w-3/4 text-base-lg not-italic font-normal text-fadeWhite-500 xl:w-4/12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, suscipit malesuada lectus velit. Donec lacus semper in in sit eros, diam. Orci, mau ipsum ornare urna velit.</p>
        </div>
  </div>;
}

export default Hero;

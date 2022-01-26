import React from 'react';

function Hero() {
  return <div className="mx-12 my-2">
        <div className="w-100 h-28 rounded bg-no-repeat bg-cover flex items-left justify-center flex-col pl-12" style={{backgroundImage:`url('/hero/bg.png')`}}>
          <h1 className="text-fadeWhite-500 uppercase text-5xl font-bold not-italic leading-58 mb-4">Colleges</h1>
          <p className="text-base-lg not-italic font-normal text-fadeWhite-500 w-4/12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, suscipit malesuada lectus velit. Donec lacus semper in in sit eros, diam. Orci, mau ipsum ornare urna velit.</p>
        </div>
  </div>;
}

export default Hero;

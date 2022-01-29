import React from "react";

function Contact() {
  return (
    <div className="mx-4 sm:mx-12">
    <h1 className="text-2xl text-dark-500">Contact</h1>
    <div className="flex">
    
      <div className="flex-initial w-4/6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58748.00106305306!2d72.49775137910157!3d23.03294730000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84c7db78f57b%3A0x18a73db63ed05c39!2sIndian%20Institute%20of%20Management%20Ahmedabad!5e0!3m2!1sen!2sin!4v1643439288377!5m2!1sen!2sin"
          className="w-full"
          height="240px"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="flex-1 p-2 flex flex-col gap-4">
        <div className="flex gap-2 items-start">
          <span className="flex-initial w-20 font-bold text-dark-200 text-sm">Postal Add:</span>
          <div className="flex-initial w-3/5 flex items-center">
            <span className="text-sm text-dark-500">
              Indian Institute of Management Sargam Marg, Vastrapur, Ahmedabad,
              Gujarat INDIA - 380015
            </span>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <span className="flex-initial w-20 font-bold text-dark-200 text-sm">Fax:</span>
          <div className="flex-initial w-3/5 flex items-center">
            <span className="text-sm text-dark-500">+91 8574875930</span>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <span className="flex-initial w-20 font-bold text-dark-200 text-sm">Tel. :</span>
          <div className="flex-initial w-3/5 flex items-center">
            <span className="text-sm text-dark-500">+91 8574875930 / 26308357</span>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <span className="flex-initial w-20 font-bold text-dark-200 text-sm">Email:</span>
          <div  className="flex-initial w-3/5 flex items-center">
            <span className="text-sm text-dark-500">admission@iima.ac.in</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;

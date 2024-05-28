import React, { useState } from 'react';

import ParticleBackground from './ParticleBackground';
import SocialSidebar from './SocialSideBar';
import NavBar from './NavBar';


function ContactForm() {
  const [showNotification, setShowNotification] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const [msgset,setMsgset] = useState(false)

  function msgSent(){
    setMsgset(true)

    setTimeout(setMsgset(false),1000)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    if (form.checkValidity()) {
      // Form is valid, proceed with submission
      console.log("Form submitted!");
      // Show notification after form submission
      setShowNotification(true);
      // Reset the form fields if needed
      form.reset();
      // Reset selected file
      setSelectedFile(null);
    } else {
      // Form is invalid, show error messages
      form.reportValidity();
    }
  };
  return (
    <div className='mb-[2rem]'>
      <ParticleBackground />
      <NavBar />
     
      <SocialSidebar />
      <div className="container font-poppins mx-auto pb-20 md:py-[0.5rem] px-5 md:px-20 flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6 overflow-auto">
      <div className="flex-shrink-0 w-full md:w-1/2 overflow-auto">
          <h2 className="text-3xl font-bold text-yellow-500 ml-20">Join us</h2>
          <form onSubmit={handleFormSubmit} className="mt-8 space-y-6 w-2/3 ml-20 overflow-auto">
              <div>
                  <label htmlFor="firstname" className="block text-sm font-medium text-yellow-700">First Name</label>
                  <input type="text" id="firstname" name="firstname" required className="mt-1 px-2 py-3 border-2 border-yellow-400 block w-full shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm rounded-md" />
              </div>
              <div>
                  <label htmlFor="lastname" className="block text-sm font-medium text-yellow-700">Last Name</label>
                  <input type="text" id="lastname" name="lastname" required className="mt-1 px-2 py-3 border-2 border-yellow-400 block w-full shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm rounded-md" />
              </div>
              <div>
                  <label htmlFor="workmail" className="block text-sm font-medium text-yellow-700">Work Email</label>
                  <input type="email" id="workmail" name="workmail" required className="mt-1 px-2 py-3 border-2 border-yellow-400 block w-full shadow-sm focus:ring-yellow-500 focus:yellow-indigo-500 sm:text-sm rounded-md" />
              </div>
              <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-yellow-700">Phone</label>
                  <input type="tel" id="phone" name="phone" required className="mt-1 px-2 py-3 border-2 border-yellow-400 block w-full shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm rounded-md" />
              </div>
              {/* <div>
                  <label htmlFor="resume" className="block text-sm font-medium text-yellow-700">Upload Resume</label>
                  <label htmlFor="resume" className="mt-1 px-2 py-3 border-2 border-violet-400 block w-full cursor-pointer shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md text-center bg-indigo-100 text-indigo-600 hover:bg-indigo-200 hover:text-indigo-700">
                    {selectedFile ? selectedFile.name : "Choose File"}
                    <input type="file" id="resume" name="resume" style={{ display: 'none' }} accept=".pdf,.doc,.docx" onChange={handleFileChange} />
                  </label>
              </div> */}
              <div>
                  <label htmlFor="message" className="block text-sm font-medium text-yellow-700">Message</label>
                  <textarea id="message" name="message" rows="4" required className="mt-1 p-2 resize-none block border-2 border-yellow-400 w-full shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm rounded-md"></textarea>
              </div>
              <div>
                  <button onClick={msgSent} type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-semibold bg-yellow-500 rounded-md  hover:bg-slate-500 hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-900 focus:ring-opacity-50">Send Message</button>
              </div>
          </form>
          {msgset && (
            <div className="absolute top-4 right-4 bg-yellow-500 text-white px-4 py-2 rounded-md shadow-md mt-[7rem]">
              Message sent successfully!
            </div>
          )}
          
      </div>
      
    </div>
    
    </div>
  );
}

export default ContactForm;
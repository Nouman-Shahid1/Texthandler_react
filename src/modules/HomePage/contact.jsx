import React from 'react'

export const ContactForm = () => {
  return (
    <div>
    <div className=" sm:flex-row flex flex-col p-8 mx-auto max-w-7xl mt-11">
      <form className="sm:w-2/3 mr-4 w-[100%]">
        <h2 className="text-4xl font-semibold mb-4">Contact Us</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium mb-1">Name</label>
          <input type="text" id="name" name="name" className="w-full shadow-lg p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-1">Email</label>
          <input type="email" id="email" name="email" className="w-full p-2 shadow-lg border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block font-medium mb-1">Phone</label>
          <input type="tel" id="phone" name="phone" className="w-full p-2 shadow-lg border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block font-medium mb-1">Message</label>
          <textarea id="message" name="message" className="w-full p-2 shadow-lg border rounded" rows="4"></textarea>
        </div>
        <button type="submit" className="bg-yellow-500 text-white px-8 py-3 rounded-full hover:bg-yellow-400">Send</button>
      </form>
      <div className="sm:w-1/2 p-6 w-[100%]">
        <h2 className="text-2xl font-semibold mb-4">Live Location</h2>
          <iframe
          title="Live Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.379424474859!2d74.241766415118!3d31.45183355613268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919210a6c850a6d%3A0xaedf2c10f43a715e!2sLahore%20Leads%20University!5e0!3m2!1sen!2sPK!4v1629543241566!5m2!1sen!2sPK"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>

    </div>
  )
}


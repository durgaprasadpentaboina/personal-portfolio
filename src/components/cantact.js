// src/ContactPage.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import HomePage from "./home";
// import  { useState } from 'react';

const ContactPage = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  const handleBackbutton = () => {

    navigate ("/");
  }
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [status, setStatus] = useState('');

  // // useEffect(() =>{
  //   // create a different function to change the new colur everytime
  //   const changeColor = () => {
  //     const colors = ["red", "blue", "green", "yellow", "purple"];
  //     const randomColor = colors[Math.floor(Math.random() * colors.length)];
  //     document.body.style.backgroundColor = randomColor;
  //     };
  //     changeColor();
  // })


  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // const handleClick = () => {
  //   setCount(count + 1); // Update state by incrementing count
  // };
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.subject && formData.message) {
      setStatus('Your message has been sent!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setStatus('Please fill in all fields.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-semibold text-center mb-6">Contact Me!</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button type="submit" className="w-full py-2 px-4 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Send Message
        </button>
      </form>

      {status && (
        <p className={`mt-4 text-center ${status.includes('sent') ? 'text-green-500' : 'text-red-500'}`}>
          {status}
        </p>
      )}
       <button 
onClick={handleBackbutton}
className="bg-gray-600 text-white m-2 px-4 py-2 ml-100px rounded-lg hover:bg-gray-800 transition"
>
Back
</button>

{/* create the button which use states */}
{/* <div>
      <p>You've clicked the button {count} times</p>
      <button 
      className="bg-gray-600 text-white m-2 px-4 py-2 ml-100px rounded-lg hover:bg-gray-800 transition"

      onClick={handleClick}>Click me</button>
    </div>
  state BUtton */}

    </div>
  );
};

export default ContactPage;

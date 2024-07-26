import React, { useState } from 'react';
import axios from 'axios';

const LeaveMeYourInfo = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/messages', formData)
      .then(response => {
        console.log('Message sent:', response.data);
      })
      .catch(error => {
        console.error('There was an error sending the message:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fullname">Full Name</label>
        <input 
          type="text" 
          id="fullname" 
          name="fullname" 
          value={formData.fullname} 
          onChange={handleChange}
          required 
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange}
          required 
        />
      </div>
      <div>
        <label htmlFor="subject">Subject</label>
        <input 
          type="text" 
          id="subject" 
          name="subject" 
          value={formData.subject} 
          onChange={handleChange}
          required 
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea 
          id="message" 
          name="message" 
          value={formData.message} 
          onChange={handleChange}
          rows="4"
          required 
        ></textarea>
      </div>
      <div>
        <button type="submit">Send Message</button>
      </div>
    </form>
  );
};

export default LeaveMeYourInfo;

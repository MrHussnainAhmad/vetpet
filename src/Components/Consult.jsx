import React, { useState } from 'react';
import './CSS/Consult.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Consult = () => {
  const [message, setMessage] = useState('Hello Doc, I need a consultancy about : ');
  const [result, setResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult('Sending...');
    
    const formData = new FormData(e.target);
    formData.append('access_key', '18253797-8d77-4ec8-aa8b-4b3f8a97e167');
    
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Consultation request submitted successfully!');
      e.target.reset();
      setMessage('');
    } else {
      console.log('Error:', data);
      setResult(data.message);
    }
  };

  return (
    <>
      <Navbar />
      <section className="consult-section">
        <h2>Online Consultation</h2>
        <form onSubmit={handleSubmit} className="consult-form">
          <div className="form-group">
            <label>Describe your pet's issue</label>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="E.g., My dog has been vomiting for the past 2 days..."
              required
            />
          </div>
          <button type="submit" className="submit1-btn">
            Request Consultation
          </button>
        </form>
        <span className="form-result">{result}</span>
      </section>
      <Footer />
    </>
  );
};

export default Consult;

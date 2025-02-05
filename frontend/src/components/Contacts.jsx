import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });
    
    try {
      await axios.post('/api/contact', formData);
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again later.' 
      });
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacts" className="bg-black text-white py-16 md:py-32 relative min-h-[80vh] flex items-center">
      {/* Desktop Close Button */}
      <button
        onClick={() => window.location.reload()}
        className="hidden md:flex absolute top-16 right-10 text-white hover:text-gray-300 z-50 w-12 h-12 items-center justify-center rounded-full hover:bg-[#1a1a1a] transition-all duration-300"
      >
        <span className="text-2xl">✕</span>

      </button>



      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#c2c2c2] to-white leading-[1.2] py-4">
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl text-[#808080] mb-8">
            Have a question or want to work together? Drop me a message! ✨
          </p>
        </div>

        {status.message && (
          <div className={`max-w-lg mx-auto mb-8 p-4 rounded-lg ${
            status.type === 'success' 
              ? 'bg-[#1a332a] text-green-400 border border-green-900' 
              : 'bg-[#331a1a] text-red-400 border border-red-900'
          }`}>
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
          <div>
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-3 rounded-lg bg-[#1a1a1a] border border-[#333333] text-white placeholder-gray-400 focus:outline-none focus:border-[#4a4a4a] transition-colors"
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-3 rounded-lg bg-[#1a1a1a] border border-[#333333] text-white placeholder-gray-400 focus:outline-none focus:border-[#4a4a4a] transition-colors"
              required
            />
          </div>
          <div>
            <textarea
              placeholder="Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-3 rounded-lg bg-[#1a1a1a] border border-[#333333] text-white placeholder-gray-400 focus:outline-none focus:border-[#4a4a4a] transition-colors"
              rows="5"
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            disabled={isSubmitting}
            className={`w-full p-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 
              ${isSubmitting 
                ? 'bg-[#333333] cursor-not-allowed' 
                : 'bg-[#1a1a1a] hover:bg-[#2a2a2a] border border-[#333333]'
              }`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
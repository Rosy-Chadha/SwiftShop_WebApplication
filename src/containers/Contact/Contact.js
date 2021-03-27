import React from 'react';
import './Contact.scss';
import ScrollToTopOnMount from '../../shared/ScrollToTopOnMount';

const contact = () => (
  <>
    <ScrollToTopOnMount />
    <div className="contact-container">
      <h2 className="main-title">Contact</h2>
      <p className="main-info">Feel free to contact us. Our social media handles are active 24/7. For any query or feedback fill the form given below or contact us through the phone number which is provided.</p>
      <h3 className="title">Phone number:</h3>
      <p>555-444-333 (free connection)</p>
      <h3 className="title">Work hours:</h3>
      <p>Monday - Friday: 9.00 - 20.00</p>
      <p>Saturday - SUnday: 10.00 - 16.00</p>
    </div>
  </>
);

export default contact;
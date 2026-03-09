import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './BookNow.css';

export default function BookNow() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkin: '',
    checkout: '',
    guests: '1',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking data:', formData);
    alert(t('booking.successMessage'));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="book-now">
      <h1>{t('booking.title')}</h1>
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label htmlFor="name">{t('booking.fullName')}</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">{t('booking.email')}</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        
        <div className="form-group">
          <label htmlFor="phone">{t('booking.phone')}</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="checkin">{t('booking.checkin')}</label>
            <input type="date" id="checkin" name="checkin" value={formData.checkin} onChange={handleChange} required />
          </div>
          
          <div className="form-group">
            <label htmlFor="checkout">{t('booking.checkout')}</label>
            <input type="date" id="checkout" name="checkout" value={formData.checkout} onChange={handleChange} required />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="guests">{t('booking.guests')}</label>
          <select id="guests" name="guests" value={formData.guests} onChange={handleChange}>
            <option value="1">{t('booking.guestOptions.1')}</option>
            <option value="2">{t('booking.guestOptions.2')}</option>
            <option value="3">{t('booking.guestOptions.3')}</option>
            <option value="4">{t('booking.guestOptions.4')}</option>
            <option value="5+">{t('booking.guestOptions.5')}</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="message">{t('booking.message')}</label>
          <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange}></textarea>
        </div>
        
        <button type="submit" className="submit-btn">{t('booking.submit')}</button>
      </form>
    </div>
  );
}

import React, { useState } from 'react';
import demoImg3 from '../../assets/images/demo-3.png';
import axios from 'axios';

function NeedAdvises() {
  const URL = import.meta.env.VITE_BLOG_URL;
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    question: '',
  });
  const [formErrors, setFormErrors] = useState({
    email: false,
    phone: false,
  });

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, phone } = formData;
    const emailValid = validateEmail(email);
    const phoneValid = validatePhone(phone);

    setFormErrors({
      email: !emailValid,
      phone: !phoneValid,
    });

    if (emailValid && phoneValid) {
      try {
        const res = await axios.post(URL + '/need-advise', formData);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className='relative w-[350px] px-4 py-8 bg-white text-black rounded-[12px] flex flex-col gap-[40px]'>
      <div className='flex'>
        <h1>Need advice?</h1>
        <img className='absolute right-0 -top-[20px]' src={demoImg3} alt='' />
      </div>
      <form
        className='flex flex-col gap-[20px] text-black'
        onSubmit={handleSubmit}
      >
        <label className='text-black' htmlFor='email'>
          Email
        </label>
        <input
          className={`h-[46px] text-black border ${
            formErrors.email ? 'border-red' : 'border-gray'
          } rounded-[16px]`}
          type='email'
          id='email'
          name='email'
          // required
          value={formData.email}
          onChange={handleInputChange}
        />
        {formErrors.email && <p className='text-red'>Invalid email format</p>}
        <label className='text-black' htmlFor='phone'>
          Phone
        </label>
        <input
          className={`h-[46px] text-black border ${
            formErrors.phone ? 'border-red' : 'border-gray'
          } rounded-[16px]`}
          type='text'
          name='phone'
          id='phone'
          // required
          value={formData.phone}
          onChange={handleInputChange}
        />
        {formErrors.phone && (
          <p className='text-red'>Invalid phone format (10 digits)</p>
        )}
        <label className='text-black' htmlFor='question'>
          Your question
        </label>
        <textarea
          className={`text-black border rounded-[16px]`}
          name='question'
          id='question'
          cols='30'
          rows='10'
          value={formData.question}
          onChange={handleInputChange}
        ></textarea>
        <button className='h-[46px] bg-yellow rounded-[16px]' type='submit'>
          Confirm
        </button>
      </form>
    </div>
  );
}

export default NeedAdvises;

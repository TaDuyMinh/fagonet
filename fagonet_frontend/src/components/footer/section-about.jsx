import { useState } from 'react';
import LazyLoad from 'react-lazyload';
import logo from '../../assets/images/home/logo.png';
import fbLogo from '../../assets/images/home/facebook.png';
import insLogo from '../../assets/images/home/ins.png';
import twLogo from '../../assets/images/home/tw.png';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
function SectionAbout() {
  const { t } = useTranslation();
  const lazyLoadOptions = {
    offset: 0,
    once: true,
  };
  const [email, setEmail] = useState('');
  function handleScroll() {
    window.scrollTo(0, 0);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    };
    try {
      const res = await fetch('https://api.github.com/users', requestOptions);
      if (res.ok) {
        console.log('Email đã được gửi thành công.');
      } else {
        console.error('Lỗi khi gửi email:', res.status);
      }
    } catch (error) {
      console.error('Lỗi khi gửi email:', error);
    }
  };
  return (
    <section className='container m-auto py-[60px] about-footer'>
      <div className='w-1/4'>
        <div className='flex items-center'>
          <LazyLoad className='mr-2' {...lazyLoadOptions}>
            <img className='w-full' src={logo} alt='fagonet-logo' />
          </LazyLoad>
          <h3 className='text-[26px] text-blue font-bold'>FAGONET</h3>
        </div>
        <p className='my-2'>{t('fago-intro')}</p>
      </div>
      <div>
        <h5 className='h-1/4 text-[18px] font-bold'>Useful Links</h5>
        <ul className='text-start'>
          <li className='my-[4px] hover:text-blue'>
            <Link to='/' onClick={handleScroll}>
              {t('HOME')}
            </Link>
          </li>
          <li className='my-[4px] hover:text-blue'>
            <Link to='/services' onClick={handleScroll}>
              {t('SERVICES')}
            </Link>
          </li>
          <li className='my-[4px] hover:text-blue'>
            <Link to='/solutions' onClick={handleScroll}>
              {t('SOLUTIONS')}
            </Link>
          </li>
          <li className='my-[4px] hover:text-blue'>
            <Link to='/contact' onClick={handleScroll}>
              {t('CONTACT')}
            </Link>
          </li>
        </ul>
      </div>
      <div className='w-1/4 flex flex-col justify-center home-contact-us'>
        <h5 className='h-1/4 text-start text-[18px] font-bold'>Contact us</h5>
        <ul className='h-3/4'>
          <li>
            <span className='font-bold'>Address: </span>
            {t('about.district')}
          </li>
          <li>
            <span className='font-bold'>Email: </span>
            support@fagonet.com
          </li>
          <li>
            <span className='font-bold'>Phone: </span>(098) 272 0920
          </li>
        </ul>
      </div>
      <div>
        <div className='2/5'>
          <h4 className='mb-4 text-[20px] font-bold'>
            Let&#39;s work together!
          </h4>
        </div>
        <form className='relative' onSubmit={handleSubmit}>
          <input
            className='w-[307px] h-[48px] bg-white text-darkBlue px-[24px] py-[17px] rounded-[25px] input-footer'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            checked
          />
          <button className='btn-submit-footer' type='submit'>
            Submit
          </button>
        </form>
        <div className='flex mt-4'>
          <LazyLoad className='' {...lazyLoadOptions}>
            <img src={fbLogo} alt='fb-logo' />
          </LazyLoad>
          <LazyLoad className='mx-4 ' {...lazyLoadOptions}>
            <img src={insLogo} alt='ins-logo' />
          </LazyLoad>
          <LazyLoad className='' {...lazyLoadOptions}>
            <img src={twLogo} alt='tw-logo' />
          </LazyLoad>
        </div>
      </div>
    </section>
  );
}

export default SectionAbout;

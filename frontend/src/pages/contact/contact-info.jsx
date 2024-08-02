import LazyLoad from 'react-lazyload';
import map from '../../assets/images/contact/map.png';
import phoneImg from '../../assets/images/contact/phone.png';
import mailImg from '../../assets/images/contact/mail.png';
import fbImg from '../../assets/images/contact/facebook.png';
import insImg from '../../assets/images/contact/ins.png';
import twImg from '../../assets/images/contact/twitter.png';
import { useTranslation } from 'react-i18next';
function ContactInfo() {
  const { t } = useTranslation();
  const lazyLoadOptions = {
    offset: 100,
    once: true,
  };
  return (
    <div className='contact-page-info relative'>
      <LazyLoad className='map-img w-[360px] h-[672px]' {...lazyLoadOptions}>
        <img className='w-full Scale' src={map} alt='fagonet-map' />
      </LazyLoad>
      <div className='contact-location'>
        <h3>FAGONET</h3>
        <p className='text-darkBlue'>{t('about.district')}</p>
      </div>
      <div className='my-4'>
        <div className='my-4 flex items-center'>
          <LazyLoad className='' {...lazyLoadOptions}>
            <img className='Scale' src={phoneImg} alt='phone-img' />
          </LazyLoad>
          <p className='mx-4 xl:text-[24px] lg:text-[20px] text-[18px] font-bold'>
            098 2720 920
          </p>
        </div>
        <div className='my-4 flex items-center'>
          <LazyLoad {...lazyLoadOptions}>
            <img className='Scale' src={mailImg} alt='mail-img' />
          </LazyLoad>
          <p className='mx-4 xl:text-[24px] lg:text-[20px] text-[18px] font-bold'>
            support@fagonet.com
          </p>
        </div>
        <div className='my-4 flex items-center gap-[20px]'>
          <LazyLoad {...lazyLoadOptions}>
            <img src={fbImg} alt='fb-img' />
          </LazyLoad>
          <LazyLoad {...lazyLoadOptions}>
            <img src={insImg} alt='ins-img' />
          </LazyLoad>
          <LazyLoad {...lazyLoadOptions}>
            <img src={twImg} alt='twitter-img' />
          </LazyLoad>
        </div>
      </div>
    </div>
  );
}
export default ContactInfo;

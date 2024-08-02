import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LazyLoad from 'react-lazyload';
import { ServicesContext } from './hooks/services-context';
import introServicesImg from '../../assets/images/services/Icon04-2.png';
import Spinner from '../../components/spinner';
function ServicesList() {
  const { t } = useTranslation();
  const { dataServices } = useContext(ServicesContext);
  const [hoverServices, setHoverServices] = useState(null);
  // const handleScrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // };
  const lazyLoadOptions = {
    offset: 100,
    once: true,
    placeholder: <Spinner />,
  };
  return (
    <main className='w-4/5 mx-auto my-16 flex flex-col items-center justify-between lg:flex-row'>
      <LazyLoad className='lg:w-1/2' {...lazyLoadOptions}>
        <img
          className='m-auto Scale'
          src={introServicesImg}
          alt='intro-services-img'
        />
      </LazyLoad>
      <div className='lg:w-1/2 services-list'>
        {dataServices.map((service, index) => {
          return (
            <Link
              to={`${service.link}`}
              key={index}
              className={`relative bg-boldBlue Scale ${
                hoverServices === index ? 'hoverServices' : ''
              }`}
              onMouseOver={() => setHoverServices(index)}
              onMouseOut={() => setHoverServices(null)}
              onTouchStart={() => setHoverServices(index)}
              onTouchEnd={() => setHoverServices(null)}
            >
              <LazyLoad className='w-[60px] h-[60px]' {...lazyLoadOptions}>
                <img
                  src={
                    hoverServices === index
                      ? service.introImg
                      : service.hoverIntroImg
                  }
                  alt='secureImg'
                />
              </LazyLoad>
              <h4 className='my-2 text-start text-[20px] leading-[23.48px] font-bold'>
                {service.intro}
              </h4>
              <p className='text-start leading-[18.78px]'>
                {t(`services-page.firstWord${index + 1}`)}
              </p>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
export default ServicesList;

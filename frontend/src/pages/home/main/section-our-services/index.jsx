import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LazyLoad from 'react-lazyload';
import { ServicesContext } from '../../../services/hooks/services-context';
import Spinner from '../../../../components/spinner';
function OurServices() {
  const { t } = useTranslation();
  const [hoverServices, setHoverServices] = useState(null);
  const { dataServices } = useContext(ServicesContext);
  const handleClick = () => {
    window.scroll(0, 0);
  };
  return (
    <section className='container w-4/5 m-auto text-center Up'>
      <h3 className='xl:text-[72px] lg:text-[64px] md:text-[52px] text-[32px] text-center leading-[75.14px] md:tracking-[16px] tracking-[12px] font-bold uppercase'>
        {t('SERVICES')}
      </h3>
      <p className='my-4 md:text-[20px] text-[18px] text-white'>
        {t('services-intro')}
      </p>
      <div className='home-services mt-12'>
        {dataServices.map((service, index) => {
          return (
            <article
              key={index}
              className={`bg-boldBlue ${
                hoverServices === index ? 'hoverServices' : 'notHoverServices'
              }`}
              onMouseOver={() => setHoverServices(index)}
              onMouseOut={() => setHoverServices(null)}
              onTouchStart={() => setHoverServices(index)}
              onTouchEnd={() => setHoverServices(null)}
            >
              <LazyLoad
                className='w-[60px] h-[60px]'
                offset={100}
                once
                placeholder={<Spinner />}
              >
                <img
                  src={
                    hoverServices === index
                      ? service.introImg
                      : service.hoverIntroImg
                  }
                  alt='secureImg'
                />
              </LazyLoad>
              <h4 className='my-2 text-start xl:text-[20px] text-[18px] font-bold'>
                {service.intro}
              </h4>
              <p className='text-start'>
                {t(`services-page.firstWord${index + 1}`)}
              </p>
              <Link
                className='py-2 text-end font-bold'
                to={`/services/${service.link}`}
                onClick={handleClick}
              >
                {t('services.read-more')}
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default OurServices;

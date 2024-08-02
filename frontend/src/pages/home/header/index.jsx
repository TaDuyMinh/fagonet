import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import LazyLoad from 'react-lazyload';
import thumbsupImg from '../../../assets/images/home/Thumbsup.png';
import siem from '../../../assets/images/solutions/folder.png';
import waf from '../../../assets/images/solutions/wall.png';
import nips from '../../../assets/images/solutions/prevention.png';
import edr from '../../../assets/images/solutions/search.png';
import nac from '../../../assets/images/solutions/control.png';
import nids from '../../../assets/images/solutions/guard.png';
import dip from '../../../assets/images/solutions/data.png';
import swl3 from '../../../assets/images/solutions/guard.png';
import Spinner from '../../../components/spinner';
function Header() {
  const { t } = useTranslation();
  const lazyLoadOptions = {
    offset: 100,
    once: true,
    placeholder: <Spinner />,
  };
  const dataIntro = [
    {
      url: siem,
      content: 'intro.siem',
    },
    {
      url: waf,
      content: 'intro.waf',
    },
    {
      url: nips,
      content: 'intro.nips',
    },
    {
      url: edr,
      content: 'intro.edr',
    },
    {
      url: nac,
      content: 'intro.nac',
    },
    {
      url: nids,
      content: 'intro.nids',
    },
    {
      url: dip,
      content: 'intro.dip',
    },
    {
      url: swl3,
      content: 'intro.swl3',
    },
    {
      url: dip,
      content: 'intro.dbfw',
    },
  ];

  const [intros, setIntros] = useState([]);

  useEffect(() => {
    const updatedIntros = dataIntro.map((item) => ({
      url: item.url,
      content: t(item.content),
    }));
    setIntros(updatedIntros);
  }, [t]);
  const handleScroll = () => {
    const element = document.getElementById('our-services');
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  return (
    <header className='header-home-page w-4/5 m-auto Scale'>
      <section className='header-home-page-intro container m-auto flex justify-between items-center'>
        <div className='w-1/2'>
          <h1 className='sm:w-1/2 xl:w-full xl:text-[64px] lg:text-[52px] md:text-[48px] text-[32px] text-[#F5F5F5] font-bold leading-[93px]'>
            {t('intro.title1')}
          </h1>
          <h3 className='my-4 xl:text-[80px] lg:text-[64px] md:text-[52px] text-[48px] text-[#F5F5F5] font-bold leading-[93px]'>
            {t('intro.title3')}
          </h3>
          <p className='my-8 w-4/5 text-gray leading-[19px]'>
            {t('fago-intro')}
          </p>
          <button
            className='get-start-btn mt-12 w-[241px] h-[61px] font-bold rounded-[30px]'
            style={{ boxShadow: '0px 8px 24px rgba(204, 219, 220, 0.28)' }}
            onClick={handleScroll}
          >
            {t('started')}
          </button>
        </div>
        <div className='w-1/2'>
          <img
            className='m-auto w-4/5 Scale'
            src={thumbsupImg}
            alt='intro-img-home'
          />
        </div>
      </section>
      <section className='my-32 py-8 border-t border-b border-boldBlue'>
        <div className='carousel'>
          <div className='autoplay-carousel'>
            {intros.map((intro, index) => (
              <article
                key={index}
                className='text-gray hover:text-white opacity-80 hover:opacity-100'
              >
                <LazyLoad
                  className='w-[50px] m-auto'
                  key={index}
                  {...lazyLoadOptions}
                >
                  <img
                    className='w-full h-full Up'
                    src={intro.url}
                    alt={intro.content}
                  />
                </LazyLoad>
                <h5 className='h-20 text-center'>{intro.content}</h5>
              </article>
            ))}
            {intros.map((intro, index) => (
              <article
                key={index}
                className='text-gray hover:text-white opacity-80 hover:opacity-100'
              >
                <LazyLoad
                  className='w-[50px] m-auto'
                  key={index}
                  {...lazyLoadOptions}
                >
                  <img
                    className='w-full h-full Up'
                    src={intro.url}
                    alt={intro.content}
                  />
                </LazyLoad>
                <h5 className='h-20 text-center'>{intro.content}</h5>
              </article>
            ))}
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;

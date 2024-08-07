import { useCallback, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';
import LazyLoad from 'react-lazyload';
import earthImg from '../../assets/images/nav/earth.png';
import logo from '../../assets/images/home/logo.png';

function Nav() {
  const { t } = useTranslation();
  const lazyLoadOptions = {
    offset: 0,
    once: true,
  };

  const [showNav, setShowNav] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem('language') || 'en'
  );
  const [tabLanguage, setTabLanguage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSelectChangeLanguage = useCallback((language) => {
    const lang = language === 'en' ? 'en' : language === 'vi' ? 'vi' : 'ja';
    setSelectedLanguage(lang);
    setShowNav(false);
    handleShowTabLanguage(false);
  }, []);

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem('language', selectedLanguage);
  }, [selectedLanguage]);

  const handleShowNav = () => {
    setShowNav((prevShow) => !prevShow);
    setTabLanguage(false);
  };

  const handleLinkClick = useCallback(() => {
    setShowNav(false);
    setTabLanguage(false);
  }, []);

  const handleShowTabLanguage = () => {
    setTabLanguage((prevTab) => !prevTab);
  };

  return (
    <section className={`relative nav-item h-24 flex Scale`} style={{position:'fixed', width: '100%', top: '0', backgroundColor: '#003249', zIndex: '9999'}}>
      <div className='container m-auto w-4/5 h-full flex justify-between'>
        <Link
          className='flex justify-between items-center cursor-pointer'
          to='.'
          onClick={() => setShowNav(false)}
        >
          <LazyLoad className='w-1/4' {...lazyLoadOptions}>
            <img className='my-auto mr-2' src={logo} alt='logo' />
          </LazyLoad>
          <h3 className='text-[26px] font-bold text-blue'>FAGONET</h3>
        </Link>
        <div
          className={`show-nav flex flex-row items-center font-bold justify-between ${
            showNav ? 'active' : ''
          }`}
        >
          <nav className='nav'>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'mx-5 my-4 lg:my-2 nav-link hight-light'
                  : 'mx-5 my-4 lg:my-2 nav-link'
              }
              rel='nofollow'
              to='/'
              onClick={() => handleLinkClick('HOME')}
            >
              {t('HOME')}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'mx-5 my-4 lg:my-2 nav-link hight-light'
                  : 'mx-5 my-4 lg:my-2 nav-link'
              }
              rel='nofollow'
              to='services'
              onClick={() => handleLinkClick('SERVICES')}
            >
              {t('SERVICES')}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'mx-5 my-4 lg:my-2 nav-link hight-light'
                  : 'mx-5 my-4 lg:my-2 nav-link'
              }
              rel='nofollow'
              to='solutions'
              onClick={() => handleLinkClick('SOLUTIONS')}
            >
              {t('SOLUTIONS')}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'mx-5 my-4 lg:my-2 nav-link hight-light'
                  : 'mx-5 my-4 lg:my-2 nav-link'
              }
              rel='nofollow'
              to='blogs'
              onClick={() => handleLinkClick('BLOGS')}
            >
              {t('BLOGS')}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'mx-5 my-4 lg:my-2 nav-link hight-light'
                  : 'mx-5 my-4 lg:my-2 nav-link'
              }
              rel='nofollow'
              to='contact'
              onClick={() => handleLinkClick('CONTACT')}
            >
              {t('CONTACT')}
            </NavLink>
          </nav>
          <div className='custom-select-language ml-4'>
            <div>
              <img className='w-[21px]' src={earthImg} alt='earth-logo' />
              <h4 className='ml-2'>
                {selectedLanguage === 'vi' ? 'VI' : selectedLanguage === 'ja' ? 'JA' : 'EN'}
              </h4>
              <button onClick={handleShowTabLanguage}>
                <i className='fa fa-caret-down ml-2 mb-[4px]'></i>
              </button>
            </div>
            <ul className={`options-language ${tabLanguage ? 'active' : ''}`}>
              <li
                className='relative flex justify-between items-center cursor-pointer'
                onClick={() => handleSelectChangeLanguage('en')}
              >
                <h5 className='w-1/4 mx-[12px]'>EN</h5>
                <h5 className='w-3/4 px-4 border-l border-l-white'>
                  {t('en')}
                </h5>
                <i
                  className={`fa fa-check absolute right-2 ${
                    selectedLanguage === 'en' ? 'block' : 'hidden'
                  }`}
                ></i>
              </li>
              <li
                className='relative flex justify-between items-center cursor-pointer'
                onClick={() => handleSelectChangeLanguage('vi')}
              >
                <h5 className='w-1/4 mx-[12px]'>VI</h5>
                <h5 className='w-3/4 px-4 border-l border-l-white'>
                  {t('vi')}
                </h5>
                <i
                  className={`fa fa-check absolute right-2 ${
                    selectedLanguage === 'vi' ? 'block' : 'hidden'
                  }`}
                ></i>
              </li>
              {/* <li
                className='relative flex justify-between items-center cursor-pointer'
                onClick={() => handleSelectChangeLanguage('ja')}
              >
                <h5 className='w-1/4 mx-[12px]'>JA</h5>
                <h5 className='w-3/4 px-4 border-l border-l-white'>
                  {t('ja')}
                </h5>
                <i
                  className={`fa fa-check absolute right-2 ${
                    selectedLanguage === 'ja' ? 'block' : 'hidden'
                  }`}
                ></i>
              </li> */}
            </ul>
          </div>
        </div>
        <i
          className='fa fa-bars hidden text-xl cursor-pointer'
          onClick={handleShowNav}
        ></i>
      </div>
    </section>
  );
}

export default Nav;

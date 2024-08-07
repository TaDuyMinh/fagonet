import { useCallback } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
function NavSolutions() {
  const { t } = useTranslation();
  const [selectedLink, setSelectedLink] = useState('FAGONET-SIEM');
  const [showNav, setShowNav] = useState(false);
  const handleLinkClick = useCallback(
    (link) => {
      setSelectedLink(link);
      setShowNav(false);
    },
    [selectedLink]
  );
  return (
    <section className='Scale'>
      <nav
        className={`nav-solutions container xl:w-1/2 mx-auto my-8 font-bold justify-between items-center Right ${
          showNav ? 'show-nav-solutions' : 'hidden lg:flex'
        }`}
      >
        <button
          className='btn-close-nav font-extrabold lg:hidden text-xl'
          onClick={() => setShowNav(false)}
        >
          X
        </button>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'mx-5 my-4 lg:my-2 nav-link hight-light'
              : 'mx-5 my-4 lg:my-2 nav-link '
          }
          rel='nofollow'
          to='siem'
          onClick={() => handleLinkClick('FAGONET-SIEM')}
        >
          SIEM
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'mx-5 my-4 lg:my-2 nav-link hight-light'
              : 'mx-5 my-4 lg:my-2 nav-link '
          }
          rel='nofollow'
          to='waf'
          onClick={() => handleLinkClick('FAGONET-WAF')}
        >
          WAF
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'mx-5 my-4 lg:my-2 nav-link hight-light'
              : 'mx-5 my-4 lg:my-2 nav-link '
          }
          rel='nofollow'
          to='nips'
          onClick={() => handleLinkClick('FAGONET-NIPS')}
        >
          NIPS
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'mx-5 my-4 lg:my-2 nav-link hight-light'
              : 'mx-5 my-4 lg:my-2 nav-link '
          }
          rel='nofollow'
          to='edr'
          onClick={() => handleLinkClick('FAGONET-EDR')}
        >
          EDR
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'mx-5 my-4 lg:my-2 nav-link hight-light'
              : 'mx-5 my-4 lg:my-2 nav-link '
          }
          rel='nofollow'
          to='nac'
          onClick={() => handleLinkClick('FAGONET-NAC')}
        >
          NAC
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'mx-5 my-4 lg:my-2 nav-link hight-light'
              : 'mx-5 my-4 lg:my-2 nav-link '
          }
          rel='nofollow'
          to='nids'
          onClick={() => handleLinkClick('FAGONET-NIDS')}
        >
          NIDS
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'mx-5 my-4 lg:my-2 nav-link hight-light'
              : 'mx-5 my-4 lg:my-2 nav-link '
          }
          rel='nofollow'
          to='dip'
          onClick={() => handleLinkClick('FAGONET-DIP')}
        >
          DIP
        </NavLink>
      </nav>
      <button
        className='btn-nav-solutions mx-auto my-14 w-1/3 flex justify-center items-center text-blue font-bold lg:hidden'
        onClick={() => setShowNav((prevShow) => !prevShow)}
      >
        {t('SOLUTIONS')}
      </button>
    </section>
  );
}

export default NavSolutions;

import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import Spinner from '../../components/spinner/index';
import folderImg from '../../assets/images/solutions/folder.png';
import wallImg from '../../assets/images/solutions/wall.png';
import preventionImg from '../../assets/images/solutions/prevention.png';
import searchImg from '../../assets/images/solutions/search.png';
import controlImg from '../../assets/images/solutions/control.png';
import dataImg from '../../assets/images/solutions/data.png';
import guardImg from '../../assets/images/solutions/guard.png';

function SolutionsList() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const [hoverSolutions, setHoverSolutions] = useState(null);
  const [sortMethod, setSortMethod] = useState('name');
  const [sortedSolutions, setSortedSolutions] = useState([]);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const solutions = [
    {
      url: 'siem',
      imgUrl: folderImg,
      title: t('intro.siem'),
    },
    {
      url: 'waf',
      imgUrl: wallImg,
      title: t('intro.waf'),
    },
    {
      url: 'nips',
      imgUrl: preventionImg,
      title: t('intro.nips'),
    },
    {
      url: 'edr',
      imgUrl: searchImg,
      title: t('intro.edr'),
    },
    {
      url: 'nac',
      imgUrl: controlImg,
      title: t('intro.nac'),
    },
    {
      url: 'nids',
      imgUrl: guardImg,
      title: t('intro.nids'),
    },
    {
      url: 'dip',
      imgUrl: dataImg,
      title: t('intro.dip'),
    },
    {
      url: 'swl3',
      imgUrl: guardImg,
      title: t('intro.swl3'),
    },
    {
      url: 'dbfw',
      imgUrl: dataImg,
      title: t('intro.dbfw'),
    },
  ];

  const sortSolutions = (method) => {
    let sortedArray;
    if (method === 'name') {
      // Sắp xếp theo chữ cái đầu tiên từ A-Z
      sortedArray = [...solutions].sort((a, b) => a.title[0].localeCompare(b.title[0]));
    } else if (method === 'asc') {
      // Sắp xếp theo chữ cái đầu tiên từ A-Z
      sortedArray = [...solutions].sort((a, b) => a.title[0].localeCompare(b.title[0]));
    } else if (method === 'desc') {
      // Sắp xếp theo chữ cái đầu tiên từ Z-A
      sortedArray = [...solutions].sort((a, b) => b.title[0].localeCompare(a.title[0]));
    }
    setSortedSolutions(sortedArray);
  };
  

  useEffect(() => {
    sortSolutions(sortMethod);
  }, [sortMethod]);

  const handleSort = (method) => {
    setSortMethod(method);
    setIsOpen(false); // Close the dropdown after selecting an option
  };

  const solution = sortedSolutions.map((solution, index) => {
    return (
      <Link key={index} to={`${solution.url}`}>
        <div
          className={`relative Scale ${
            hoverSolutions === index ? 'hoverSolutions' : ''
          }`}
          onMouseOver={() => setHoverSolutions(index)}
          onMouseOut={() => setHoverSolutions(null)}
          onTouchStart={() => setHoverSolutions(index)}
          onTouchEnd={() => setHoverSolutions(null)}
        >
          <LazyLoad
            className='solutions-img-intro'
            offset={100}
            once
            placeholder={<Spinner />}
          >
            <img
              className='w-[36px] h-[36px] Scale'
              src={solution.imgUrl}
              alt={`${solution.url}-img`}
            />
          </LazyLoad>
          <h4 className='text-center text-[20px] leading-[23.48px] font-bold'>
            {solution.title}
          </h4>
        </div>
      </Link>
    );
  });

  return (
    <main className='w-4/5 m-auto'>
      <h3 className='my-8 lg:my-0 xl:text-[80px] lg:text-[64px] md:text-[52px] text-[32px] text-center md:tracking-[16px] tracking-[12px] font-bold uppercase Scale'>
        {t('our-solutions')}
      </h3>
      <p className='my-4 lg:text-[20px] text-[18px] text-white text-center Scale'>
        {t('solutions-intro')}
      </p>
      
      {/* DROP DOWN */}
      <div className="relative inline-block text-left my-4 w-full flex justify-end" ref={dropdownRef}>
        <div>
          <button
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-darkBlue text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            onClick={toggleDropdown}
          >
            Sắp xếp
            <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <div
          className={`origin-top-right absolute right-0 mt-12 w-56 rounded-md shadow-lg bg-darkBlue border-2 border-sky-500 ring-1 ring-black ring-opacity-5 focus:outline-none ${
            isOpen ? 'block' : 'hidden'
          }`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <a 
              href="#" 
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" 
              role="menuitem" 
              onClick={() => handleSort('asc')}
            >
              Từ A - Z
            </a>
            <a 
              href="#" 
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" 
              role="menuitem" 
              onClick={() => handleSort('desc')}
            >
              Từ Z - A
            </a>
          </div>
        </div>
      </div>

      <section className='solutions-page-list py-32 mt-20'>{solution}</section>
    </main>
  );
}

export default SolutionsList;

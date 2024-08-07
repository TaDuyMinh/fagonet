import { useState } from 'react';
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
  const { t } = useTranslation();
  const [hoverSolutions, setHoverSolutions] = useState(null);
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
  const solution = solutions.map((solution, index) => {
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
      <section className='solutions-page-list py-32'>{solution}</section>
      
    </main>
  );
}
export default SolutionsList;

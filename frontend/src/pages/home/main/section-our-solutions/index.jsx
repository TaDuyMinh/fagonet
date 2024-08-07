import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { SolutionsContext } from '../../../solutions/hooks/solutions-context';

import vectorImg from '../../../../assets/images/home/Vector.png';
import vectorHoverImg from '../../../../assets/images/home/VectorHover.png';
import earthImg from '../../../../assets/images/home/Thumbsup1.png';
import LazyLoad from 'react-lazyload';
import Spinner from '../../../../components/spinner';

function OurSolutions() {
  const { t } = useTranslation();
  const [hoverSolutions, setHoverSolutions] = useState(null);
  const { dataSolutions } = useContext(SolutionsContext); // Use the context data

  const handleClick = () => {
    window.scroll(0, 0);
  };

  return (
    <section className='home-page-solutions container w-4/5 m-auto pb-32 flex xl:flex-row-reverse flex-col justify-between items-center'>
      <div className='xl:w-1/2'>
        <h3 className='h-[100px] m-auto xl:text-[72px] lg:text-[64px] md:text-[52px] text-[32px] text-center md:tracking-[16px] tracking-[12px] font-bold uppercase'>
          {t('SOLUTIONS')}
        </h3>
        <p className='md:w-[510px] w-4/5 sm:h-[69px] mx-auto my-4 md:text-[20px] text-[18px] leading-[23.48px] capitalize'>
          {t('solutions-intro')}
        </p>
        <LazyLoad offset={100} once placeholder={<Spinner />}>
          <img className='m-auto Scale' src={earthImg} alt='earth-img' />
        </LazyLoad>
      </div>
      <div className='home-solutions xl:w-1/2 text-black'>
        {dataSolutions.map((solution) => {
          return (
            <Link
              key={solution.id}
              className={`relative ${
                hoverSolutions === solution.id
                  ? 'hoverSolutions'
                  : 'notHoverSolutions'
              }`}
              onMouseOver={() => setHoverSolutions(solution.id)}
              onMouseOut={() => setHoverSolutions(null)}
              onTouchStart={() => setHoverSolutions(solution.id)}
              onTouchEnd={() => setHoverSolutions(null)}
              onClick={handleClick}
              to={{
                pathname: `/solutions/${solution.id}`,
              }}
            >
              <LazyLoad className='h-1/2' offset={100} once>
                <img
                  className='w-[40px] mr-auto Scale'
                  src={
                    hoverSolutions === solution.id ? solution.intro_image : solution.intro_image
                  }
                  alt='vector-img'
                />
              </LazyLoad>
              <h4 className='h-1/2 my-2 text-start'>{solution.intro}</h4>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default OurSolutions;

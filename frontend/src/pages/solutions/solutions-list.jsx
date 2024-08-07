import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import { SolutionsContext } from './hooks/solutions-context'; // Import your SolutionsContext
import Spinner from '../../components/spinner/index';

function SolutionsList() {
  const { t } = useTranslation();
  const { dataSolutions } = useContext(SolutionsContext); // Use the context
  const [hoverSolutions, setHoverSolutions] = useState(null);

  // Check if dataSolutions is empty or undefined
  if (!dataSolutions || dataSolutions.length === 0) {
    return <Spinner />; // Show spinner if no data
  }

  const solutionElements = dataSolutions.map((solution) => (
    <Link key={solution.id} to={`http://localhost:5173/solutions/${solution.id}`}>
      <div
        className={`relative Scale ${hoverSolutions === solution.id ? 'hoverSolutions' : ''}`}
        onMouseOver={() => setHoverSolutions(solution.id)}
        onMouseOut={() => setHoverSolutions(null)}
        onTouchStart={() => setHoverSolutions(solution.id)}
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
            src={solution.intro_image} 
            alt={`${solution.title}-img`}
          />
        </LazyLoad>
        <h4 className='text-center text-[20px] leading-[23.48px] font-bold'>
          {solution.intro}
        </h4>
      </div>
    </Link>
  ));

  return (
    <main className='w-4/5 m-auto'>
      <h3 className='my-8 lg:my-0 xl:text-[80px] lg:text-[64px] md:text-[52px] text-[32px] text-center md:tracking-[16px] tracking-[12px] font-bold uppercase Scale'>
        {t('our-solutions')}
      </h3>
      <p className='my-4 lg:text-[20px] text-[18px] text-white text-center Scale'>
        {t('solutions-intro')}
      </p>
      <section className='solutions-page-list py-32'>{solutionElements}</section>
    </main>
  );
}

export default SolutionsList;

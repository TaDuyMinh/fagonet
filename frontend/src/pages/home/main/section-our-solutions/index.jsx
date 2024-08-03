import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import vectorImg from '../../../../assets/images/home/Vector.png';
import vectorHoverImg from '../../../../assets/images/home/VectorHover.png';
import earthImg from '../../../../assets/images/home/Thumbsup1.png';
import LazyLoad from 'react-lazyload';
import Spinner from '../../../../components/spinner';
function OurSolutions() {
  const { t } = useTranslation();
  const [hoverSolutions, setHoverSolutions] = useState(null);
  const introSolutions = [
    {
      id: 1,
      url: 'siem',
      content: t('intro.siem'),
    },
    {
      id: 2,
      url: 'waf',
      content: t('intro.waf'),
    },
    {
      id: 3,
      url: 'nips',
      content: t('intro.nips'),
    },
    {
      id: 4,
      url: 'edr',
      content: t('intro.edr'),
    },
    {
      id: 5,
      url: 'nac',
      content: t('intro.nac'),
    },
    {
      id: 6,
      url: 'nids',
      content: t('intro.nids'),
    },
    {
      id: 7,
      url: 'dip',
      content: t('intro.dip'),
    },
    {
      id: 8,
      url: 'swl3',
      content: t('intro.swl3'),
    },
    {
      id: 9,
      url: 'dbfw',
      content: t('intro.dbfw'),
    },
  ];
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
        {introSolutions.map((solution) => {
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
                pathname: `/solutions/${solution.url}`,
              }}
            >
              <LazyLoad className='h-1/2' offset={100} once>
                <img
                  className='w-[40px] mr-auto Scale'
                  src={
                    hoverSolutions === solution.id ? vectorHoverImg : vectorImg
                  }
                  alt='vector-img'
                />
              </LazyLoad>
              <h4 className='h-1/2 my-2 text-start'>{solution.content}</h4>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default OurSolutions;
// import { useState, useEffect } from 'react';
// import { useTranslation } from 'react-i18next';
// import { Link } from 'react-router-dom';
// import vectorImg from '../../../../assets/images/home/Vector.png';
// import vectorHoverImg from '../../../../assets/images/home/VectorHover.png';
// import earthImg from '../../../../assets/images/home/Thumbsup1.png';
// import LazyLoad from 'react-lazyload';
// import Spinner from '../../../../components/spinner';
// import axios from 'axios';

// function OurSolutions() {
//   const { t } = useTranslation();
//   const [hoverSolutions, setHoverSolutions] = useState(null);
//   const [solutions, setSolutions] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchSolutions() {
//       try {
//         const response = await axios.get('http://127.0.0.1:8000/api/solutions/');
//         setSolutions(response.data);
//       } catch (error) {
//         setError('There was an error fetching the solutions!');
//         console.error('Error fetching solutions:', error);
//       }
//     }

//     fetchSolutions();
//   }, []);

//   const handleClick = () => {
//     window.scroll(0, 0);
//   };

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <section className='home-page-solutions container w-4/5 m-auto pb-32 flex xl:flex-row-reverse flex-col justify-between items-center'>
//       <div className='xl:w-1/2'>
//         <h3 className='h-[100px] m-auto xl:text-[72px] lg:text-[64px] md:text-[52px] text-[32px] text-center md:tracking-[16px] tracking-[12px] font-bold uppercase'>
//           {t('SOLUTIONS')}
//         </h3>
//         <p className='md:w-[510px] w-4/5 sm:h-[69px] mx-auto my-4 md:text-[20px] text-[18px] leading-[23.48px] capitalize'>
//           {t('solutions-intro')}
//         </p>
//         <LazyLoad offset={100} once placeholder={<Spinner />}>
//           <img className='m-auto Scale' src={earthImg} alt='earth-img' />
//         </LazyLoad>
//       </div>
//       <div className='home-solutions xl:w-1/2 text-black'>
//         {solutions.map((solution) => (
//           <Link
//             key={solution.id}
//             className={`relative ${
//               hoverSolutions === solution.id ? 'hoverSolutions' : 'notHoverSolutions'
//             }`}
//             onMouseOver={() => setHoverSolutions(solution.id)}
//             onMouseOut={() => setHoverSolutions(null)}
//             onTouchStart={() => setHoverSolutions(solution.id)}
//             onTouchEnd={() => setHoverSolutions(null)}
//             onClick={handleClick}
//             to={`/solutions/${solution.url}`}
//           >
//             <LazyLoad className='h-1/2' offset={100} once>
//               <img
//                 className='w-[40px] mr-auto Scale'
//                 src={
//                   hoverSolutions === solution.id
//                     ? vectorHoverImg
//                     : solution.intro_image || vectorImg // Use the intro image from the database or fallback to vectorImg
//                 }
//                 alt='vector-img'
//               />
//             </LazyLoad>
//             <h4 className='h-1/2 my-2 text-start'>{solution.title}</h4>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default OurSolutions;

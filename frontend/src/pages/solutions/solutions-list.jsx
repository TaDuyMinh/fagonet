// import { useState, useEffect } from 'react';
// import { useTranslation } from 'react-i18next';
// import { Link } from 'react-router-dom';
// import LazyLoad from 'react-lazyload';
// import axios from 'axios';
// import Spinner from '../../components/spinner/index';
// import folderImg from '../../assets/images/solutions/folder.png';
// import wallImg from '../../assets/images/solutions/wall.png';
// import preventionImg from '../../assets/images/solutions/prevention.png';
// import searchImg from '../../assets/images/solutions/search.png';
// import controlImg from '../../assets/images/solutions/control.png';
// import dataImg from '../../assets/images/solutions/data.png';
// import guardImg from '../../assets/images/solutions/guard.png';

// function SolutionsList() {
//   const { t } = useTranslation();
//   const [solutions, setSolutions] = useState([]);
//   const [hoverSolutions, setHoverSolutions] = useState(null);
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

//   // Static image mapping
//   const imageMap = {
//     'siem': folderImg,
//     'waf': wallImg,
//     'nips': preventionImg,
//     'edr': searchImg,
//     'nac': controlImg,
//     'nids': guardImg,
//     'dip': dataImg,
//     'swl3': guardImg,
//     'dbfw': dataImg,
//   };

//   const solutionElements = solutions.map((solution, index) => {
//     return (
//       <Link key={solution.id} to={`${solution.url}`}>
//         <div
//           className={`relative Scale ${hoverSolutions === index ? 'hoverSolutions' : ''}`}
//           onMouseOver={() => setHoverSolutions(index)}
//           onMouseOut={() => setHoverSolutions(null)}
//           onTouchStart={() => setHoverSolutions(index)}
//           onTouchEnd={() => setHoverSolutions(null)}
//         >
//           <LazyLoad
//             className='solutions-img-intro'
//             offset={100}
//             once
//             placeholder={<Spinner />}
//           >
//             <img
//               className='w-[36px] h-[36px] Scale'
//               src={imageMap[solution.url]} // Use static image mapping
//               alt={`${solution.url}-img`}
//             />
//           </LazyLoad>
//           <h4 className='text-center text-[20px] leading-[23.48px] font-bold'>
//             {solution.title}
//           </h4>
//         </div>
//       </Link>
//     );
//   });

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <main className='w-4/5 m-auto'>
//       <h3 className='my-8 lg:my-0 xl:text-[80px] lg:text-[64px] md:text-[52px] text-[32px] text-center md:tracking-[16px] tracking-[12px] font-bold uppercase Scale'>
//         {t('our-solutions')}
//       </h3>
//       <p className='my-4 lg:text-[20px] text-[18px] text-white text-center Scale'>
//         {t('solutions-intro')}
//       </p>
//       <section className='solutions-page-list py-32'>{solutionElements}</section>
//     </main>
//   );
// }

// export default SolutionsList;
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
          {solution.title}
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

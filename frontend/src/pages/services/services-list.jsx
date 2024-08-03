// import { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import LazyLoad from 'react-lazyload';
// import { ServicesContext } from './hooks/services-context';
// import introServicesImg from '../../assets/images/services/Icon04-2.png';
// import Spinner from '../../components/spinner';z
// function ServicesList() {
//   const { t } = useTranslation();
//   const { dataServices } = useContext(ServicesContext);
//   const [hoverServices, setHoverServices] = useState(null);
//   const lazyLoadOptions = {
//     offset: 100,
//     once: true,
//     placeholder: <Spinner />,
//   };
//   return (
//     <main className='w-4/5 mx-auto my-16 flex flex-col items-center justify-between lg:flex-row'>
//       <LazyLoad className='lg:w-1/2' {...lazyLoadOptions}>
//         <img
//           className='m-auto Scale'
//           src={introServicesImg}
//           alt='intro-services-img'
//         />
//       </LazyLoad>
//       <div className='lg:w-1/2 services-list'>
//         {dataServices.map((service, index) => {
//           return (
//             <Link
//               to={`${service.link}`}
//               key={index}
//               className={`relative bg-boldBlue Scale ${
//                 hoverServices === index ? 'hoverServices' : ''
//               }`}
//               onMouseOver={() => setHoverServices(index)}
//               onMouseOut={() => setHoverServices(null)}
//               onTouchStart={() => setHoverServices(index)}
//               onTouchEnd={() => setHoverServices(null)}
//             >
//               <LazyLoad className='w-[60px] h-[60px]' {...lazyLoadOptions}>
//                 <img
//                   src={
//                     hoverServices === index
//                       ? service.introImg
//                       : service.hoverIntroImg
//                   }
//                   alt='secureImg'
//                 />
//               </LazyLoad>
//               <h4 className='my-2 text-start text-[20px] leading-[23.48px] font-bold'>
//                 {service.intro}
//               </h4>
//               <p className='text-start leading-[18.78px]'>
//                 {t(`services-page.firstWord${index + 1}`)}
//               </p>
//             </Link>
//           );
//         })}
//       </div>
//     </main>
//   );
// }
// export default ServicesList;

import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LazyLoad from 'react-lazyload';
import axios from 'axios';
import { ServicesContext } from './hooks/services-context';
import introServicesImg from '../../assets/images/services/Icon04-2.png';
import Spinner from '../../components/spinner';

function ServicesList() {
  const { t } = useTranslation();
  // const { dataServices } = useContext(ServicesContext); // No longer needed
  const [services, setServices] = useState([]);
  const [hoverServices, setHoverServices] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the backend API
    axios.get('http://127.0.0.1:8000/api/services/')
      .then(response => {
        setServices(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error fetching the services!', error);
        setLoading(false);
      });
  }, []);

  const lazyLoadOptions = {
    offset: 100,
    once: true,
    placeholder: <Spinner />,
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <main className='w-4/5 mx-auto my-16 flex flex-col items-center justify-between lg:flex-row'>
      <LazyLoad className='lg:w-1/2' {...lazyLoadOptions}>
        <img
          className='m-auto Scale'
          src={introServicesImg}
          alt='intro-services-img'
        />
      </LazyLoad>
      <div className='lg:w-1/2 services-list'>
        {services.map((service, index) => (
          <Link
            to={`${service.link}`}
            key={service.id}
            className={`relative bg-boldBlue Scale ${
              hoverServices === index ? 'hoverServices' : ''
            }`}
            onMouseOver={() => setHoverServices(index)}
            onMouseOut={() => setHoverServices(null)}
            onTouchStart={() => setHoverServices(index)}
            onTouchEnd={() => setHoverServices(null)}
          >
            <LazyLoad className='w-[60px] h-[60px]' {...lazyLoadOptions}>
              <img
                src={
                  hoverServices === index
                    ? service.intro_image
                    : service.intro_image
                }
                alt={service.title}
              />
            </LazyLoad>
            <h4 className='my-2 text-start text-[20px] leading-[23.48px] font-bold'>
              {service.title}
            </h4>
            <p className='text-start leading-[18.78px]'>
              {service.intro}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default ServicesList;


// import { useParams } from 'react-router-dom';
// import { useContext } from 'react';
// import LazyLoad from 'react-lazyload';
// import { ServicesContext } from './hooks/services-context';
// import NavServices from './nav-services';
// import serviceDetailImg from '../../assets/images/services/service-detail-img.png';
// // import wireFrameImg from '../../assets/images/services/WireframeVector.png';
// import line98 from '../../assets/images/services/Line98.png';
// import { useTranslation } from 'react-i18next';
// function ServiceDetail() {
//   const { t } = useTranslation();
//   const { link } = useParams();
//   const { dataServices } = useContext(ServicesContext);
//   const serviceDetail = dataServices.find((service) => service.link === link);
//   const lazyLoadOptions = {
//     offset: 100,
//     once: true,
//   };
//   return (
//     <section className='w-4/5 mx-auto mt-8 mb-32'>
//       <h3 className='mx-auto my-8 xl:text-[40px] md:text-[36px] text-[32px] text-center font-bold tracking-[18px] leading-[46.96px] uppercase Scale'>
//         {serviceDetail.intro}
//       </h3>
//       <div className='services-page-item-detail my-8 flex justify-between gap-[40px]'>
//         <div className='xl:w-1/3 w-1/2'>
//           <NavServices />
//         </div>
//         <div className='xl:w-2/3 w-1/2 service-detail Up'>
//           <img
//             className='w-full Scale'
//             src={serviceDetailImg}
//             alt='service-detail-img'
//           />
//           <div>
//             <h4 className='my-4 xl:text-[32px] md:text-[28px] text-[24px] font-bold'>
//               {serviceDetail.intro}
//             </h4>
//             <p className='lg:text-[20px] text-[18px]'>
//               {serviceDetail.firstWord}
//             </p>
//             <h5 className='my-4 lg:text-[24px] text-[20px] font-bold'>
//               {serviceDetail.title}
//             </h5>
//             <p className='lg:text-[20px] text-[18px]'>{serviceDetail.desc}</p>
//             <div className='my-4 service-detail-list'>
//               {serviceDetail.content.map((content, index) => {
//                 return (
//                   <div className='flex items-center' key={index}>
//                     <i className='fa fa-check-circle'></i>
//                     <p className='mx-4'>{content.list}</p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className='m-16'>
//         <h3 className='mx-auto my-8 xl:text-[40px] md:text-[36px] text-[32px] text-center font-bold tracking-[18px] leading-[46.96px] uppercase Scale'>
//           {t('services-page.endTitle')}
//         </h3>
//         <p className='xl:w-[651px] mx-auto my-8 text-white lg:text-[20px] text-[18px] text-center Scale'>
//           {t('services-page.end-title-desc')}
//         </p>
//       </div>
//       <div>
//         {serviceDetail.step.map((content, index) => {
//           return (
//             <div
//               className='flex flex-col items-center text-center text-[20px]'
//               key={index}
//             >
//               <LazyLoad className='my-8' {...lazyLoadOptions}>
//                 <img
//                   className='Scale line-98-img'
//                   src={line98}
//                   alt='line-98-img'
//                 />
//               </LazyLoad>
//               <LazyLoad
//                 {...lazyLoadOptions}
//                 className='w-[120px] h-[120px] m-auto flex justify-center items-center img-process-list'
//               >
//                 <img
//                   className='w-[60px] h-[60px] m-auto Scale'
//                   src={content.imgUrl}
//                   alt={content.title}
//                 />
//               </LazyLoad>
//               <h4 className='my-8 xl:text-[32px] lg:text-[24px] md:text-[20px] font-bold'>
//                 0{index + 1}
//               </h4>
//               <h5 className='xl:w-[700px] m-auto leading-[56.35px] xl:text-[48px] lg:text-[36px] md:text-[32px] text-[24px] text-blue font-bold'>
//                 {content.title}
//               </h5>
//               <p className='xl:w-[818px] mx-auto my-8 leading-[30px] md:text-[20px] text-[18px]'>
//                 {content.content}
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }
// export default ServiceDetail;

import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import LazyLoad from 'react-lazyload';
import { ServicesContext } from './hooks/services-context';
import NavServices from './nav-services';
import serviceDetailImg from '../../assets/images/services/service-detail-img.png';
import line98 from '../../assets/images/services/Line98.png';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

function ServiceDetail() {
    const { t } = useTranslation();
    const { id } = useParams();
    const { dataServices } = useContext(ServicesContext);
    const [serviceDetail, setServiceDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchServiceDetail = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/services/${id}/`);
                setServiceDetail(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchServiceDetail();
    }, [id]);
    const lazyLoadOptions = {
      offset: 100,
      once: true,
    };
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading service details.</p>;
    if (!serviceDetail) return <p>No service details found.</p>; // Handle case if no service detail is found

    return (
        <section className='w-4/5 mx-auto mt-8 mb-32'>
            <h3 className='mx-auto my-8 xl:text-[40px] md:text-[36px] text-[32px] text-center font-bold tracking-[18px] leading-[46.96px] uppercase Scale'>
                {serviceDetail.title}
            </h3>
            <div className='services-page-item-detail my-8 flex justify-between gap-[40px]'>
                <div className='xl:w-1/3 w-1/2'>
                    <NavServices />
                </div>
                <div className='xl:w-2/3 w-1/2 service-detail Up'>
                    <img
                        className='w-full Scale'
                        src={serviceDetailImg}
                        alt='service-detail-img'
                    />
                    <div>
                        <h4 className='my-4 xl:text-[32px] md:text-[28px] text-[24px] font-bold'>
                            {serviceDetail.title}
                        </h4>
                        <p className='lg:text-[20px] text-[18px]'>
                            {serviceDetail.firstword}
                        </p>
                        <h5 className='my-4 lg:text-[24px] text-[20px] font-bold'>
                            {serviceDetail.intro}
                        </h5>
                        <p className='lg:text-[20px] text-[18px]'>{serviceDetail.description}</p>
                        <div className='my-4 service-detail-list'>
                            {serviceDetail.competitive_advantages_list.map((content, index) => (
                                <div className='flex items-center' key={index}>
                                    <i className='fa fa-check-circle'></i>
                                    <p className='mx-4'>{content.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='m-16'>
                <h3 className='mx-auto my-8 xl:text-[40px] md:text-[36px] text-[32px] text-center font-bold tracking-[18px] leading-[46.96px] uppercase Scale'>
                    {t('services-page.endTitle')}
                </h3>
                <p className='xl:w-[651px] mx-auto my-8 text-white lg:text-[20px] text-[18px] text-center Scale'>
                    {t('services-page.end-title-desc')}
                </p>
            </div>
            <div>
                {serviceDetail.service_deployment_steps.map((content, index) => (
                    <div className='flex flex-col items-center text-center text-[20px]' key={index}>
                        <LazyLoad className='my-8' {...lazyLoadOptions}>
                            <img className='Scale line-98-img' src={line98} alt='line-98-img' />
                        </LazyLoad>
                        <LazyLoad {...lazyLoadOptions} className='w-[120px] h-[120px] m-auto flex justify-center items-center img-process-list'>
                            <img className='w-[60px] h-[60px] m-auto Scale' src={content.image} alt={content.title} />
                        </LazyLoad>
                        <h4 className='my-8 xl:text-[32px] lg:text-[24px] md:text-[20px] font-bold'>
                            0{index + 1}
                        </h4>
                        <h5 className='xl:w-[700px] m-auto leading-[56.35px] xl:text-[48px] lg:text-[36px] md:text-[32px] text-[24px] text-blue font-bold'>
                            {content.title}
                        </h5>
                        <p className='xl:w-[818px] mx-auto my-8 leading-[30px] md:text-[20px] text-[18px]'>
                            {content.content}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ServiceDetail;

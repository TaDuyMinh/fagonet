import { useTranslation } from 'react-i18next';
import LazyLoad from 'react-lazyload';
import wireFrameImg from '../../assets/images/services/WireframeVector.png';
import line98 from '../../assets/images/services/Line98.png';
function ImplementProcess() {
  const { t } = useTranslation();
  const lazyLoadOptions = {
    offset: 100,
    once: true,
  };
  const stepContent = [
    {
      title: t('services-page.step1'),
      urlImg: carriedColor,
      content: t('services-page.step-content1'),
    },
    {
      title: t('services-page.step2'),
      urlImg: receivedColorImg,
      content: t('services-page.step-content2'),
    },
    {
      title: t('services-page.step3'),
      urlImg: processColorImg,
      content: t('services-page.step-content3'),
    },
    {
      title: t('services-page.step4'),
      urlImg: improveColorImg,
      content: t('services-page.step-content4'),
    },
    {
      title: t('services-page.step5'),
      urlImg: managementColor,
      content: t('services-page.step-content5'),
    },
  ];

  return (
    <section>
      <h3 className='my-8 lg:my-0 xl:text-[80px] lg:text-[64px] md:text-[52px] text-[24px] text-center md:tracking-[16px] sm:tracking-[12px] tracking-[8px] font-bold uppercase Scale'>
        {t('services-page.endTitle')}
      </h3>
      <p className='xl:w-[651px] mx-auto my-8 text-white lg:text-[20px] text-[18px] text-center Scale'>
        {t('services-page.end-title-desc')}
      </p>
      {stepContent.map((content, index) => {
        return (
          <div
            className='flex flex-col items-center text-center text-[20px]'
            key={index}
          >
            <LazyLoad className='my-8' {...lazyLoadOptions}>
              <img
                className='Scale line-98-img'
                src={line98}
                alt='line-98-img'
              />
            </LazyLoad>
            <LazyLoad
              {...lazyLoadOptions}
              className='w-[120px] h-[120px] m-auto flex justify-center items-center img-process-list'
            >
              <img
                className='w-[60px] h-[60px] m-auto Scale'
                src={content.urlImg}
                alt={content.title}
              />
            </LazyLoad>
            <h4 className='my-8 xl:text-[32px] lg:text-[24px] md:text-[20px] font-bold'>
              0{index + 1}
            </h4>
            <h5 className='xl:w-[700px] m-auto leading-[56.35px] xl:text-[48px] lg:text-[36px] md:text-[32px] text-[24px] text-blue font-bold'>
              {content.title}
            </h5>
            <p className='xl:w-[400px] mx-auto my-8 leading-[30px] md:text-[20px] text-[18px]'>
              {content.content}
            </p>
          </div>
        );
      })}
      <img
        className='Scale wire-frame-img-1'
        src={wireFrameImg}
        alt='wire-frame-img'
      />
      <img
        className='Scale wire-frame-img-2'
        src={wireFrameImg}
        alt='wire-frame-img'
      />
    </section>
  );
}

export default ImplementProcess;

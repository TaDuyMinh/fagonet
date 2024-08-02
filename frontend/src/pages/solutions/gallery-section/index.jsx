import LazyLoad from 'react-lazyload';
import img1 from '../../../assets/images/gallery/header-1.e29951c6bf7cdf15c303.png';
import img2 from '../../../assets/images/gallery/header-2.15fda7c06337e76eaeb0.png';
import img3 from '../../../assets/images/gallery/header-6.987988888e628d2df2fd.png';
import img4 from '../../../assets/images/gallery/header-7.c4c8a78b8f66aa9524dd.png';
import { useTranslation } from 'react-i18next';
function Gallery() {
  const { t } = useTranslation();
  const lazyLoadOptions = {
    offset: 100,
    once: true,
  };
  return (
    <section className='container m-auto rounded-2xl Up'>
      <h3 className='mx-auto my-8 xl:text-[40px] md:text-[36px] text-[32px] text-center font-bold tracking-[18px] leading-[46.96px] uppercase Scale'>
        {t('gallery')}
      </h3>
      <div className='flex-col lg:flex-row flex flex-wrap items-center p-8'>
        <LazyLoad
          className='gallery w-4/5 m-auto lg:w-1/2 lg:m-0 px-4 py-8 lg:p-8'
          {...lazyLoadOptions}
        >
          <img className='Scale' src={img1} alt={img1} />
        </LazyLoad>
        <LazyLoad
          className='gallery  w-4/5 m-auto lg:w-1/2 lg:m-0 px-4 py-8 lg:p-8'
          {...lazyLoadOptions}
        >
          <img className='Scale' src={img2} alt={img2} />
        </LazyLoad>
        <LazyLoad
          className='gallery  w-4/5 m-auto lg:w-1/2 lg:m-0 px-4 py-8 lg:p-8'
          {...lazyLoadOptions}
        >
          <img className='Scale' src={img3} alt={img3} />
        </LazyLoad>
        <LazyLoad
          className='gallery  w-4/5 m-auto lg:w-1/2 lg:m-0 px-4 py-8 lg:p-8'
          {...lazyLoadOptions}
        >
          <img className='Scale' src={img4} alt={img4} />
        </LazyLoad>
      </div>
    </section>
  );
}

export default Gallery;

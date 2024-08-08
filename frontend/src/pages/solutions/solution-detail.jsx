import { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import DownLoadDataSheet from './data-sheet/data-sheet';
import Page404 from '../404/index';
import Gallery from './gallery-section/index';
import defaultImg from '../../assets/images/solutions/default-img.png';
import backImg from '../../assets/images/solutions/back.png';
import { SolutionsContext } from './hooks/solutions-context';
import ContactForm from '../contact/contact-form';

function SolutionDetail() {
  const { id } = useParams(); // Assuming the route parameter is 'id'
  const { dataSolutions } = useContext(SolutionsContext); // Use the context
  const [solutionDetail, setSolutionDetail] = useState(null);

  useEffect(() => {
    const solution = dataSolutions.find((solution) => solution.id === parseInt(id));
    setSolutionDetail(solution);
  }, [id, dataSolutions]);

  if (!solutionDetail) return <Page404 />;

  return (
    <main className='solutions-page-detail py-16'>
      <div className='w-4/5 m-auto'>
        <Link to='/solutions'>
          <img className='Scale' src={backImg} alt='back-img' />
        </Link>
      </div>
      <h3 className='mx-auto my-8 xl:text-[40px] md:text-[36px] text-[32px] text-center font-bold tracking-[18px] leading-[46.96px] uppercase Scale'>
        {solutionDetail.title || 'No Title'}
      </h3>
      <p className='my-4 lg:text-[20px] text-[18px] text-white text-center Scale'>
        {solutionDetail.intro || 'No Intro'}
      </p>
      {solutionDetail.intro_image && (
        <img
          className='w-[100px] h-[100px] mx-auto'
          src={solutionDetail.intro_image}
          alt={`${solutionDetail.title}-intro-img`}
        />
      )}
      <DownLoadDataSheet
        filePath={solutionDetail.datafile || ''}
        fileName={solutionDetail.title +" data" || 'No File'}
      />
      <section className='my-16 Up'>
        {solutionDetail.details && solutionDetail.details.length > 0 ? (
          solutionDetail.details.map((content, index) => (
            <div className='solutions-page-item-detail' key={index}>
              <LazyLoad className='w-1/3 flex justify-center items-center'>
                <img
                  className='m-auto Scale'
                  src={content.image || defaultImg} // Use dynamic image URL
                  alt={content.title || 'Detail Image'}
                />
              </LazyLoad>
              <div className='w-2/3'>
                <div className='w-4/5 m-auto'>
                  <h4 className='xl:text-[28px] lg:text-[24px] md:text-[20px] text-blue'>
                    {content.title || 'No Title'}
                  </h4>
                  <p className='my-4'>{content.content || 'No Content'}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No details available.</p>
        )}
      </section>
      <Gallery solutionId={id} />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ContactForm solutionId={solutionDetail.id} />
      </div>
    </main>
  );
}

export default SolutionDetail;

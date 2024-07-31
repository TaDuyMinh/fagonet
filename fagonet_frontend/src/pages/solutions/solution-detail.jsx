import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { SolutionsContext } from './hooks/solutions-context';
import LazyLoad from 'react-lazyload';
import DownLoadDataSheet from './data-sheet/data-sheet';
import filePath from './data-sheet/Fortinet_Product_Matrix.pdf';
import Page404 from '../404/index';
import Gallery from './gallery-section/index';
import defaultImg from '../../assets/images/solutions/default-img.png';
import backImg from '../../assets/images/solutions/back.png';
function SolutionDetail() {
  const fileName = 'Fortinet_Product_Matrix.pdf';
  const { link } = useParams();
  const { dataSolutions } = useContext(SolutionsContext);
  const solutionDetail = dataSolutions.find(
    (solution) => solution.link === link
  );
  return solutionDetail ? (
    <main className='solutions-page-detail py-16'>
      <div className='w-4/5 m-auto'>
        <Link to='..'>
          <img className='Scale' src={backImg} alt='back-img' />
        </Link>
      </div>
      <h3 className='mx-auto my-8 xl:text-[40px] md:text-[36px] text-[32px] text-center font-bold tracking-[18px] leading-[46.96px] uppercase Scale'>
        {solutionDetail.title}
      </h3>
      <p className='my-4 lg:text-[20px] text-[18px] text-white text-center Scale'>
        {solutionDetail.intro}
      </p>
      <DownLoadDataSheet filePath={filePath} fileName={fileName} />
      <section className='my-16 Up'>
        {solutionDetail.details.map((content, index) => {
          return (
            <div className='solutions-page-item-detail' key={index}>
              <LazyLoad className='w-1/3 flex justify-center items-center'>
                <img
                  className='m-auto Scale'
                  src={content?.imgUrl || defaultImg}
                  alt=''
                />
              </LazyLoad>
              <div className='w-2/3 '>
                <div className='w-4/5 m-auto'>
                  <h4 className='xl:text-[28px] lg:text-[24px] md:text-[20px] text-blue'>
                    {content.step}
                  </h4>
                  <ul className='my-4 list-disc'>
                    {content.content.map((list, index) => {
                      return <li key={index}>{list.list}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <Gallery />
    </main>
  ) : (
    <Page404 />
  );
}
export default SolutionDetail;

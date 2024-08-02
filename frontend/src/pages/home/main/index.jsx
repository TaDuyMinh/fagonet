import LazyLoad from 'react-lazyload';
import OurServices from './section-our-services';
import OurSolutions from './section-our-solutions';
import Spinner from '../../../components/spinner/index';
function Main() {
  const lazyLoadOptions = {
    offset: 0,
    once: true,
    placeholder: <Spinner />,
  };
  return (
    <main id='our-services'>
      <LazyLoad className='pb-32' {...lazyLoadOptions}>
        <OurServices />
      </LazyLoad>
      <LazyLoad className='pb-32' {...lazyLoadOptions}>
        <OurSolutions />
      </LazyLoad>
    </main>
  );
}

export default Main;

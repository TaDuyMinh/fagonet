import { Outlet } from 'react-router-dom';
import NavSolutions from './nav-solutions';
import LazyLoad from 'react-lazyload';
// import Contact from '../contact/index';
function Solutions() {
  return (
    <section className='px-8 xl:px-0'>
      <LazyLoad offset={0} once>
        <NavSolutions />
      </LazyLoad>
        {/* <Contact/> */}
      <Outlet />
    </section>
  );
}

export default Solutions;

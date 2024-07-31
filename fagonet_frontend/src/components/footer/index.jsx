// import SectionContact from './section-contact';
import SectionAbout from './section-about';
import SectionCopyRight from './section-copyright';
import LazyLoad from 'react-lazyload';
function Footer() {
  return (
    <footer>
      {/* <LazyLoad offset={0} once>
        <SectionContact />
      </LazyLoad> */}
      <LazyLoad className='w-4/5 m-auto' offset={0} once>
        <SectionAbout />
      </LazyLoad>
      <LazyLoad className='w-4/5 m-auto' offset={0} once>
        <SectionCopyRight />
      </LazyLoad>
    </footer>
  );
}

export default Footer;

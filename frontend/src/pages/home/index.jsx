import LazyLoad from 'react-lazyload';
import Header from './header/index';
import Main from './main/index';
import Spinner from '../../components/spinner';
export default function Home() {
  const lazyLoadOptions = {
    offset: 0,
    once: true,
    placeholder: <Spinner />,
  };
  return (
    <div>
      <LazyLoad {...lazyLoadOptions}>
        <Header />
      </LazyLoad>
      <LazyLoad {...lazyLoadOptions}>
        <Main />
      </LazyLoad>
    </div>
  );
}

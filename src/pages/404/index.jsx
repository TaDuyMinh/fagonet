import { Link } from 'react-router-dom';
import img404 from '../../assets/images/404.png';
import LazyLoad from 'react-lazyload';
function Page404() {
  return (
    <>
      <main className='w-4/5 m-auto flex flex-col justify-center items-center text-center my-32'>
        <h3 className='lg:text-3xl md:text-2xl text-xl font-bold'>
          ERROR PAGE
        </h3>
        <LazyLoad className='my-8' offset={100} once>
          <img src={img404} alt='404' />
        </LazyLoad>
        <p className='lg:text-4xl md:text-2xl text-xl font-bold'>
          Oops, Page Not Found
        </p>
        <p className='lg:text-2xl md:text-xl text-lg font-bold my-8'>
          Sorry, But the page you are looking for doesn't exist!
        </p>
        <Link
          className='px-14 py-4 rounded-3xl font-bold bg-boldBlue text-white hover:bg-yellow hover:text-black'
          to='/'
        >
          Back to home
        </Link>
      </main>
    </>
  );
}

export default Page404;

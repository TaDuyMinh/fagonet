import { useSelector } from 'react-redux';
import {
  newsStatus,
  allNews,
  fetchNews,
  fetchPressNews,
  pressNews,
} from '../actions/newsSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import TagNews from '../../pages/news/tag-news';
import PressRelease from '../../pages/news/press-release';
import { Link } from 'react-router-dom';
import { formatDay } from '../../plugins/format-date';
// import demoImg from '../../assets/images/demo.jpg';
const NewsList = () => {
  const dispatch = useDispatch();
  const news = useSelector(allNews);
  const press = useSelector(pressNews);
  const status = useSelector(newsStatus);
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchNews());
      dispatch(fetchPressNews());
    }
  }, [status, dispatch]);
  const articles = news?.map((n) => {
    const URL_IMAGE = import.meta.env.VITE_IMAGE_URL;
    return (
      <article
        className='w-full bg-boldBlue text-white p-4 flex flex-col gap-[10px]  '
        key={n.categoryId}
      >
        <Link
          to={`category/${n.categoryId}`}
          className='w-2/3 p-2 rounded-[24px] bg-darkGray text-white flex justify-center items-center hover:bg-blue cursor-pointer'
        >
          #{n.news[0].category.name}
        </Link>
        <img
          className='w-full h-[248px] object-cover'
          src={URL_IMAGE + n.news[0].thumbnail}
          alt={n.news[0].title}
        />
        <Link to={`${n.news[0].id}`}>{n.news[0].title}</Link>
        <p className='flex items-center gap-[20px]'>
          <span>{formatDay(n.news[0].created_at)}</span>
          <span>{n.news[0].user.name}</span>
        </p>
        <p>{n.news[0].description}</p>
      </article>
    );
  });
  return (
    <>
      <section className='w-full h-full flex justify-between items-stretch gap-[20px]'>
        {articles}
      </section>
      <section>
        <TagNews news={news} />
      </section>
      <section>
        <PressRelease pressNews={press} />
      </section>
    </>
  );
};

export default NewsList;

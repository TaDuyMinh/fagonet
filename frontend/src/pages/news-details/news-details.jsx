import ViewIcon from '../../assets/icons/view-icon';
import CmtIcon from '../../assets/icons/cmt-icon';
import FacebookIcon from '../../assets/icons/facebook-icon';
import TwitterIcon from '../../assets/icons/twitter-icon';
import demoimg from '../../assets/images/demo-1.png';
import axios from 'axios';
import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { formatDay } from '../../plugins/format-date';
function NewsDetails() {
  const URL = import.meta.env.VITE_NEWS_URL;
  const URL_IMAGE = import.meta.env.VITE_IMAGE_URL;
  const { id } = useParams();
  const navigate = useNavigate();
  const [newsDetails, setNewsDetails] = useState(null);
  const [relatedNews, setRelatedNews] = useState(null);
  const [sideBarNews, setSideBarNews] = useState([]);
  const [hasTags, setHasTags] = useState([]);
  const settings = {
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  useEffect(() => {
    const fetchNewsDetails = async () => {
      try {
        const res = await axios.get(`${URL}${id}`);
        setNewsDetails(res.data.data?.article);
        setRelatedNews(res.data.data?.ralated_articles);
        setSideBarNews(res.data.data?.right_articles);
        for (let key in res.data.data?.right_articles) {
          setHasTags((prevHas) => {
            const hasTags = [...prevHas, key];
            return [...new Set(hasTags)];
          });
        }
      } catch (err) {
        throw err;
      }
    };
    fetchNewsDetails();
  }, [id, URL]);
  const listSideBars = hasTags.map((h) => {
    return (
      <div className='flex flex-col gap-[20px]' key={h}>
        {sideBarNews[h]?.length ? <h4 className='text-2xl'>#{h}</h4> : ''}
        {sideBarNews[h]?.map((n) => {
          return (
            <article
              className='flex flex-col md:flex-row justify-between gap-[10px]'
              key={n.id}
            >
              <div className='md:w-1/4'>
                <img
                  className='w-[100px] h-[100px] rounded-[12px]'
                  src={URL_IMAGE + n?.thumbnail}
                  alt={n.title}
                />
              </div>
              <div className='md:w-3/4 flex flex-col gap-[10px]'>
                <h5
                  className='text-lg font-bold cursor-pointer'
                  onClick={() => navigate(`/blogs/${n.id}`)}
                >
                  {n.title.length > 80
                    ? n?.title.substring(0, 80) + '...'
                    : n.title}
                </h5>
                <p className='flex items-center gap-[10px]'>
                  <span>{formatDay(n.created_at)}</span>
                  <span>{n.user.name}</span>
                </p>
                <p>{n?.description.substring(0, 80)}...</p>
              </div>
            </article>
          );
        })}
      </div>
    );
  });
  const relatedList = relatedNews?.map((r) => {
    return (
      <article className='px-2 flex flex-col gap-[10px]' key={r.id}>
        <img
          className='w-full h-[260px]'
          src={URL_IMAGE + r.thumbnail}
          alt={r.title}
        />
        <h5
          className='text-lg font-bold cursor-pointer'
          onClick={() => navigate(`/blogs/${r.id}`)}
        >
          {r.title.length > 50 ? r?.title.substring(0, 50) + '...' : r.title}
        </h5>
        <p className='flex items-center gap-[10px]'>
          <span>{formatDay(r.created_at)}</span>
          <span>{r.user.name}</span>
        </p>
        <p>
          {r.description.length > 80
            ? r?.description.substring(0, 80) + '...'
            : r.description}
        </p>
      </article>
    );
  });
  return (
    <main className='w-4/5 m-auto flex flex-col gap-[20px] mb-16'>
      <section className='flex items-center gap-[20px]'>
        <Link to='..'>News</Link>
        <span>{'>'}</span>
        <h2>{newsDetails?.id}</h2>
      </section>
      <section className='flex flex-col lg:flex-row gap-[40px]'>
        <div className='lg:w-2/3 flex flex-col gap-[20px]'>
          <h4>{newsDetails?.title}</h4>
          <div className='flex flex-col md:flex-row md:items-center gap-[40px]'>
            <div>
              <p>{formatDay(newsDetails?.created_at)}</p>
            </div>
            <div className='flex items-center gap-[10px]'>
              <ViewIcon />
              <h5>{newsDetails?.view}</h5>
            </div>
            <div className='flex items-center gap-[10px]'>
              <CmtIcon />
              <p>1 comments</p>
            </div>
          </div>
          <div
            className='flex flex-col gap-[20px]'
            dangerouslySetInnerHTML={{ __html: newsDetails?.content }}
          ></div>
          <div>
            <div className='flex items-center gap-[20px]'>
              <h5>Share:</h5>
              <FacebookIcon />
              <TwitterIcon />
            </div>
          </div>
          <div className='flex flex-col gap-[20px] border-b border-gray'>
            <div className='flex justify-between items-center'>
              <h5 className='text-2xl font-bold'>Comment</h5>
              <div>Sign in | Sign Up</div>
            </div>
            <div className='flex flex-col gap-[20px]'>
              <textarea
                className='w-full'
                name=''
                id=''
                cols='30'
                rows='10'
              ></textarea>
              <button className='ml-auto'>Send Comment</button>
            </div>
          </div>
          <Slider {...settings}>{relatedList}</Slider>
        </div>
        <div className='lg:w-1/3 flex flex-col gap-[40px]'>
          <div className='w-full h-[460px]'>
            <img
              className='w-full h-full rounded-[12px]'
              src={demoimg}
              alt=''
            />
          </div>
          {listSideBars}
        </div>
      </section>
    </main>
  );
}

export default NewsDetails;

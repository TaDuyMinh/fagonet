import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allMostViews, fetchMostViews } from '../../store/actions/blogsSlice';
import { formatDay } from '../../plugins/format-date';
import ViewIcon from '../../assets/icons/view-icon';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function MostViews() {
  const IMAGE_URL = import.meta.env.VITE_BLOG_URL;
  const dispatch = useDispatch();
  const mostViews = useSelector(allMostViews);
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    dispatch(fetchMostViews());
  }, [dispatch]);
  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div>
        <ul
          style={{ margin: '0px', display: 'flex', justifyContent: 'center' }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          margin: '16px 0',
          display: 'flex',
          width: '8px',
          height: '8px',
          backgroundColor: i === currentSlide ? '#ff0000' : '#000',
          borderRadius: '6px',
        }}
      ></div>
    ),
    beforeChange: (current, next) => setCurrentSlide(next),
  };
  const renderViews = mostViews?.data?.map((v) => {
    return (
      <article
        className='flex flex-col px-4 gap-[20px] rounded-[12px]'
        key={v.id}
      >
        <img
          className=' h-[280px] object-cover'
          src={IMAGE_URL + v.photo_url_path || v.photo_url || v.thumb_url}
          alt={v.name}
        />
        <h5>{v.name}</h5>
        <p className='flex items-center gap-[20px]'>
          <span>{formatDay(v.created_at)}</span>
          <span>{v.author}</span>
        </p>
        <p>{v.description.substring(0, 80)}...</p>
      </article>
    );
  });
  return (
    <div className='w-[350px] h-full px-8 py-2 bg-white text-black flex flex-col gap-[20px] rounded-[12px]'>
      <div className='flex justify-between'>
        <h2>Most viewed</h2>
        <ViewIcon />
      </div>
      <Slider
        className='w-[330px] flex justify-center items-center'
        {...settings}
      >
        {renderViews}
      </Slider>
    </div>
  );
}

export default MostViews;

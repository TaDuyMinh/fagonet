import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allBlogs, fetchBlogs } from '../../store/actions/blogsSlice';
import { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function HeadNews() {
  const dispatch = useDispatch();
  const blogs = useSelector(allBlogs);
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);
  const IMAGE_URL = import.meta.env.VITE_BLOG_URL;
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    arrows: false,
    dots: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: '0px', display: 'flex' }}>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          margin: '12px',
          display: 'flex',
          width: '30px',
          height: '6px',
          backgroundColor: i === currentSlide ? '#ff0000' : '#fff',
          borderRadius: i === currentSlide ? '6px' : '',
        }}
      ></div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
    beforeChange: (current, next) => setCurrentSlide(next),
  };
  const renderList = blogs?.data?.map((b, index) => {
    return (
      <article
        className='h-[300px] px-4 text-black'
        key={b.id}
        tabIndex={index + 1}
      >
        <div className='bg-[#fff] h-full p-4 flex flex-col gap-[20px] rounded-[8px]'>
          <div>
            <img
              className='w-[100px] h-[90px]'
              src={IMAGE_URL + b.photo_url_path || b.thumb_url}
              alt=''
            />
          </div>
          <h2>#Branding</h2>
          <p>{b?.description}</p>
        </div>
      </article>
    );
  });
  return (
    <div className='w-4/5 flex flex-col gap-[40px]'>
      <div>
        <h2 className='text-4xl text-center font-bold'>Tin tức hàng đầu</h2>
      </div>
      <Slider {...settings}>{renderList}</Slider>
    </div>
  );
}

export default HeadNews;

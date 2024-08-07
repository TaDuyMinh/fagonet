import React from 'react';
// import { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';
import { formatDay } from '../../plugins/format-date';
import { useNavigate } from 'react-router-dom';
function CategoryNews({ news }) {
  const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;
  const navigate = useNavigate();
  const listNews = news?.map((n) => {
    return (
      <article className='flex flex-col md:flex-row gap-[20px]' key={n?.id}>
        <div className='md:w-1/3'>
          <img
            className='w-full md:w-[288px] h-[284px] rounded-[12px]'
            src={IMAGE_URL + n?.thumbnail}
            alt={n?.title}
          />
        </div>
        <div className='md:w-2/3 flex flex-col gap-[20px]'>
          <h4
            className='text-xl font-bold cursor-pointer'
            onClick={() => navigate(`/news/${n?.id}`)}
          >
            {n?.title}
          </h4>
          <p className='flex items-center gap-[20px]'>
            <span>{formatDay(n?.created_at)}</span>
            <span>{n?.user.name}</span>
          </p>
          <p>{n?.description}</p>
        </div>
      </article>
    );
  });
  return <section className='flex flex-col gap-[40px]'>{listNews}</section>;
}

export default CategoryNews;

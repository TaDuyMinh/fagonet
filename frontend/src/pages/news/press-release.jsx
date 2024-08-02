import React from 'react';
import { Link } from 'react-router-dom';
import { formatDay } from '../../plugins/format-date';
function PressRelease({ pressNews }) {
  const IndexPress = () => {
    const URL_IMAGE = import.meta.env.VITE_IMAGE_URL;
    return (
      <article className='flex gap-[20px] border-b border-gray pb-12'>
        <img
          className='w-1/2 rounded-[12px]'
          src={URL_IMAGE + pressNews[0]?.thumbnail}
          alt={pressNews[0]?.title}
        />
        <div className='w-1/2 flex flex-col gap-[10px]'>
          <Link to={`${pressNews[0]?.id}`}>{pressNews[0]?.title}</Link>
          <p className='flex items-center gap-[20px]'>
            <span>{formatDay(pressNews[0]?.created_at)}</span>
            <span>{pressNews[0]?.user.name}</span>
          </p>
          <p>{pressNews[0]?.description}</p>
        </div>
      </article>
    );
  };
  const litsPress = [];
  for (let key in pressNews[1]) {
    litsPress.push(pressNews[1][key]);
  }
  const newList = litsPress
    .sort((a, b) => a.hot_news - b.hot_news)
    .map((n) => {
      return (
        <article className='flex gap-[20px]' key={n.id}>
          <div>
            <h4>0{n.hot_news}</h4>
          </div>
          <div className='w-1/2 flex flex-col gap-[10px]'>
            <Link to={`${n.id}`}>{n.title}</Link>
            <p className='flex items-center gap-[20px]'>
              <span>{formatDay(n.created_at)}</span>
              <span>{n.user.name}</span>
            </p>
          </div>
        </article>
      );
    });
  return (
    <div className='flex flex-col gap-[40px]'>
      <h2 className='text-3xl font-bold text-center'>Press Release</h2>
      <IndexPress />
      <div className='flex flex-col gap-[20px]'>{newList}</div>
    </div>
  );
}

export default PressRelease;

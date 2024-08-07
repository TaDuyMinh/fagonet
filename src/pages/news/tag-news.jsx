import React from 'react';
import { Link } from 'react-router-dom';
import CmtIcon from '../../assets/icons/cmt-icon';
import ViewIcon from '../../assets/icons/view-icon';
import { formatDay } from '../../plugins/format-date';
function TagNews({ news }) {
  const URL_IMAGE = import.meta.env.VITE_IMAGE_URL;
  const tagNews = news.map((n) => {
    return (
      <div className='flex flex-col gap-[20px]' key={n.categoryId}>
        <h4>#{n.news[0].category.name}</h4>
        <div className='flex flex-col gap-[20px]'>
          {n.news.map((n) => {
            return (
              <article
                className='bg-boldBlue p-4 flex gap-[20px] rounded-[12px]'
                key={n.id}
              >
                <img
                  className='w-[100px] h-[100px] rounded-[12px]'
                  src={URL_IMAGE + n.thumbnail}
                  alt={n.title}
                />
                <div className='w-2/3 flex flex-col gap-[5px]'>
                  <Link to={`${n.id}`}>{n.title}</Link>
                  <p className='flex items-center gap-[20px]'>
                    <span>{formatDay(n.created_at)}</span>
                    <span>{n.user.name}</span>
                  </p>
                  <div className='flex gap-[20px]'>
                    <div className='flex items-center gap-[8px]'>
                      <ViewIcon />
                      <span>{n.view || 0}</span>
                    </div>
                    <div className='flex items-center gap-[8px] text-blue font-bold'>
                      <CmtIcon />
                      <span>0 comments</span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    );
  });
  return <div className='flex gap-[20px]'>{tagNews}</div>;
}

export default TagNews;

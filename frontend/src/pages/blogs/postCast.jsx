import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allPodCast, fetchPodCast } from '../../store/actions/blogsSlice';
import { useEffect } from 'react';
import HeadPhoneIc from '../../assets/icons/headphone';
import BookMarkIc from '../../assets/icons/bookmark';
import { formatDay } from '../../plugins/format-date';
function PostCast() {
  const URL = import.meta.env.VITE_BLOG_URL;
  const dispatch = useDispatch();
  const postCast = useSelector(allPodCast);
  const [casts, setCasts] = useState(null);
  const [recommends, setRecommends] = useState(null);
  useEffect(() => {
    dispatch(fetchPodCast());
    setCasts(postCast?.data?.podcast);
    setRecommends(postCast?.data?.recommends);
  }, [dispatch, postCast]);
  const forceFileDownload = async (url, title) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.setAttribute('download', title);
      document.body.appendChild(link);
      link.click();

      // Clean up after the download
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Error while downloading:', error);
    }
  };
  const recommend = recommends?.map((r) => {
    return (
      <div className='flex gap-[20px]' key={r.id}>
        <img
          className='w-[100px] h-[100px]'
          src={URL + r.photo_url_path || r.photo_url || r.thumb_url}
          alt={r.name}
        />
        <div className='flex flex-col gap-[10px]'>
          <h5>{r.name}</h5>
          <p>{formatDay(r.created_at)}</p>
          <p>
            {r.description.length > 50 ? r.description + '...' : r.description}
          </p>
        </div>
      </div>
    );
  });
  return (
    <div className='w-[350px] m-auto flex flex-col gap-[40px]'>
      <div className='flex justify-between items-center'>
        <h2 className='text-3xl font-bold'>Newest podcast</h2>
        <HeadPhoneIc />
      </div>
      {casts ? (
        <div className='flex flex-col gap-[20px]'>
          {casts ? (
            <audio controls className='w-[300px]'>
              <source src={URL + casts.audio_url_path} type='audio/mpeg' />
            </audio>
          ) : (
            ''
          )}
          <div className='flex gap-[20px]'>
            <img
              className='w-[100px] h-[100px]'
              src={
                URL + casts.photo_url_path || casts.photo_url || casts.thumb_url
              }
              alt={casts.name}
            />
            <div className='flex flex-col gap-[10px]'>
              <h5>{casts.name}</h5>
              <p>{formatDay(casts.created_at)}</p>
              <p>
                {casts.description.length > 50
                  ? casts.description + '...'
                  : casts.description}
              </p>
              <button
                className='font-bold mr-auto'
                onClick={() =>
                  forceFileDownload(URL + casts.audio_url_path, casts.name)
                }
              >
                DownLoad
              </button>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
      <div className='flex flex-col gap-[40px]'>
        <div className='flex justify-between items-center'>
          <h2 className='text-3xl font-bold'>Recommends</h2>
          <BookMarkIc />
        </div>
        <div>{recommend}</div>
      </div>
    </div>
  );
}

export default PostCast;

import { useDispatch, useSelector } from 'react-redux';
import {
  allMostRecent,
  listBlogsById,
  fetchMostRecent,
  fetchListBlogsId,
  blogsById,
  fetchBlogsId,
  blogsStatus,
  firstBlogs,
} from '../../store/actions/blogsSlice';
import { useEffect, useState } from 'react';
import { formatDay } from '../../plugins/format-date';
import ViewIcon from '../../assets/icons/view-icon';
import DOMPurify from 'dompurify';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
function MostRecent() {
  const IMAGE_URL = import.meta.env.VITE_BLOG_URL;
  const dispatch = useDispatch();
  const mostRecent = useSelector(allMostRecent);
  const listBlogsId = useSelector(listBlogsById);
  const firstBlogsId = useSelector(firstBlogs);
  const blogsDetails = useSelector(blogsById);
  const status = useSelector(blogsStatus);
  let id = mostRecent[0]?.categoryId || 0;
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMostRecent());
    }
  }, [status, dispatch]);
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchListBlogsId(id));
    }
  }, [status, id, dispatch]);
  useEffect(() => {
    dispatch(fetchBlogsId(firstBlogsId));
  }, [firstBlogsId, dispatch]);
  const renderMostRecent = mostRecent?.map((m) => {
    return (
      <li
        className='min-w-[120px] max-w-[180px] flex justify-center cursor-pointer'
        key={m.categoryId}
        onClick={() => handleShowListBlogsId(m.categoryId)}
      >
        {m.categoryName}
      </li>
    );
  });
  const handleShowListBlogsId = (id) => {
    dispatch(fetchListBlogsId(id));
  };
  const handleShowBlogDetails = (slug) => {
    dispatch(fetchBlogsId(slug));
  };
  const renderListBlogsDetails = listBlogsId?.map((b) => {
    return (
      <li
        className='  min-w-max w-full flex flex-col gap-[20px] border-gray border mb-4 p-4 rounded-full cursor-pointer'
        key={b.id}
        onClick={() => handleShowBlogDetails(b.slug)}
      >
        {b.name.substring(0, 10)}...
      </li>
    );
  });
  const cleanHtml = DOMPurify.sanitize(blogsDetails?.data?.post?.content);
  const toggleContent = () => {
    setShowAll((prevShow) => !prevShow);
    const e = document.getElementById('post-details');
    e.scrollIntoView({
      behavior: 'smooth',
    });
  };
  const recentBlogs = blogsDetails?.data?.post_sames.map((b) => {
    return (
      <article
        className='flex flex-row justify-between items-center gap-[20px]'
        key={b.id}
      >
        <div>
          <img
            className='w-[100px] h-[100px]'
            src={IMAGE_URL + b.photo_url_path || b.photo_url || b.thumb_url}
            alt={b.name}
          />
        </div>
        <div className='flex flex-col gap-[10px]'>
          <h5
            className='font-bold cursor-pointer'
            onClick={() => handleShowBlogDetails(b.slug)}
          >
            {b.name}
          </h5>
          <p>{formatDay(b.created_at)}</p>
          <div className='flex items-center gap-[10px]'>
            <ViewIcon />
            <p>{b.viewed}</p>
          </div>
          <p>
            {b.description.length > 30
              ? b.description.substring(0, 30) + '...'
              : b.description}
          </p>
        </div>
      </article>
    );
  });

  return (
    <div className='w-[375px] md:w-[500px] xl:w-[800px] flex flex-col gap-[40px]'>
      <ul className='w-full bg-black text-white p-4 flex gap-[20px] overflow-x-auto'>
        {renderMostRecent}
      </ul>
      <div className='flex gap-[20px]'>
        <h4>Topic:</h4>
        <ul className='flex items-center gap-[20px] overflow-x-auto'>
          {renderListBlogsDetails ? renderListBlogsDetails : ''}
        </ul>
      </div>
      <div className={`flex flex-col gap-[20px]`}>
        <h4>{blogsDetails?.data?.post?.name}</h4>
        <div className='flex items-center gap-[20px]'>
          <p>{formatDay(blogsDetails?.data?.post?.created_at)}</p>
          <div className='flex items-center gap-[5px]'>
            <ViewIcon />
            {blogsDetails?.data?.post?.viewed}
          </div>
        </div>
        <div className='flex flex-col gap-[20px]'>
          <ReactMarkdown
            id='post-details'
            className={`flex flex-col gap-[20px] ${
              showAll ? 'h-full' : 'h-[500px] overflow-hidden'
            }`}
          >
            {cleanHtml}
          </ReactMarkdown>
          <button
            className='min-w-[120px] border-gray border rounded-full mr-auto px-4 py-2'
            onClick={toggleContent}
          >
            <span>{showAll ? 'Hide' : 'Read More'}</span>
          </button>
        </div>
        <div>
          <h4>Recent posts</h4>
          <div className='sm:flex items-center flex-wrap gap-[20px] lg:gap-[80px]'>
            {recentBlogs}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MostRecent;

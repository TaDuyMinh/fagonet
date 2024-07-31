import React from 'react';
import { useTranslation } from 'react-i18next';
import Spinner from '../../components/spinner';
import BannerBlogs from './banner';
import HeadNews from './head-news';
function Blogs() {
  const { t } = useTranslation();
  const lazyLoadOptions = {
    offset: 0,
    once: true,
    placeholder: <Spinner />,
  };
  return (
    <main className='w-4/5 mx-auto my-16 flex flex-col items-center justify-between gap-[80px]'>
      <BannerBlogs />
      <HeadNews />
    </main>
  );
}

export default Blogs;

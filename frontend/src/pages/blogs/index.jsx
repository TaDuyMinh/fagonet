import React from 'react';
import Banner from './banner';
import HeadNews from './headNews';
import MostRecent from './mostRecent';
import PostCast from './postCast';
import MostViews from './mostViews';
import NeedAdvises from './needAdvises';
function Blogs() {
  return (
    <main className='w-4/5 mx-auto my-16 flex flex-col items-center justify-between gap-[80px]'>
      <Banner />
      <HeadNews />
      <section className='flex flex-col justify-center xl:flex-row gap-[60px]'>
        <div className=''>
          <MostRecent />
        </div>
        <div className='flex flex-col gap-[80px]'>
          <PostCast />
          <MostViews />
          <NeedAdvises />
        </div>
      </section>
    </main>
  );
}

export default Blogs;

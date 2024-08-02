import React from 'react';
import demoImg2 from '../../assets/images/demo-2.png';
function Banner() {
  return (
    <div className='flex flex-col lg:flex-row justify-between gap-[40px]'>
      <div className='flex flex-col gap-[40px]'>
        <h2 className='text-4xl font-bold'>Should read our blog</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum arcu
          sollicitudin viverra velit est, suscipit diam sed. Eleifend et amet
          nullam est nec tortor. Massa in convallis urna arcu pellentesque.
        </p>
        <button className='mr-auto'>Đọc thêm</button>
      </div>
      <div>
        <img src={demoImg2} alt='' />
      </div>
    </div>
  );
}

export default Banner;

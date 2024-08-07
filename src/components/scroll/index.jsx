import { useState, useEffect } from 'react';

export default function ScrollPage() {
  const [showAngleUp, setAngleUp] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 400) {
      setAngleUp(true);
    } else {
      setAngleUp(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section>
      {showAngleUp && (
        <i
          className='w-8 h-8 text-2xl md:w-12 md:h-12 md:text-3xl lg:text-4xl fa fa-angle-double-up'
          onClick={handleClick}
        ></i>
      )}
    </section>
  );
}

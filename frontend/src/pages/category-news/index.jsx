import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import CategoryNews from './category-news';
function Category() {
  const CATEGORY_URL = import.meta.env.VITE_CATEGORY_URL;
  const { id } = useParams();
  const [news, setNews] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchCategoryNews = async () => {
      try {
        const res = await axios.get(`${CATEGORY_URL}${id}?per_page=10`);
        if (res.data.data.data.length === 0) {
          navigate('/');
        } else {
          setNews(res?.data?.data);
        }
      } catch (err) {
        throw err;
      }
    };
    fetchCategoryNews();
  }, [id]);
  return (
    <main className='w-4/5 mx-auto my-16 flex flex-col gap-[80px]'>
      <section>
        <h2 className='text-start text-3xl font-bold'>Bussiness</h2>
      </section>
      <CategoryNews news={news?.data} />
    </main>
  );
}

export default Category;

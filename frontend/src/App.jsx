import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './i18n';
import Layout from './components/layout';
import Page404 from './pages/404/index';
import { useEffect, lazy, Suspense } from 'react';
import Spinner from './components/spinner';
import CookieConsent, {
  getCookieConsentValue,
  Cookies,
} from 'react-cookie-consent';
import { initGA } from './plugins/ga-utils';
const Home = lazy(() => import('./pages/home/index'));
const ServicesList = lazy(() => import('./pages/services/services-list'));
const ServiceDetail = lazy(() => import('./pages/services/service-detail'));
const SolutionsList = lazy(() => import('./pages/solutions/solutions-list'));
const SolutionDetail = lazy(() => import('./pages/solutions/solution-detail'));
const Blogs = lazy(() => import('./pages/blogs/index'));
const News = lazy(() => import('./pages/news/index'));
const NewsDetails = lazy(() => import('./pages/news-details/news-details'));
const CategoryNews = lazy(() => import('./pages/category-news/index'));
const Contact = lazy(() => import('./pages/contact/index'));

function App() {
  const handleAcceptCookie = () => {
    if (import.meta.env.REACT_APP_GOOGLE_ANALYTICS_ID) {
      initGA(import.meta.env.REACT_APP_GOOGLE_ANALYTICS_ID);
    }
  };
  const handleDeclineCookie = () => {
    Cookies.remove('_ga');
    Cookies.remove('_gat');
    Cookies.remove('_gid');
  };
  useEffect(() => {
    const isConsent = getCookieConsentValue();
    if (isConsent === 'true') {
      handleAcceptCookie();
    }
  }, []);
  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />

            <Route path='solutions'>
               <Route index element={<SolutionsList />} />
                 <Route path=':id' element={<SolutionDetail />} /> 
            </Route>
            
            <Route path='services'>
              <Route index element={<ServicesList />} />
              <Route path=':link' element={<ServiceDetail />} />
            </Route>
            <Route path='blogs' element={<Blogs />}></Route>
            <Route path='news'>
              <Route index element={<News />} />
              <Route path=':id' element={<NewsDetails />} />
              <Route path='category/:id' element={<CategoryNews />} />
            </Route>
            <Route path='contact' element={<Contact />} />
            <Route path='*' element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <CookieConsent
        enableDeclineButton
        onAccept={handleAcceptCookie}
        onDecline={handleDeclineCookie}
        expires={365}
      >
        <h1 className='font-bold'>Cookie Policy</h1>
        <p>
          This website uses cookies. By continuing to use this site, you accept
          our use of cookies.
        </p>
      </CookieConsent>
    </Suspense>
  );
}

export default App;

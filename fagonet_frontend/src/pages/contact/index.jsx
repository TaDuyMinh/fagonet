import LazyLoad from 'react-lazyload';
import ContactInfo from './contact-info';
import ContactForm from './contact-form';
import { useTranslation } from 'react-i18next';
import Spinner from '../../components/spinner';
export default function Contact() {
  const { t } = useTranslation();
  const lazyLoadOptions = {
    offset: 0,
    once: true,
    placeholder: <Spinner />,
  };
  return (
    <main className='container w-4/5 m-auto'>
      <section>
        <h3 className='my-8 xl:text-[80px] lg:text-[64px] md:text-[52px] text-[32px] text-center md:tracking-[16px] tracking-[12px] font-bold uppercase Scale'>
          {t('CONTACT')}
        </h3>
        <h4 className='xl:text-[56px] lg:text-[52px] md:text-[48px] text-[28px] lg:text-start text-center Scale'>
          {t('touch')}
        </h4>
        <div className='contact-page mt-8 mb-32 flex justify-between items-stretch gap-[40px]'>
          <LazyLoad {...lazyLoadOptions}>
            <ContactForm />
          </LazyLoad>
          <LazyLoad {...lazyLoadOptions}>
            <ContactInfo />
          </LazyLoad>
        </div>
      </section>
    </main>
  );
}

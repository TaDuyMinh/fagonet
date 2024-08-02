import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ServicesContext } from './hooks/services-context';
import { useTranslation } from 'react-i18next';
function NavServices() {
  const { t } = useTranslation();
  const { dataServices } = useContext(ServicesContext);
  return (
    <nav>
      <h2 className='xl:text-[32px] md:text-[28px] text-[24px] font-bold Scale'>
        {t('our-services')}
      </h2>
      <div className='nav-services my-8'>
        {dataServices.map((service, index) => {
          return (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'nav-services-active lg:text-[20px] text-[18px] leading-[23.48px]'
                  : 'text-[20px] leading-[23.48px]'
              }
              key={index}
              to={`../${service.link}`}
            >
              <h5 className='font-bold'>{service.intro}</h5>
              <i className='fa fa-angle-right font-bold services'></i>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
export default NavServices;

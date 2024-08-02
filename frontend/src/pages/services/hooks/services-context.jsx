import { createContext, useEffect, useState } from 'react';
import DataServices from '../data/data-services';
export const ServicesContext = createContext();
export const ServicesProvider = ({ children }) => {
  const { data } = DataServices();
  const [dataServices, setDataServices] = useState([]);
  const lang = window.localStorage.getItem('language') || 'vi';
  useEffect(() => {
    setDataServices(data);
  }, [lang]);
  return (
    <ServicesContext.Provider value={{ dataServices }}>
      {children}
    </ServicesContext.Provider>
  );
};

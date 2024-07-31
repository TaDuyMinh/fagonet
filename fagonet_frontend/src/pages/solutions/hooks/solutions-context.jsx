import { createContext, useEffect, useState } from 'react';
import DataSolutions from '../data/data-solutions';
export const SolutionsContext = createContext();
export const SolutionsProvider = ({ children }) => {
  const { data } = DataSolutions();
  const [dataSolutions, setDataSolutions] = useState([]);
  const lang = window.localStorage.getItem('language') || 'vi';
  useEffect(() => {
    setDataSolutions(data);
  }, [lang]);
  return (
    <SolutionsContext.Provider value={{ dataSolutions }}>
      {children}
    </SolutionsContext.Provider>
  );
};

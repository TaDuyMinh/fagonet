import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ServicesContext = createContext();

export const ServicesProvider = ({ children }) => {
  const [dataServices, setDataServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/services/');
        setDataServices(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <ServicesContext.Provider value={{ dataServices, loading, error }}>
      {children}
    </ServicesContext.Provider>
  );
};

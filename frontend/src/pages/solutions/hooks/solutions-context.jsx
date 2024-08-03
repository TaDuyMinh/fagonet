import { createContext, useEffect, useState } from 'react';
import axios from 'axios'; // Make sure to import axios

export const SolutionsContext = createContext();

export const SolutionsProvider = ({ children }) => {
  const [dataSolutions, setDataSolutions] = useState([]);
  const [loading, setLoading] = useState(true); // To handle loading state
  const [error, setError] = useState(null); // To handle errors

  useEffect(() => {
    const fetchDataSolutions = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/solutions/'); // Adjust the endpoint as necessary
        setDataSolutions(response.data); // Assuming response.data contains the array of solutions
      } catch (err) {
        setError(err); // Set error state if there's an error
      } finally {
        setLoading(false); // Set loading to false after data is fetched or error occurs
      }
    };

    fetchDataSolutions();
  }, []); // Empty dependency array to run only on mount

  if (loading) return <p>Loading solutions...</p>; // Optionally render loading state
  if (error) return <p>Error loading solutions: {error.message}</p>; // Optionally render error state

  return (
    <SolutionsContext.Provider value={{ dataSolutions }}>
      {children}
    </SolutionsContext.Provider>
  );
};

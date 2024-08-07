import ReactGA from 'react-ga';

export const initGA = (id) => {
  if (import.meta.env.NODE_ENV === 'productions') {
    ReactGA.initialize(id);
  }
};

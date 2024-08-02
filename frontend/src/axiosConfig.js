// src/axiosConfig.js

import axios from 'axios';

// Configure Axios to send the CSRF token
axios.defaults.headers.common['X-CSRFToken'] = window.csrfToken;

export default axios;

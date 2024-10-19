import axios from "axios";
import Cookies from "js-cookie";

const instance = axios.create({
  baseURL:  "https://cuvette-jtd6.onrender.com", // Use environment variable
});

// Set token in cookies and axios headers
const setToken = async(token) => {
  if (typeof token === 'string') {
    Cookies.set('tokenID', token, { expires: 7 });
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
  } else {
    console.warn('Token must be a string');
  }
};

// Remove token from cookies and axios headers
const removeToken = () => {
  Cookies.remove('tokenID');
  delete instance.defaults.headers.common['Authorization'];
};

// Retrieve token from cookies
const getToken = () => {
  return Cookies.get('tokenID');
};

// Initialize token if it exists
const token = getToken();
if (token) {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

// Response interceptor for error handling
instance.interceptors.response.use(
  (response) => {
    console.log('Response:', response);
    return response;
  },
  (error) => {
    console.error('Error Response:', error.response);
    
    // Handle different status codes
    if (error.response) {
      switch (error.response.status) {
        case 401:
          console.error('Unauthorized! Please log in again.');
          break;
        case 403:
          console.error('Forbidden! You do not have permission to perform this action.');
          break;
        case 404:
          console.error('Resource not found!');
          break;
        default:
          // console.error('An unexpected error occurred:', error.message);
      }
    } else {
      console.error('Network Error:', error.message);
    }

    return Promise.reject(error);
  }
);

export { instance, setToken, removeToken, getToken };
export default instance;

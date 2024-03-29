import { Link } from 'react-router-dom';
import React from 'react';

const NotFound = () => {
  return (
    <div>
      <h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Page Not Found
      </h1>
      <Link to='/'> Click here to go home</Link>
    </div>
  );
};

export default NotFound;

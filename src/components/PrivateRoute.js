import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ isLoggedIn, children }) => {
  if (isLoggedIn) {
    return (
        <div>
            {children}
        </div>
    );
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;

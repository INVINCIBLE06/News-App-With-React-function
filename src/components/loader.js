import React from 'react'
import Loader from './Loading.gif';

const loader = () =>
{
      const loaderContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      };
  
      return (
        <div style={loaderContainerStyle}>
          <img className = "my-3" src={Loader} alt="Loading" />
        </div>
      );
  
}

export default loader;


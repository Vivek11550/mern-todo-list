
import React from 'react';
import "./signup.css";

const Headingcomp = ({ first, second }) => {
  return (
    <div>
      <h1 className='sign-up-heading'>
        {first} <br />{second}
      </h1>
    </div>
  );
}

export default Headingcomp;

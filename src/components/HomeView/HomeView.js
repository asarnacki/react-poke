import React from 'react';
import PropTypes from 'prop-types';
import './HomeView.css';

const HomeView = () => (
  <div className="w-full flex justify-center">
    Pokemon Picker
    <input type='text' placeholder='Enter pokemon here...' className='mt-10'></input>
  </div>
);

HomeView.propTypes = {};

HomeView.defaultProps = {};

export default HomeView;

import React from 'react';
import PropTypes from 'prop-types';

const Error = ({message}) =>  (
  <div
    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-4 text-center text-lg"
    role="alert">
    {message}
  </div>
)

Error.propTypes = {
  message: PropTypes.string.isRequired
}

export default Error;
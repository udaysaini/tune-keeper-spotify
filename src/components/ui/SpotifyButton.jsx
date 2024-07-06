import React from 'react';
import PropTypes from 'prop-types';

const SpotifyButton = ({ buttonText, onClick=null, href=null, className=null }) => {
  const baseClasses = 'px-4 py-2 font-semibold text-white rounded shadow';
  const spotifyClasses = `bg-spotify-green hover:bg-spotify-green-invert hover:bg-opacity-75`;

  const buttonClasses = `${baseClasses} ${spotifyClasses} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {buttonText}
      </a>
    );
  }

  return (
    <button className={buttonClasses} onClick={onClick}>
      {buttonText}
    </button>
  );
};

SpotifyButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  href: PropTypes.string,
  className: PropTypes.string,
};

export default SpotifyButton;

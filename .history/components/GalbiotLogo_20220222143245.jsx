import PropTypes from 'prop-types';

const WIDTH = 123;
const HEIGHT = 74;
const ASPECT_RATIO = WIDTH / HEIGHT;

export const GalbiotLogo = ({ width, units = 'em' }) => {
  const height = width / ASPECT_RATIO;
  return (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width={`${width}${units}`} height={`${height}${units}`} viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
 preserveAspectRatio="xMidYMid meet">
    <title>Galbiot logo</title>
 </svg>
  );
};

GalbiotLogo.propTypes = {
  width: PropTypes.number.isRequired,
  units: PropTypes.string,
};

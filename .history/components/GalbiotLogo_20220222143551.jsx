import PropTypes from 'prop-types';
import Picture from 'device-agnostic-ui/Picture.mjs'

const WIDTH = 123;
const HEIGHT = 74;
const ASPECT_RATIO = WIDTH / HEIGHT;

export const GalbiotLogo = ({ width, units = 'em' }) => {
  const height = width / ASPECT_RATIO;
  return (
    <Picture width={`${width}${units}`} height={`${height}${units}`}>
      <img
        src="../images/logo.svg"
        alt="Device Agnostic UI logo."
      />
    </Picture>
  )
};

GalbiotLogo.propTypes = {
  width: PropTypes.number.isRequired,
  units: PropTypes.string,
};

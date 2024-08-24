import PropTypes from 'prop-types';

const Header = (props) => {
  const text = props.text;

  const headerStyle = {
    backgroundColor: props.bgColor,
    color: props.textColor,
  };

  return (
    <header style={headerStyle}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
};

Header.defaultProps = {
  text: 'Default Header Text',
  bgColor: 'rgba(0,0,0,0.5)',
  textColor: '#fff',
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;

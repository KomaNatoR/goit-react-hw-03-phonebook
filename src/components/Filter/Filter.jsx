import PropTypes from 'prop-types';

const Filter = ({ onChange,value }) => {
    return (
        <label>Find contacts by name
          <input type="text" onChange={onChange} value={value} />
        </label>
    ); 
};
Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    value:PropTypes.string.isRequired,
};

export default Filter;
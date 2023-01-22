import PropTypes from 'prop-types';

const ContactList = ({ renderData, onClick }) => {
    return (
        <ul>
            {renderData.map(cont => (<li key={cont.id}>
                <span>{cont.name}:</span>
                <span>{cont.number}</span>
                <button onClick={()=>onClick(cont.id)}>Delete</button>
            </li>))}
        </ul>
    );
};
ContactList.defaultProps = {
    renderData:[],
}
ContactList.propTypes = {
    renderData: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number:PropTypes.string.isRequired,
    }),),
    onClick: PropTypes.func.isRequired,
};

export default ContactList;
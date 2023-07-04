import PropTypes from 'prop-types';

export default function Entry({ content, color, onRemove }) {

    return (
        <li
            style={{ color: color || 'black' }}
            onClick={onRemove || (() => {})}
        >{content}</li>
    );
}

Entry.propTypes = {
    content: PropTypes.string.isRequired,
    color: PropTypes.string,
    onRemove: PropTypes.func,
};

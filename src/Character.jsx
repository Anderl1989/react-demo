import PropTypes from 'prop-types';
import Portrait from './Portrait.jsx';

export default function Character({ character }) {
    return (
        <div>
            <h2>{character.name}</h2>
            {character.image && <Portrait image={character.image} />}
        </div>
    );
}

Character.propTypes = {
    character: PropTypes.objectOf({
        name: PropTypes.string.isRequired,
        image: PropTypes.string,
    }).isRequired,
};

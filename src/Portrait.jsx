import { useContext } from 'react';
import PropTypes from 'prop-types';
import { RoundedContext } from './RoundedContext.jsx';

export default function Portrait({ image }) {
    const rounded = useContext(RoundedContext);

    return (
        <div
            style={{
                width: 100,
                height: 100,
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                borderRadius: rounded ? 50 : 0,
            }}
        />
    );
}


Portrait.propTypes = {
    image: PropTypes.string.isRequired,
};

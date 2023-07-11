import PropTypes from 'prop-types';

export default function Card({ children }) {

    return (
        <div
            style={{
                width: 300,
                height: 300,
                boxShadow: '0 0 10px 0 grey',
                display: 'inline-block',
                margin: 20,
            }}
        >
            {children}
        </div>
    )
}

Card.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

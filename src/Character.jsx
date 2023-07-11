import PropTypes from 'prop-types';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import ExpandIcon from '@mui/icons-material/ArrowDropDown';

import Portrait from './Portrait.jsx';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function Character({ character }) {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandIcon />}
            >
                <Typography>{character.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {character.image && <Portrait image={character.image} />}
                <Avatar src={character.image} sx={{ width: 100, height: 100 }} variant="square" />
                <Button><NavLink to={`/char/${character.id}`}>Show More...</NavLink></Button>
            </AccordionDetails>
        </Accordion>
    );
}

Character.propTypes = {
    character: PropTypes.object.isRequired,
};

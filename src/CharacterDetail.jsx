import { useContext, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { CharactersContext } from './CharactersContext';

export default function CharacterDetail() {
    const { characterId } = useParams();
    const characters = useContext(CharactersContext);

    const character = useMemo(() => {
        return characters.find(character => character.id === characterId);
    }, [characterId, characters]);

    return (
        <div>
            <p>Actor: {character?.actor}</p>
        </div>
    );
}
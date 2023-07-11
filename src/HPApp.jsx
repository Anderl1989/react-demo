import { useState, useEffect } from 'react';
import Character from './Character.jsx';
import Card from './Card.jsx';
import { RoundedContext } from './RoundedContext.jsx';
import { CharactersContext } from './CharactersContext.jsx';
import { Outlet } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

export default function HPApp() {
    const [ characters, setCharacters ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ rounded, setRounded ] = useState(false);

    useEffect(() => {
        // beim ersten rendern der componente, oder wenn sich dependencies des effects ändern
        fetch('https://hp-api.onrender.com/api/characters')
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {
                    setCharacters(data);
                    setLoading(false);
                }, 3000);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
        
        return () => {
            // wenn die componente aus dem DOM verschwindet
        };
    }, [/* dependencies des effects kommen hier rein */])

    if (loading) {
        return (
            <>
                <CircularProgress />
                <p>Loading data...</p>
            </>
        );
    }

    console.log('characters', characters);
    return (
        <CharactersContext.Provider value={characters}>
            <RoundedContext.Provider value={rounded}>
                <div style={{ display: 'flex' }}>
                    <div style={{ width: 500 }}>
                        <div
                            style={{
                                cursor: 'pointer',
                                userSelect: 'none',
                            }}
                            onClick={() => {
                                setRounded(!rounded);
                            }}
                        >Change Rounded</div>
                        {characters.map((character) => (
                            <Character key={character.id} character={character} />
                        ))}
                    </div>
                    <Outlet />
                </div>
            </RoundedContext.Provider>
        </CharactersContext.Provider>
    );
}

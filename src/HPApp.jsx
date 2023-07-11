import { useState, useEffect } from 'react';
import Character from './Character.jsx';
import Card from './Card.jsx';
import { RoundedContext } from './RoundedContext.jsx';

export default function HPApp() {
    const [ characters, setCharacters ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ rounded, setRounded ] = useState(false);

    useEffect(() => {
        // beim ersten rendern der componente, oder wenn sich dependencies des effects ändern
        fetch('https://hp-api.onrender.com/api/characters')
            .then((res) => res.json())
            .then((data) => {
                setCharacters(data);
                setLoading(false);
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
        return <p>Loading data...</p>;
    }

    console.log('characters', characters);
    return (
        <RoundedContext.Provider value={rounded}>
            <div>
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
                    <Card key={character.id}>
                        <Character character={character} />
                    </Card>
                ))}
            </div>
        </RoundedContext.Provider>
    );
}

import React from 'react';
import Button from '../components/Button'; 
function Home() {
    return (
        <div>
            <h1>Space tourism</h1>
            <Button
                label="Explore"
                onClick={() => alert('Кнопка нажата!')}
                color="black"
                size="large"
            />
        </div>
    );
}
export default Home;
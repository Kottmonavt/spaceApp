import React from 'react';
import Button from '../components/Button'; 
function Home() {
    return (
        <div>
            <h1>Space tourism</h1>
            <Button
                label="Explore"
                onClick={() => window.open("http://localhost:5173/about")}//alert('Кнопка нажата!')}
                color="black"
                size="large"
            />
        </div>
    );
}
export default Home;
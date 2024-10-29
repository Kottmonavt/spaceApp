import { useState, useEffect } from 'react';
import './About.css'

const apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=Zx2ZZcY4NVb8hhZzt0llkzXGdHaKCugh9NdJ87rk';

function About() {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(apiUrl);
          const data = await response.json();
          setImageUrl(data.url); // Assuming the API returns an object with a 'imageUrl' property
        } catch (error) {
          console.error('Error fetching image URL:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div>
        <div className='box-for-images'>
            {imageUrl && <img src={imageUrl} alt="Image from API" className='image-nasa' />}
        </div>
      </div>
    );
  }
export default About;
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
            <div className='text-image russo-24'>Astronomy Picture of the Day</div>
        </div>
        <div className='text-container-about'>
          <div className='russo-48'>About our program</div>
          <div className='roboto-28'>Hi friend!</div>
          <div className='roboto-28'>
            We are a young project to create space travel to different planets. 
            With us, you can fulfill your childhood dream or just spend a lot of money. 
            An exciting journey to the planets of the Solar system and the immense beauty of space are waiting for you. 
            Just choose a travel plan and a planet, and we and our professional team will do the rest!
          </div>
          <div className='text-image roboto-28'>And every day on this page you can view the astronomical photo of the day from Nasa</div>
        </div>
      </div>
    );
  }
export default About;
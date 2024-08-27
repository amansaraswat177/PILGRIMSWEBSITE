import React from 'react';
import './Destinations.css';

const Destinations = () => {
  const places = [
    { name: 'Ujjain: A historic city in Madhya Pradesh, India, renowned for its spiritual significance and ancient temples, including the Mahakaleshwar Temple. Its a vibrant center of culture and spirituality.', image: '/src/assets/ujjain.jpeg' },
    { name: 'Mathura: A sacred city in Uttar Pradesh, India, celebrated as the birthplace of Lord Krishna. Its temples and ghats along the Yamuna River make it a major pilgrimage destination.', image: '/src/assets/mathura.jpeg'},
    { name: 'Ayodhya: Known as the birthplace of Lord Rama, this historic city in Uttar Pradesh is a focal point of Hindu spirituality and ancient temples.', image: '/src/assets/ayodhya.jpeg' },
    { name: 'Kedarnath: A revered pilgrimage site in the Himalayas, Kedarnath is famous for the Kedarnath Temple dedicated to Lord Shiva, surrounded by stunning natural beauty.', image: '/src/assets/kedar.jpeg' },
    { name: 'Dwarka: An ancient city in Gujarat, India, known for its historic temples and as the legendary kingdom of Lord Krishna. It’s a major site of spiritual and historical significance.', image: '/src/assets/dwarka.avif' },
    { name: 'Varanasi: One of the oldest cities in the world, Varanasi is located in Uttar Pradesh, India. It is renowned for its ghats along the Ganges River and its deep spiritual and cultural heritage.', image: '/src/assets/varanasi.jpeg' },
   
  ];

  return (
    <div className="destinations">
      <h2 className="section-title">Featured Pilgrimage Destinations</h2>
      <div className="places-grid">
        {places.map((place, index) => (
          <div key={index} className="place-card">
            <img src={place.image} alt={place.name} />
            <h3>{place.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;

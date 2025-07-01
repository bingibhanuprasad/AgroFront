import React, { useState } from 'react';

const TestimonialsSection = () => {
  const [avatarImages, setAvatarImages] = useState({
    1: 'https://images.unsplash.com/photo-1506794778202-cbfcc65c5967',
    2: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
    3: 'https://images.unsplash.com/photo-1523419409543-a5e549c1faa8',
    4: 'https://images.unsplash.com/photo-1534528741775-5395e917f6af',
    5: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
  });
  const fallbackImage = 'https://images.unsplash.com/photo-1500932334442-8761ee4810a7';

  const testimonials = [
    {
      id: 1,
      name: 'Raju Reddy (Warangal)',
      quote: 'BhanuAgroFarm’s organic poultry is outstanding! Their sustainable approach has transformed my farm.',
    },
    {
      id: 2,
      name: 'Lakshmi Devi (Nellore)',
      quote: 'Their fresh vegetables are vibrant and delicious. Delivery is always fast and reliable!',
    },
    {
      id: 3,
      name: 'Kiran Kumar (Guntur)',
      quote: 'The consultancy service revolutionized my grain farming with modern, eco-friendly techniques.',
    },
    {
      id: 4,
      name: 'Sravani (Rajahmundry)',
      quote: 'As a vendor, I trust BhanuAgroFarm’s grains for their consistent quality and freshness.',
    },
    {
      id: 5,
      name: 'Venkat Rao (Anantapur)',
      quote: 'BhanuAgroFarm’s commitment to organic farming is inspiring. Their products are top-notch!',
    },
  ];

  const handleImageError = (e, id) => {
    console.error(`Avatar image failed to load for testimonial ${id}:`, e);
    setAvatarImages((prev) => ({ ...prev, [id]: fallbackImage }));
  };

  return (
    <div id="testimonials" className="testimonials-section">
      <style>
        {`
          .testimonials-section {
            background-color: #f4f7f3;
          }
          .testimonials-header {
            text-align: center;
            margin-bottom: 40px;
            animation: slideIn 0.8s ease-in-out;
          }
          .testimonials-header h2 {
            font-size: 2.8rem;
            font-weight: 700;
            color: #2e4d2a;
            position: relative;
            display: inline-block;
          }
          .testimonials-header h2::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 150px;
            height: 5px;
            background: linear-gradient(45deg, #28a745, #2e4d2a);
          }
          .testimonials-container {
            display: flex;
            overflow-x: hidden;
            width: 100%;
          }
          .testimonials-scroll {
            display: flex;
            animation: scroll 25s linear infinite;
          }
          .testimonials-container:hover .testimonials-scroll {
            animation-play-state: paused;
          }
          .testimonial-card {
            flex: 0 0 280px;
            background: white;
            border-radius: 12px;
            border: 3px solid transparent;
            background-image: linear-gradient(white, white), linear-gradient(45deg, #28a745, #2e4d2a);
            background-origin: border-box;
            background-clip: padding-box, border-box;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            min-height: 240px;
            margin-right: 20px;
            padding: 20px;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .testimonial-card:hover {
            transform: scale(1.03);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
          }
          .testimonial-avatar {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            object-fit: cover;
            margin: 0 auto 15px;
            border: 2px solid #28a745;
            transition: border-color 0.3s ease;
          }
          .testimonial-card:hover .testimonial-avatar {
            border-color: #218838;
          }
          .testimonial-card i {
            font-size: 1.3rem;
            color: #28a745;
            margin-bottom: 10px;
          }
          .testimonial-card p {
            font-size: 1rem;
            color: #555;
            line-height: 1.5;
            margin-bottom: 10px;
            flex-grow: 1;
          }
          .testimonial-card h5 {
            font-size: 1.2rem;
            font-weight: 700;
            color: #2e4d2a;
            margin-bottom: 0;
          }
          .testimonial-card:nth-child(1) { animation: fadeIn 1s ease-in-out 0.2s both; }
          .testimonial-card:nth-child(2) { animation: fadeIn 1s ease-in-out 0.4s both; }
          .testimonial-card:nth-child(3) { animation: fadeIn 1s ease-in-out 0.6s both; }
          .testimonial-card:nth-child(4) { animation: fadeIn 1s ease-in-out 0.8s both; }
          .testimonial-card:nth-child(5) { animation: fadeIn 1s ease-in-out 1s both; }
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-${testimonials.length * 300}px); }
          }
          @keyframes slideIn {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @media (max-width: 768px) {
            .testimonials-header h2 {
              font-size: 2rem;
            }
            .testimonial-card {
              flex: 0 0 260px;
              min-height: 220px;
            }
            .testimonial-card p {
              font-size: 0.9rem;
            }
            .testimonial-card h5 {
              font-size: 1.1rem;
            }
            .testimonial-avatar {
              width: 50px;
              height: 50px;
            }
            .testimonial-card i {
              font-size: 1.1rem;
            }
          }
        `}
      </style>
      <div className="container">
        <div className="testimonials-header">
          <h2>Voices of Our Community</h2>
        </div>
        <div className="testimonials-container">
          <div className="testimonials-scroll">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={`${testimonial.id}-${index}`} className="testimonial-card">
                <i className="fas fa-quote-left"></i>
                <img
                  src={avatarImages[testimonial.id]}
                  alt={testimonial.name}
                  className="testimonial-avatar"
                  onError={(e) => handleImageError(e, testimonial.id)}
                />
                <p>{testimonial.quote}</p>
                <h5>{testimonial.name}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;

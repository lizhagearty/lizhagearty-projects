// In src/components/Portfolio.js

import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { tiktokScreenshots, photographyPortfolio } from '../portfolioImages';
import image1 from '../assets/image1.png';
import '../styles/Portfolio.css';

function Portfolio() {
  return (
    <section id="portfolio">
        {tiktokScreenshots.map((image, index) => (
        <a key={index} href={image.link} target="_blank" rel="noopener noreferrer">
          <LazyLoadImage
            src={image.src}
            alt={image.alt}
            effect="blur"
            width="100%"
            height="auto" />
        </a>
      ))}
        <div className="image-animation">
      <LazyLoadImage
        src={image1}
        alt="Description"
        effect="blur"
        width="100%"
        height="auto" />
        </div>
      {/* More images or a grid of images */}
    </section>
  );
}

export default Portfolio;

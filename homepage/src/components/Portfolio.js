import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { tiktokScreenshots, photographyPortfolio } from '../portfolioImages';
import image1 from '../assets/image1.png';
import '../styles/Portfolio.css';
import Gallery from 'react-photo-gallery';

function Portfolio() {

  return (
    <section id="portfolio">
      <Gallery photos={photographyPortfolio} />

        {/* <div className="gallery">
  {photographyPortfolio.map((image, index) => (
      <LazyLoadImage
        src={image.src}
        effect="blur"
        width="100%"
        height="auto" />
  ))}
</div> */}
      {/* {tiktokScreenshots.map((image, index) => (
        <a key={index} href={image.link} target="_blank" rel="noopener noreferrer">
          <LazyLoadImage
            src={image.src}
            alt={image.alt}
            effect="blur"
            width="100%"
            height="auto" />
        </a>
      ))} */}
    </section>
  );
}

export default Portfolio;

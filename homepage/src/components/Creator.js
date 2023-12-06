import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { tiktokScreenshots } from '../portfolioImages';
// import '../styles/Creator.css';
import Gallery from 'react-photo-gallery';

const CustomImageRenderer = ({ index, photo, margin, direction, top, left }) => {
    // photo.link is the URL you want to navigate to when the image is clicked
    return (
      <a
        href={photo.link}
        key={index}
        style={{ margin, height: photo.height, width: photo.width }}
        // Add any additional props for styling or functionality
      >
        <img
          src={photo.src}
          alt={photo.alt}
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </a>
    );
  };

function Creator() {

  return (
    <section id="Creator">
        <Gallery photos={tiktokScreenshots} renderImage={CustomImageRenderer} />
    </section>
  );
}

export default Creator;

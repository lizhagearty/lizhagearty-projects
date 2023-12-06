import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { tiktokScreenshots } from '../portfolioImages';
// import '../styles/Creator.css';
import Gallery from 'react-photo-gallery';

function Creator() {

  return (
    <section id="Creator">
        <Gallery photos={tiktokScreenshots} />
    </section>
  );
}

export default Creator;

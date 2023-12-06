import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { tiktokScreenshots } from '../portfolioImages';
import '../styles/Engineer.css';
import Gallery from 'react-photo-gallery';

function Engineer() {

  return (
    <section id="Engineer">
          <div className="card-container">
            <a className="card" href="https://lets-generate-a-playlist.vercel.app/">
              {/* <i className="icon fas fa-tools"></i>  */}
              <p className="card-title">Give Me an Word, Get a Playlist</p>
              </a>
            <div className="card">
            {/* <i className="icon fas fa-tools"></i>  */}
              <p className="card-title">App Two</p>
            </div>
            <div className="card">
            {/* <i className="icon fas fa-tools"></i>  */}
              <p className="card-title">App Three</p>
            </div>
            </div>
    </section>
  );
}

export default Engineer;

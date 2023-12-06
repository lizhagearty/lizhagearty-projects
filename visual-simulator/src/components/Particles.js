// src/ParticleComponent.js
import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const ParticleComponent = () => {
  const sketchRef = useRef();
  let systems = [];
  let particleImage;

  useEffect(() => {
    // Define the sketch
    const sketch = (p) => {
        p.preload = () => {
            // Load the PNG image from the public folder
            particleImage = p.loadImage('/logo512.png');
          };
      p.setup = () => {
        p.createCanvas(710, 400);
        systems = [];
      };

      p.draw = () => {
        p.background('#f844b0');
        for (let i = 0; i < systems.length; i++) {
          systems[i].run(p);
          systems[i].addParticle(p);
        }
        if (systems.length === 0) {
          p.fill(255);
          p.textAlign(p.CENTER);
          p.textSize(32);
        //   p.text("click mouse to add particle systems", p.width / 2, p.height / 2);
        }
      };

      p.mousePressed = () => {
        systems.push(new ParticleSystem(p, p.createVector(p.mouseX, p.mouseY)));
      };
    };

    // Create a new p5 instance
    let myp5 = new p5(sketch, sketchRef.current);

    return () => {
      myp5.remove();
    };
  }, []);

  // Particle classes
  class Particle {
    constructor(p, position) {
      this.p = p;
      this.acceleration = p.createVector(0, 0.05);
      this.velocity = p.createVector(p.random(-1, 1), p.random(-1, 0));
      this.position = position.copy();
      this.lifespan = 255.0;
    }

    run() {
      this.update();
      this.display();
    }

    update() {
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
      this.lifespan -= 2;
    }

    display() {
        this.p.image(particleImage, this.position.x, this.position.y, 20, 20);
    }

    isDead() {
      return this.lifespan < 0;
    }
  }

  class ParticleSystem {
    constructor(p, position) {
      this.p = p;
      this.origin = position.copy();
      this.particles = [];
    }

    addParticle() {
      if (this.p.int(this.p.random(0, 2)) === 0) {
        this.particles.push(new Particle(this.p, this.origin));
      } else {
        this.particles.push(new CrazyParticle(this.p, this.origin));
      }
    }

    run() {
      for (let i = this.particles.length - 1; i >= 0; i--) {
        let p = this.particles[i];
        p.run();
        if (p.isDead()) {
          this.particles.splice(i, 1);
        }
      }
    }
  }

  class CrazyParticle extends Particle {
    constructor(p, origin) {
      super(p, origin);
      this.theta = 0.0;
    }

    update() {
      super.update();
      this.theta += (this.velocity.x * this.velocity.mag()) / 10.0;
    }

    display() {
        super.display();
        // this.p.image(particleImage, this.position.x, this.position.y, 40, 40);

      }
  }

  return <div ref={sketchRef}></div>;
};

export default ParticleComponent;

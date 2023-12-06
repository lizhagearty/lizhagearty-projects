// src/PhysicsCircle.js
import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import Sketch from 'react-p5';

let engine;
let world;
let circles = [];
let boundaries = [];

const PhysicsCircle = () => {
  const p5ContainerRef = useRef();

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    
    engine = Matter.Engine.create();
    world = engine.world;
    world.gravity.y = 1;

    // Add boundaries (e.g., ground)
    // const ground = Matter.Bodies.rectangle(p5.width / 2, p5.height, p5.width, 20, { isStatic: true });
    // boundaries.push(ground);
    // Add walls
  const wallOptions = { isStatic: true, render: { visible: false } }; // Walls won't be visible
  let ground = Matter.Bodies.rectangle(p5.width / 2, p5.height - 200, p5.width, 20, wallOptions);
  let ceiling = Matter.Bodies.rectangle(p5.width / 2, 0, p5.width, 20, wallOptions);
  let leftWall = Matter.Bodies.rectangle(0, p5.height / 2, 20, p5.height, wallOptions);
  let rightWall = Matter.Bodies.rectangle(p5.width, p5.height / 2, 20, p5.height, wallOptions);

  Matter.World.add(world, [ground, ceiling, leftWall, rightWall]);
  };

  const draw = (p5) => {
    p5.background('#f844b0'); 
    Matter.Engine.update(engine);

    // Render circles
    for (let circle of circles) {
      p5.push();
      p5.fill(255);
      p5.circle(circle.position.x, circle.position.y, circle.circleRadius * 2);
      p5.pop();
    }

    // Render boundaries
    p5.push();
    p5.fill(0);
    for (let boundary of boundaries) {
      p5.rect(boundary.position.x, boundary.position.y, p5.width, 20);
    }
    p5.pop();
  };

  const mousePressed = (p5) => {
    // Create a circle body at the mouse position
    let circle = Matter.Bodies.circle(p5.mouseX, p5.mouseY, 33, { restitution: 0.6 });
    circles.push(circle);
    Matter.World.add(world, circle);
  };

  const mouseReleased = (p5) => {
    // When the mouse is released, apply a force to make the circle fall
    for (let circle of circles) {
      Matter.Body.setVelocity(circle, { x: 0, y: 5 });
    }
  };

  useEffect(() => {
    window.addEventListener('deviceorientation', handleOrientation, true);

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    }
  }, []);

  const handleOrientation = (event) => {
    // Adjust gravity according to device orientation
    let x = event.gamma; // In degree in the range [-90,90]
    let y = event.beta; // In degree in the range [-180,180]

    Matter.World.gravity.x = x * 0.01;
    Matter.World.gravity.y = y * 0.01;
  };

  return <Sketch setup={setup} draw={draw} mousePressed={mousePressed} mouseReleased={mouseReleased} ref={p5ContainerRef} />;
};

export default PhysicsCircle;

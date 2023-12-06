// src/RippleEffect.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const RippleEffect = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Scene setup...
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);

        // Set the background color of the canvas
        const pinkColor = new THREE.Color(0xf844b0); // Color in hexadecimal
        renderer.setClearColor(pinkColor, 1); // Setting the clear color to pink

        mountRef.current.appendChild(renderer.domElement);

        // Custom Shader Material
        const vertexShader = `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `;

        const fragmentShader = `
            uniform vec2 u_mouse;
            uniform float u_time;
            varying vec2 vUv;
        
            void main() {
                float dist = distance(u_mouse, vUv);
                float ripple = sin(dist * 10.0 - u_time * 5.0) * 0.5 + 0.5;
        
                // Pink color
                vec3 pink = vec3(0.973, 0.267, 0.690); // RGB for #f844b0
        
                // White color
                vec3 white = vec3(1.0, 1.0, 1.0);
        
                // Blend the colors based on the ripple strength
                vec3 color = mix(pink, white, ripple);
        
                gl_FragColor = vec4(color, 1.0);
            }
        `;

        const material = new THREE.ShaderMaterial({
            uniforms: {
                u_mouse: { value: new THREE.Vector2(-1, -1) },
                u_time: { value: 0 }
            },
            vertexShader,
            fragmentShader
        });

        const plane = new THREE.Mesh(new THREE.PlaneGeometry(5, 5, 32, 32), material);
        scene.add(plane);

        // Mouse Movement Handler
        const onMouseMove = (event) => {
            material.uniforms.u_mouse.value.x = (event.clientX / window.innerWidth) * 2 - 1;
            material.uniforms.u_mouse.value.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        document.addEventListener('mousemove', onMouseMove);


        // // Mouse and Time Uniforms
        // document.addEventListener('mousemove', (event) => {
        //     material.uniforms.u_mouse.value.x = (event.clientX / window.innerWidth) * 2 - 1;
        //     material.uniforms.u_mouse.value.y = -(event.clientY / window.innerHeight) * 2 + 1;
        // });

        // Animation Loop...
        const animate = () => {
            requestAnimationFrame(animate);
            material.uniforms.u_time.value += 0.05;
            renderer.render(scene, camera);
        };
        animate();

        // Cleanup...
        return () => {
            mountRef.current.removeChild(renderer.domElement);
            document.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    return <div ref={mountRef} style={{ width: '100vw', height: '100vh' }} />;
};

export default RippleEffect;

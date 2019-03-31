import React, { useEffect } from "react";
import Layout from "./Layout";
import * as THREE from "three";

const Component = () => {
  let camera, scene, renderer, element, element3d;
  let containerRef = React.createRef();

  const animate = () => {
    requestAnimationFrame(animate);
    element3d.rotation.x += 0.005;
    element3d.rotation.y += 0.01;
    renderer.render(scene, camera);
  };

  useEffect(() => {
    camera = new THREE.PerspectiveCamera(45, 1, 1, 5000);
    camera.position.set(0, 0, 0);
    camera.lookAt(new THREE.Vector3(0, 0, -1000));
    scene = new THREE.Scene();
    
    element = document.createElement('div');
    element.innerHTML = 'Plain text inside a div.';
    element.className = 'three-div';
    
    //CSS3D renderer
    renderer = new (window.THREE).CSS3DRenderer();
    renderer.setSize(512, 512);
    
    element3d = new (window.THREE).CSS3DObject(element);
    element3d.position.x = 0;
    element3d.position.y = 0;
    element3d.position.z = -1000;
    scene.add(element3d);
    renderer.render(scene, camera);
    containerRef.current.appendChild(renderer.domElement);
    animate();
  }, []);

  return (
    <Layout>
      <p>CSS</p>
      <div ref={containerRef} />
    </Layout>
  );
};

export default Component;

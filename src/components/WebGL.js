import React, { useEffect } from "react";
import Layout from "./Layout";
import * as THREE from "three";

const Component = () => {
  let camera, scene, renderer, mesh, texture, geometry, material;
  let containerRef = React.createRef();

  const animate = () => {
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.01;
    renderer.render(scene, camera);
  };

  useEffect(() => {
    camera = new THREE.PerspectiveCamera(70, 1, 1, 1000);
    camera.position.z = 20;
    scene = new THREE.Scene();
    texture = new THREE.TextureLoader().load(
      "https://threejs.org/examples/textures/crate.gif"
    );
    geometry = new THREE.BoxBufferGeometry(10, 10, 10);
    material = new THREE.MeshBasicMaterial({ map: texture });
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(512, 512);
    containerRef.current.appendChild(renderer.domElement);
    animate();
  }, []);

  return (
    <Layout>
      <p>WebGL</p>
      <div ref={containerRef} />
    </Layout>
  );
};

export default Component;

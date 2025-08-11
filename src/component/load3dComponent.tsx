import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function Load3dComponent() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    // Lighting
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;
    controls.minDistance = 1.8;
    controls.maxDistance = 2.0;
    controls.minPolarAngle = Math.PI / 2; // kunci sudut vertikal
    controls.maxPolarAngle = Math.PI / 2;
    controls.autoRotate = true; // aktifkan rotasi otomatis
    controls.autoRotateSpeed = 1; // kecepatan rotasi
    controls.target.set(0, 0, 0);

    // Load OBJ
    const loader = new OBJLoader();
    loader.load(
      "/assets/base.obj",
      (obj) => {
        // Posisikan di tengah
        const box = new THREE.Box3().setFromObject(obj);
        const center = box.getCenter(new THREE.Vector3());
        obj.position.sub(center);
        scene.add(obj);
      },
      (xhr) => console.log((xhr.loaded / xhr.total) * 100 + "% loaded"),
      (error) => console.error("An error happened", error)
    );

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update(); // update kontrol (auto rotate)
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      currentMount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ width: "100%", minWidth: "30vh", height: "50vh" }}
    />
  );
}

export default Load3dComponent;

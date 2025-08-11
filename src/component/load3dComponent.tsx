import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

function Load3dComponent() {
  const mountRef = useRef<HTMLDivElement>(null); // Explicitly type the ref

  useEffect(() => {
    // --- GUARD CLAUSE ---
    // If the ref is not linked to the div yet, do nothing.
    if (!mountRef.current) {
      return;
    }

    // Now TypeScript knows mountRef.current is an HTMLDivElement
    const currentMount = mountRef.current;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      currentMount.clientWidth / currentMount.clientHeight, // No more error here
      0.1,
      1000 // Increased far plane for potentially larger models
    );
    camera.position.set(0, 0, 5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Softer ambient light
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;
    controls.minDistance = 1.8;
    controls.maxDistance = 2.0;
    controls.minPolarAngle = Math.PI / 2;
    controls.maxPolarAngle = Math.PI / 2;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1;
    controls.target.set(0, 0, 0);

    // Load OBJ
    const loader = new OBJLoader();
    loader.load(
      "/assets/base.obj",
      (obj) => {
        // Center the object
        const box = new THREE.Box3().setFromObject(obj);
        const center = box.getCenter(new THREE.Vector3());
        obj.position.sub(center);
        scene.add(obj);
      },
      (xhr) => console.log((xhr.loaded / xhr.total) * 100 + "% loaded"),
      (error) => console.error("An error happened", error)
    );

    // --- BEST PRACTICE: Handle Window Resize ---
    const handleResize = () => {
      if (!mountRef.current) return;
      // Update camera aspect ratio
      camera.aspect =
        mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      // Update renderer size
      renderer.setSize(
        mountRef.current.clientWidth,
        mountRef.current.clientHeight
      );
    };

    window.addEventListener("resize", handleResize);

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
      // Check if currentMount exists before trying to remove a child from it
      if (currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div
      ref={mountRef}
      style={{ width: "100%", minWidth: "30vh", height: "50vh" }}
    />
  );
}

export default Load3dComponent;

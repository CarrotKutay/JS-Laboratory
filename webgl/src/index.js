import * as THREE from 'three';

//setup camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

//creating Geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);

//creating Material
const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00
});

//setup renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

//adding canvas to the scene
document.body.appendChild(renderer.domElement);

//setup scene
const scene = new THREE.Scene();
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();
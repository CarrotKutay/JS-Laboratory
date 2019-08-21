const THREE = require('three');
import {
    OrbitControls
} from 'three/examples/jsm/controls/OrbitControls';
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
const renderer = new THREE.WebGLRenderer({
    antialias: 'true'
});
renderer.setSize(window.innerWidth, window.innerHeight);


//adding canvas to the scene
document.body.appendChild(renderer.domElement);

//setup scene
const scene = new THREE.Scene();
const cube = new THREE.Mesh(geometry, material);

//setup Orbit Controls
let controls = new OrbitControls(camera, renderer.domElement);
controls.target = cube.getWorldPosition(cube.position);
controls.autoRotateSpeed = 5;
controls.autoRotate = true;
controls.update();

//setup Lights
const light = new THREE.PointLight(0xff0000, 1, 100);
light.position.set(50, 50, 50);

scene.add(light);
scene.add(cube);


function animate() {
    requestAnimationFrame(animate);

    //rotation
    //cube.rotation.x += 0.01;
    //cube.rotation.y += 0.01;

    //rotating around cube
    controls.update();

    renderer.render(scene, camera);
}
animate();
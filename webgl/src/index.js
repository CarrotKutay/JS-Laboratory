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
const material = new THREE.MeshStandardMaterial({
    color: 0xbc0909
});

//setup renderer
const renderer = new THREE.WebGLRenderer({
    antialias: 'true',
});
renderer.setSize(window.innerWidth, window.innerHeight);


//adding canvas to the scene
document.body.appendChild(renderer.domElement);

//setup scene
const scene = new THREE.Scene();

//setup cube
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

//setup Orbit Controls
let controls = new OrbitControls(camera, renderer.domElement);
controls.target = cube.getWorldPosition(cube.position);
controls.autoRotateSpeed = 5;
controls.autoRotate = true;
controls.update();

//setup Lights
let sphere = new THREE.SphereBufferGeometry(0.5, 16, 8);
//lights
let light1 = new THREE.PointLight(0xff0040, 2, 50);
light1.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({
    color: 0xff0040
})));
scene.add(light1);
let light2 = new THREE.PointLight(0x0040ff, 2, 50);
light2.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({
    color: 0x0040ff
})));
scene.add(light2);
let light3 = new THREE.PointLight(0x80ff80, 2, 50);
light3.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({
    color: 0x80ff80
})));
scene.add(light3);
let light4 = new THREE.PointLight(0xffaa00, 2, 50);
light4.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({
    color: 0xffaa00
})));
scene.add(light4);


function animate() {
    requestAnimationFrame(animate);
    moveLight();
    //rotating around cube
    controls.update();

    renderer.render(scene, camera);
}

function moveLight() {
    let time = Date.now() * 0.0005;
    light1.position.x = Math.sin(time * 0.7) * 30;
    light1.position.y = Math.cos(time * 0.5) * 40;
    light1.position.z = Math.cos(time * 0.3) * 30;
    light2.position.x = Math.cos(time * 0.3) * 30;
    light2.position.y = Math.sin(time * 0.5) * 40;
    light2.position.z = Math.sin(time * 0.7) * 30;
    light3.position.x = Math.sin(time * 0.7) * 30;
    light3.position.y = Math.cos(time * 0.3) * 40;
    light3.position.z = Math.sin(time * 0.5) * 30;
    light4.position.x = Math.sin(time * 0.3) * 30;
    light4.position.y = Math.cos(time * 0.7) * 40;
    light4.position.z = Math.sin(time * 0.5) * 30;

}
animate();
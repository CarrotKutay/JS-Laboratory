import {
    OrbitControls
} from 'three/examples/jsm/controls/OrbitControls';
//setup camera
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

//creating Geometry
const geometry = new BoxGeometry(1, 1, 1);

//creating Material
const material = new MeshBasicMaterial({
    color: 0x00ff00
});

//setup renderer
const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

//adding canvas to the scene
document.body.appendChild(renderer.domElement);

//setup scene
const scene = new Scene();
const cube = new Mesh(geometry, material);
let controls = new OrbitControls(camera, renderer.domElement);

camera.position.set(0, 20, 100);
controls.update();

scene.add(cube);


function animate() {
    requestAnimationFrame(animate);

    //rotation
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    //rotating around cube
    controls.update();

    renderer.render(scene, camera);
}
animate();
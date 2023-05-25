var canvas = document.createElement('canvas');
canvas.width = 512;
canvas.height = 512;

var context = canvas.getContext('2d');

context.fillStyle = '#ffff00';
context.fillRect(0, 0, canvas.width, canvas.height);

var texture = new THREE.CanvasTexture(canvas);

var material = new THREE.MeshBasicMaterial({ map: texture });

var geometry = new THREE.BoxGeometry(1, 1, 1);
var mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);
renderer.render(scene, camera);

// -------------------------------------------------------------

var texture = new THREE.CompressedTexture(
    data,  // Data tekstur terkompresi
    width, // Lebar tekstur
    height // Tinggi tekstur
);

var material = new THREE.MeshBasicMaterial({ map: texture });

var geometry = new THREE.BoxGeometry();
var mesh = new THREE.Mesh(geometry, material);

// -------------------------------------------------------------

// Example of using CompressedTexture
const loader = new THREE.CompressedTextureLoader();
loader.load(
    'textures/compressed-texture.dds',
    function (texture) {
        const material = new THREE.MeshBasicMaterial({ map: texture });
        // Create a mesh and apply the compressed texture
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
    },
    undefined,
    function (error) {
        console.error('Error loading compressed texture', error);
    }
);

// Example of using CompressedTextureArray
const loader = new THREE.CompressedTextureLoader();
loader.load(
    [
        'textures/layer1.dds',
        'textures/layer2.dds',
        'textures/layer3.dds'
    ],
    function (textures) {
        const textureArray = new THREE.CompressedTextureArray(textures);
        const material = new THREE.MeshBasicMaterial({ map: textureArray });
        // Create a mesh and apply the compressed array texture
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
    },
    undefined,
    function (error) {
        console.error('Error loading compressed array texture', error);
    }
);
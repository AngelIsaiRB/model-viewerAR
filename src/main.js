const models = ['./assets/Arte 3D/botella/scene.gltf',
 './assets/Arte 3D/cube/cube.gltf',
 './assets/Arte 3D/torus/torus.gltf',
 './assets/Arte 3D/figure1/figure1.gltf',
 'https://poly.googleusercontent.com/downloads/c/fp/1600138194105550/5Q7f-k_7lFM/2TltVmYlQcm/model.gltf',
];
const posters = ["url('./assets/Arte 3D/botella/img/botella.png')",
 "url('./assets/Arte 3D/cube/cube.png')",
 "url('./assets/Arte 3D/torus/torus.png')",
 "url('./assets/Arte 3D/figure1/figure1.png')",
 "url('https://firebasestorage.googleapis.com/v0/b/web-ar-d9581.appspot.com/o/images%2F5Q7f-k_7lFM%2FUX371.png?alt=media&token=0fd7e163-0215-4ad9-9189-2f7ed2e6531b')",
]
let count=0;
const toggleModel = document.querySelector('#model-viewer');

document.querySelector("#model-viewer").addEventListener('ar-status', (event) => {
    if(event.detail.status === 'failed'){
        const error = document.querySelector("#error");
        error.classList.remove('hide');
        error.addEventListener('transitionend',(event) => {
            error.classList.add('hide');
        });
    }
});
document.querySelector("#next").onclick = () =>{
    count++;
    if(count >= 5 ) count = 0;
    document.querySelector("#lazy-load-poster").style.backgroundImage = posters[count]
    toggleModel.setAttribute('src', `${models[count]}`)        
    
}
document.querySelector("#back").onclick = () =>{
    count -= 1 ;
    if(count <= -1 ) count = 4;
    document.querySelector("#lazy-load-poster").style.backgroundImage = posters[count]
    toggleModel.setAttribute('src', `${models[count]}`)
}

// const toggleModel = document.querySelector('#model-viewer');
// let j = 0;
// setInterval(() => toggleModel.setAttribute('src', `./assets/Arte 3D/${models[j++ % 2]}`), 2000);
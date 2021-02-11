// import { App } from './App';

// const app = new App(document.querySelector('#game-container'));

// window.addEventListener('resize', () => {
// 	app.onResize();
// });
const models = ['botella/scene.gltf', 'cube/cube.gltf', 'torus/torus.gltf'];
const posters = ["url('./assets/Arte 3D/botella/img/botella.png')", "url('./assets/Arte 3D/cube/cube.png')","url('./assets/Arte 3D/torus/torus.png')"]
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
    if(count >= 3 ) count = 0;
    document.querySelector("#lazy-load-poster").style.backgroundImage = posters[count]
    toggleModel.setAttribute('src', `./assets/Arte 3D/${models[count]}`)
}
document.querySelector("#back").onclick = () =>{
    count -= 1 ;
    if(count <= -1 ) count = 2;
    document.querySelector("#lazy-load-poster").style.backgroundImage = posters[count]
    toggleModel.setAttribute('src', `./assets/Arte 3D/${models[count]}`)
}

// const toggleModel = document.querySelector('#model-viewer');
// let j = 0;
// setInterval(() => toggleModel.setAttribute('src', `./assets/Arte 3D/${models[j++ % 2]}`), 2000);
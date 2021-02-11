// import { App } from './App';

// const app = new App(document.querySelector('#game-container'));

// window.addEventListener('resize', () => {
// 	app.onResize();
// });
document.querySelector("#model-viewer").addEventListener('ar-status', (event) => {
    if(event.detail.status === 'failed'){
        const error = document.querySelector("#error");
        error.classList.remove('hide');
        error.addEventListener('transitionend',(event) => {
            error.classList.add('hide');
        });
    }
});
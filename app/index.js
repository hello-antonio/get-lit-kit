import {render} from 'lit-html';
import {App} from './App.js';
import {router} from './router.js';
import './fonts.js';

const root = document.getElementById('app');

render(App(), root);

// CALL ROUTER. OPTIONAL REMOVE IF NOT USING A ROUTER.
router();

if (module.hot) {
    module.hot.dispose(function () {
        // module is about to be replaced
        window.location.reload();
    })

    module.hot.accept(function () {
        // module or one of its dependencies was just updated
    })
}
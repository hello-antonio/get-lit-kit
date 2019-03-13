import { html } from 'lit-html';
import { Header } from './components/00-core/HeaderCore.js';
import { Footer } from './components/00-core/FooterCore.js';
import { Router } from './router.js';

// App template
export const App = () => {
    return html `
        ${Header()}
        <main class="main" id=${Router.rootId}>
        </main>
        ${Footer()}
    `;    
}

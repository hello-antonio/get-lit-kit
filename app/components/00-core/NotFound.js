import {html} from 'lit-html';

export const NotFound = () => html`
    <section class="container">
        <h2>404 - Page Not Found</h2>
        <a href="/">Back to home</a>
    </section>
`;

export const template = () => NotFound();
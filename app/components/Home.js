import {
    html
} from 'lit-html';

export const Home = () => html `
    <div class="container banner">
        <h1>Web Starter</h1>
        <p>Build a website with this awesome tools, zero configuration, start running fast thanks to ParcelJS &amp; lit-HTML.
        <br>
        <a class="button botton--primary" href="https://github.com/gioalo/parceljs-lit-html-starter">Get Started</a>
        </p>
    </div>
`;

export const template = () => Home();
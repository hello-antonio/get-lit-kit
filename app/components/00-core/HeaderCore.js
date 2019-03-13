import {html} from 'lit-html';
import {Nav} from './NavigationCore.js';

export const Header = () => html `
    <header class="header">
        <div class="container">
            <div class="header__nav">
                <div class="header__nav__title">v1.0 🦄</div>
                ${Nav()}
            </div>
        </div>
    </header>`;
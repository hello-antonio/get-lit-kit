import {
    render
} from 'lit-html';
import page from 'page';
// IMPORT SITE PAGES HERE
import {
    NotFound
} from './components/00-core/NotFound.js';
import {
    Home
} from './components/Home.js';


// Add routes 
export const Router = {
    rootId: 'root',
    routes: [{
            name: 'home',
            path: '/',
            title: 'Get Started | ParcelJS & lit-HTML',
            module: {
                name: Home()
            }
        },
        {
            name: 'not found',
            path: '*',
            title: 'Not Found',
            module: {
                name: NotFound()
            }
        },
    ]
};

/**
 * Generate page
 * @param {*} path
 */
export const setPage = (path) => {
    let route = Router.routes.find(item => item.path === path);
    let template = route.module.name;

    /**
     * Make sure you have initialize the rootId on the App.js template element, 
     * otherwise it won't work, I know it's weird.
     * The root element is where the router injects the page template.
     */
    let root = document.getElementById(Router.rootId);

    try {
        page(path, () => {
            document.title = route.title;
            render(template, root);
        });
    } catch (error) {
        console.error('[ROUTER]', error);
    }
};

/**
 * Initialize site router
 */
export const router = () => {
    setPage('/'); // Home page defaults

    // Add routes here
    setPage('*'); // Detect 404 not found page

    // Initialize router
    page.start(); // DO NOT REMOVE WILL BREAK ROUTER.
};
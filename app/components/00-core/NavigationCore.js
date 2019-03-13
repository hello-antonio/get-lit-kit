import {html} from 'lit-html';

export const Nav = ()=>{
    const data = [
        {name:'Get Started',path:'https://github.com/gioalo/parceljs-lit-html-starter', target:'_blank'},
        {name:'GitHub',path:'https://github.com/gioalo/', target:'_blank'},
    ];
    
    let current, last = null;
    
    const handleLinkCliked = (e)=>{
        current = e.target;
        if(last !== current) {
            if(last !== null) {
                last.classList.remove('link-active');
            }
            current.classList.add('link-active');
            last = current;
        }
    }

    return html `
        <nav class="nav">
            <ul>
                ${ data.map( link => html`<li><a @click=${handleLinkCliked} href="${link.path}" target=${link.target ? link.target : ''}>${link.name}</a></li>`)}
            </ul>
        </nav>
    `;
}
// Import stylesheets
import './style.css';

// Da' errore, non so perche', ma funziona.
import { immediate, statement } from './file1';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');

appDiv.innerHTML = 
    `<h1>` + immediate + `</h1>` +
    `<h2>` + statement + `</h2>`;
// Import stylesheets
import './style.css';

// Angular uses MODULE RESOLUTION at compile-time to to find the 
// intended module to import.
// The .ts extension is not needed, as the TS is gonna be transpiled into JS.
import { immediate, statement, duplicate } from './modules/module';

// An ALIAS can be used when 2 different modules export a type with the same name.
import { duplicate as duplicateAlias } from './modules/alias';

// Or it's possible to import all types from a module into a variable.
import * as types from './modules/importAll';

// Rollup Exports into Barrels
// ...

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');

appDiv.innerHTML = 
    `<h1>` + immediate + `</h1>` +
    `<h2>` + statement + `</h2>` +
    `<h3>` + duplicate + `</h3>` +
    `<h4>` + duplicateAlias + `</h4>` +
    `<h5>` + types.duplicate + `</h5>`;
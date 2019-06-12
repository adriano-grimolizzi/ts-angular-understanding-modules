// In TS, a module is simply a file that imports or exports something

// Export at declaration time
export var immediate : string = "Exported Immediately!";

export var duplicate : string = "module.ts's duplicate...";

// Export as a single statement
var statement : string = "Exported as a statement...";

export { statement }
"use strict";
class Singleton {
    // Constructor privado
    constructor() {
        // Inicialización del singleton
    }
    // Método estático para obtener la instancia
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
    // Método de ejemplo
    someMethod() {
        console.log('Método del singleton');
    }
}
// Intentar crear una instancia usando new dará un error:
// const singleton = new Singleton(); // Error: Constructor of class 'Singleton' is private
// Obtener la única instancia del Singleton
const singleton = Singleton.getInstance();
singleton.someMethod(); // Output: Método del singleton

/**
 * Clase encargada de contener metodos utilitarios.
 */
class Utils {
    /**
     * Metodo encargado de obtener propiedades de un objeto.
     * @param obj Objeto del cual se obtendran las propiedades.
     * @returns {string[]} Array con las propiedades del objeto.
     */
    getProperties(obj) {
        return Object.getOwnPropertyNames(obj);
    }
}

export {Utils};
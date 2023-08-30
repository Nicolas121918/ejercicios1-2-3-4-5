const { yellow, bgRed, bgBlue } = require("colors");

const functions = {};

const signo = (numero) => {
    if (numero >= 0) {
        return 'positivo';
    } else {
        return 'negativo';
    }
};

const encontrocaracter = (caracter) => {
    const datos = ['A', 'B', 'C', 'D', 'E'];
    if (datos.includes(caracter)) {
        return "se encuentra";
    } else {
        return "no se encuentra en los datos almacenados";
    }
};

const interfazSigno = (numero) => {
    console.log(`*************************** FUNCIÓN SIGNO *******`.bgMagenta);
    console.log(`*********** EL NÚMERO ${numero} ES ${signo(numero)} ************`);
    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~________________________\n`.bgCyan);
};

const interfazEncontroCaracter = (caracter) => {
    console.log(`~             FUNCIÓN ENCONTRAR CARÁCTER           ~`.bgMagenta);
    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
    console.log(`~ EL CARÁCTER ${caracter.toUpperCase()} ${encontrocaracter(caracter.toUpperCase())} ~`);
    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~_________________________\n`.bgCyan);
};

const encontroproducto = (PRODUCTO) => {
    const datos = ['cerveza', 'gaseosa', 'vino', 'vive 100', 'spedmax'];
    if (datos.includes(PRODUCTO.toLowerCase())) {
        return "DEBE DIRIGIRSE A LA BARRA".green;
    } else {
        return "DEBE DIRIGIRSE A LA TIENDA".green;
    }
};

const interfazEncontroproducto = (PRODUCTO) => {
    console.log(`~           FUNCIÓN ENCONTRAR PRODUCTO          ~`.red.bgYellow);
    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
    console.log(`~ EL CLIENTE REQUIERE ${PRODUCTO.toUpperCase()} ${encontroproducto(PRODUCTO)}   ~`);
    console.log(`/////////////////////////////////////////////////////////////////////\n`.red);
};

functions.signo = signo;
functions.interfazSigno = interfazSigno;
functions.encontrocaracter = encontrocaracter;
functions.interfazEncontroCaracter = interfazEncontroCaracter;
functions.encontroproducto = encontroproducto;
functions.interfazEncontroproducto = interfazEncontroproducto;

function analizarMedioTransporte(medio) {
    const medioLowerCase = medio.toLowerCase();

    const mediosValidos = ['avión', 'flota', 'carro', 'bicicleta'];

    const descripciones = {
        avión: 'RECUERDA TENER DINERO PARA EL PASAJE',
        flota: 'RECUERDA TENER DINERO PARA EL PASAJE',
        carro: 'RECUERDA LLEVAR ROPA ADECUADA',
        bicicleta: 'RECUERDA LLEVAR ROPA ADECUADA',
    };

    if (mediosValidos.includes(medioLowerCase)) {
        console.log(`    SI VAS A VIAJAR EN ${medioLowerCase}`.bgMagenta);
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'.magenta);
        console.log(descripciones[medioLowerCase].bgMagenta);
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'.magenta);
    } else {
        console.log('MEDIO DE TRANSPORTE NO RECONOCIDO.'.bgMagenta);
    }
}

function facturaproducto(precioBase, descuentoPorcentaje, cantidad) {
    if (descuentoPorcentaje < 0 || descuentoPorcentaje > 100) {
        return "El descuento debe estar entre 0 y 100 por ciento.";
    }

    const descuento = precioBase * (descuentoPorcentaje / 100);
    const precioConDescuento = precioBase - descuento;
    const precioTotal = precioConDescuento * cantidad;

    return {
        precioTotal,
        descuento
    };
}

module.exports = {
    ...functions,
    analizarMedioTransporte,
    facturaproducto
};

require('colors');

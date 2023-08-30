const colors = require('colors');
const functions = require('./proy_modules/functions.js');

const main = async () => {
    console.clear();

    const numero = -652;
    functions.interfazSigno(numero);

    const caracter1 = 'Q';
    functions.interfazEncontroCaracter(caracter1);

    const caracter2 = 'BONICE';
    functions.interfazEncontroproducto(caracter2);

    const mediosDeTransporte = ['avion', 'bicicleta', 'carro', 'flota'];

    for (const medio of mediosDeTransporte) {
        functions.analizarMedioTransporte(medio);
    }

    const precioBaseProducto = 6400;
    const descuentoProducto = 5;
    const cantidadProducto = 4;

    const { precioTotal, descuento } = functions.facturaproducto(precioBaseProducto, descuentoProducto, cantidadProducto);

    console.log('********************************************'.bgCyan);
    console.log(colors.white(`EL PRECIO DEL PRODUCTO ES: ${precioBaseProducto}`));
    console.log('********************************************'.underline.bgRed);
    console.log(colors.white(`EL DESCUENTO APLICADO ES: ${descuento}`));
    console.log('********************************************'.underline.bgRed);
    console.log(colors.white(`LA CANTIDAD DE PRODUCTOS SON: ${cantidadProducto}`));
    console.log('********************************************'.underline.bgRed);
    console.log(colors.white(`EL PRECIO TOTAL DE VENTA ES: ${precioTotal}`));
    console.log('********************************************'.bgCyan);
};

main();

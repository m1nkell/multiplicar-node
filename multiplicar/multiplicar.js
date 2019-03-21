const fs = require('fs');
const colors = require('colors');

let baseMult = (base, limite) => {

    return new Promise((resolve, reject) => {

        let data = '';

        if (!Number(base)) {
            console.log(`El valor ingresado ${base} no es un numero.`);
            return;
        }

        for (let a = 1; a <= limite; a++) {
            data += `${base} * ${a} = ${base*a};\n`;
        }



        fs.writeFile(`../tablas/base_${base}-al-${limite}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`Base-${base}-al-${limite}.txt`);
            }

        });
    });
};

let listarMult = (base, limite = 10) => {

    console.log(`=============================`.green);
    console.log(`TABLA DEL ${base}`.red);
    console.log(`=============================`.green);    

    for (let a = 1; a <= limite; a++) {
        console.log(`${base} * ${a} = ${base*a};`);
    }

}

module.exports = {
    baseMult,
    listarMult
}
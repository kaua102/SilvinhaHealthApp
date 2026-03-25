export const calcularPesoIdeal = (altura, sexo) => {
    const alturaCm = altura * 100;
    let pesoIdeal = 0;

    if (sexo === 'masculino'){
        pesoIdeal = 50 + 2.3 * ((alturaCm - 152.4) / 2.54);
    } else {
        pesoIdeal = 45.5 + 2.3 * ((alturaCm - 152.4) / 2.54)
    }

    return pesoIdeal.toFixed(1);
};

export const calcularAgua = (peso) => {
    const aguaML = peso * 35;
    const aguaL = aguaML / 1000;
    return{
        ml: Math.round(aguaML),
        l: aguaL.toFixed(l)
    };
};

export const calcularTMB = (peso, altura, idade, sexo) => {
    const alturaCm = altura * 100;
    let tmb = 0;

    if (sexo === 'masculino'){
        tmb = (10 * peso) + (6.25 * alturaCm) - (5 * idade) + 5;
    } else {
        tmb = (10 * peso) + (6.25 * alturaCm) - (5 * idade) - 161;
    }

    return Math.round(tmb);
};
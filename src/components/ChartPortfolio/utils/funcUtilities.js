import moment from "moment";

export const formatDateServerResponse = "YYYY-MM-DD";

export const generateArrayCreateAt = (data) => {
    const max = Math.max(...data)
    const min = Math.min(...data)

    const years = []
    for (let i = min; i <= max; i++) {
        years.push(i);
    }
    return years;
}


export const noDuplicateSimpleArray = (data) => {
    const dataArr = new Set(data);
    let listUnique = [...dataArr];
    const result = sortDataSimpleArray(listUnique)
    return result
}

export const sortDataSimpleArray = (data) => {
    data.sort(function (a, b) {
        return a - b;
    });
    return data
}

export const getYearsList = (minYear, strategy) => {    // formula para el strategy
    const max = minYear + strategy;
    const min = minYear;

    const years = []
    for (let i = min; i <= max; i++) {
        years.push(i)
    }
    return years
}

export const getSizeBooble = (e) => {
    const minPx = 10;                   // en pixeles cual es el tamaño minimo deseado para una burbuja
    const maxPX = 100;                  // en pixeles cual es el tamaño maximo deseado para una burbuja
    const valorMaximoPosible = 100      // cual es el valor de impacto (tamaño) maximo posible para un portafolio
    let size = ((e * maxPX) / valorMaximoPosible)
    if (size < minPx) {
        size = minPx
    }
    return size
}

export const getNumberYear = (date) => {   // espera recibir una fecha.
    const numberYear = parseInt(moment(date, formatDateServerResponse).format("YYYY")) || 0;
    const numberDay = parseInt(moment(date, formatDateServerResponse).format("DDD")) || 0;
    const fractionDay = numberDay / 365                 // se considera 365 porque aunque fuera 366 la diferencia sería infima
    const fractionYears = (numberYear + fractionDay)    // esta serí la fecha exacta en años fraccionados
    return fractionYears;
}
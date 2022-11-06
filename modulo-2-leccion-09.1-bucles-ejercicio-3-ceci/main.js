'use strict';

/* 3. Previsión para ver la Luna del cazador
Cada 3 años se produce una luna llena completamente iluminada por el Sol durante unos minutos. Esta luna es conocida como la “Luna del cazador”. En el año 2017 se pudo ver esta luna el 5 de octubre y mucha gente se la perdió. Para que no nos pase los siguientes años vamos a crear un código que muestre en consola cuándo serán las 15 próximas lunas. 

LISTADO DE ACCIONES (algoritmo):

    - hubo luna del cazador el 5 de octubre 2017
    - Es cada 3 años
    - queremos saber las próximas 15
*/

const moonYear = 2017;
//Al bucle le pido <= 45 porque quiero 15 lunas (y son períodos de 3)

for (let years = 0; years <= 45; years += 3) {
    let newMoon = moonYear + years;
    console.log(`Habrá luna del cazador en el año ${newMoon}`);
} 

/* DEVUELVE
Habrá luna del cazador en el año 2017
Habrá luna del cazador en el año 2020
Habrá luna del cazador en el año 2023
Habrá luna del cazador en el año 2026
Habrá luna del cazador en el año 2029
Habrá luna del cazador en el año 2032
Habrá luna del cazador en el año 2035
Habrá luna del cazador en el año 2038
Habrá luna del cazador en el año 2041
Habrá luna del cazador en el año 2044
Habrá luna del cazador en el año 2047
Habrá luna del cazador en el año 2050
Habrá luna del cazador en el año 2053
Habrá luna del cazador en el año 2056
Habrá luna del cazador en el año 2059
Habrá luna del cazador en el año 2062
*/
/*****************************************************************************************
 '		DATOS DE EJEMPLO
 '.........................................................................................
 '  Se agrega un suario con sus dos propiedades
 '  Estos datos se cargan al entrar en la pagina index por primera vez
 '
 ' pront para 20 ejemplos
 ' usando el codigo a continuacion dame 20 objectData adicionales el pasword que sea el mismo. los emails que sean inventados con maximo 4 caracteres en nombre y dominio.
 ' FirsteName y Lasteme invetados de igual manera el resto de propiedasdes. Las provincias si deben ser de Ecuador y la ciudad que corresponda a la provinvia.
 ' Quiero que me des el texto listo para copiar no un script para generar.
 *****************************************************************************************/
function cargarDatosLocalStorage() {
    const objetData = {
        "userkey": "luis@1234.com",
        "firstName": "Luis",
        "lastName": "Suarez",
        "birthDate": "1984-12-25",
        "password": "1234",
        "flats":
            [{
                "dateRegisterKey": "20240522082020",
                "favorite": "si",
                "province": "MANABI",
                "city": "MANTA",
                "streetName": "Nicolas",
                "streetNumber": "195",
                "areaSize": "100",
                "hasAc": "SI",
                "yearBuilt": "2024",
                "rentPrice": "1500",
                "dateAvailable": "2024-05-01",
                "picture": "../images/flats/picture_0002.png"
            },
                {
                    "dateRegisterKey": "20240522081818",
                    "favorite": "si",
                    "province": "PICHINCHA",
                    "city": "QUITO",
                    "streetName": "Burgeus",
                    "streetNumber": "195",
                    "areaSize": "500",
                    "hasAc": "NO",
                    "yearBuilt": "1980",
                    "rentPrice": "300",
                    "dateAvailable": "2024-05-01",
                    "picture": "../images/flats/picture_0001.png"
                }],
    };
    const objetData1 = {
        "userkey": "diana@1234.com",
        "firstName": "Diana",
        "lastName": "Siguenza",
        "birthDate": "2004-12-25",
        "password": "1234",
        "flats":
            [{
                "dateRegisterKey": "20240522082420",
                "favorite": "si",
                "province": "PICHINCHA",
                "city": "QUITO",
                "streetName": "Nicolas",
                "streetNumber": "195",
                "areaSize": "100",
                "hasAc": "NO",
                "yearBuilt": "2000",
                "rentPrice": "500",
                "dateAvailable": "2024-05-01",
                "picture": "../images/flats/picture_01.png"
            },
                {
                    "dateRegisterKey": "20240522082420",
                    "favorite": "si",
                    "province": "AZUAY",
                    "city": "CUENCA",
                    "streetName": "Quito",
                    "streetNumber": "195",
                    "areaSize": "100",
                    "hasAc": "NO",
                    "yearBuilt": "1990",
                    "rentPrice": "400",
                    "dateAvailable": "2024-05-01",
                    "picture": "../images/flats/picture_01.png"
                }],
    };
    const objetData2 = {
        "userkey": "john@abcd.com",
        "firstName": "John",
        "lastName": "Doe",
        "birthDate": "1990-01-01",
        "password": "1234",
        "flats": [{
            "dateRegisterKey": "20240522082420",
            "favorite": "no",
            "province": "GUAYAS",
            "city": "GUAYAQUIL",
            "streetName": "Lopez",
            "streetNumber": "123",
            "areaSize": "120",
            "hasAc": "SI",
            "yearBuilt": "2005",
            "rentPrice": "1200",
            "dateAvailable": "2024-06-01",
            "picture": "../images/flats/picture_01.png"
        }, {
            "dateRegisterKey": "20240522082420",
            "favorite": "no",
            "province": "IMBABURA",
            "city": "IBARRA",
            "streetName": "Roca",
            "streetNumber": "45",
            "areaSize": "150",
            "hasAc": "NO",
            "yearBuilt": "2010",
            "rentPrice": "800",
            "dateAvailable": "2024-07-01",
            "picture": "../images/flats/picture_01.png"
        }]
    };

    const objetData3 = {
        "userkey": "mike@abcd.com",
        "firstName": "Mike",
        "lastName": "Smith",
        "birthDate": "1985-02-02",
        "password": "1234",
        "flats": [{
            "dateRegisterKey": "20240522082420",
            "favorite": "no",
            "province": "CARCHI",
            "city": "TULCAN",
            "streetName": "Sucre",
            "streetNumber": "12",
            "areaSize": "130",
            "hasAc": "SI",
            "yearBuilt": "2008",
            "rentPrice": "700",
            "dateAvailable": "2024-08-01",
            "picture": "../images/flats/picture_01.png"
        }, {
            "dateRegisterKey": "20240522082420",
            "favorite": "no",
            "province": "LOJA",
            "city": "LOJA",
            "streetName": "Bolivar",
            "streetNumber": "85",
            "areaSize": "200",
            "hasAc": "NO",
            "yearBuilt": "2015",
            "rentPrice": "900",
            "dateAvailable": "2024-09-01",
            "picture": "../images/flats/picture_01.png"
        }]
    };

    const objetData4 = {
        "userkey": "jane@abcd.com",
        "firstName": "Jane",
        "lastName": "Johnson",
        "birthDate": "1992-03-03",
        "password": "1234",
        "flats": [{
            "dateRegisterKey": "20240522082420",
            "favorite": "si",
            "province": "CHIMBORAZO",
            "city": "RIOBAMBA",
            "streetName": "Martin",
            "streetNumber": "33",
            "areaSize": "160",
            "hasAc": "NO",
            "yearBuilt": "2000",
            "rentPrice": "1000",
            "dateAvailable": "2024-10-01",
            "picture": "../images/flats/picture_01.png"
        }, {
            "dateRegisterKey": "20240522082420",
            "favorite": "si",
            "province": "ESMERALDAS",
            "city": "ESMERALDAS",
            "streetName": "Garcia",
            "streetNumber": "47",
            "areaSize": "110",
            "hasAc": "SI",
            "yearBuilt": "2012",
            "rentPrice": "600",
            "dateAvailable": "2024-11-01",
            "picture": "../images/flats/picture_01.png"
        }]
    };

    const objetData5 = {
        "userkey": "paul@abcd.com",
        "firstName": "Paul",
        "lastName": "Anderson",
        "birthDate": "1987-04-04",
        "password": "1234",
        "flats": [{
            "dateRegisterKey": "20240522082420",
            "favorite": "si",
            "province": "TUNGURAHUA",
            "city": "AMBATO",
            "streetName": "Lara",
            "streetNumber": "89",
            "areaSize": "90",
            "hasAc": "NO",
            "yearBuilt": "2019",
            "rentPrice": "750",
            "dateAvailable": "2024-12-01",
            "picture": "../images/flats/picture_01.png"
        }, {
            "dateRegisterKey": "20240522082420",
            "favorite": "si",
            "province": "MANABI",
            "city": "PORTOVIEJO",
            "streetName": "Perez",
            "streetNumber": "54",
            "areaSize": "140",
            "hasAc": "SI",
            "yearBuilt": "2018",
            "rentPrice": "650",
            "dateAvailable": "2024-01-01",
            "picture": "../images/flats/picture_01.png"
        }]
    };

    const objetData6 = {
        "userkey": "emma@abcd.com",
        "firstName": "Emma",
        "lastName": "Davis",
        "birthDate": "1994-05-05",
        "password": "1234",
        "flats": [{
            "dateRegisterKey": "20240522082420",
            "favorite": "no",
            "province": "COTOPAXI",
            "city": "LATACUNGA",
            "streetName": "Cruz",
            "streetNumber": "102",
            "areaSize": "170",
            "hasAc": "NO",
            "yearBuilt": "2020",
            "rentPrice": "1100",
            "dateAvailable": "2024-02-01",
            "picture": "../images/flats/picture_01.png"
        }, {
            "dateRegisterKey": "20240522082420",
            "favorite": "no",
            "province": "BOLIVAR",
            "city": "GUARANDA",
            "streetName": "Torres",
            "streetNumber": "61",
            "areaSize": "100",
            "hasAc": "SI",
            "yearBuilt": "2011",
            "rentPrice": "550",
            "dateAvailable": "2024-03-01",
            "picture": "../images/flats/picture_01.png"
        }]
    };

    const objetData7 = {
        "userkey": "lucy@abcd.com",
        "firstName": "Lucy",
        "lastName": "Martinez",
        "birthDate": "1989-06-06",
        "password": "1234",
        "flats": [{
            "dateRegisterKey": "20240522082420",
            "favorite": "si",
            "province": "ORELLANA",
            "city": "COCA",
            "streetName": "Martinez",
            "streetNumber": "78",
            "areaSize": "190",
            "hasAc": "NO",
            "yearBuilt": "2017",
            "rentPrice": "1150",
            "dateAvailable": "2024-04-01",
            "picture": "../images/flats/picture_01.png"
        }, {
            "dateRegisterKey": "20240522082420",
            "favorite": "si",
            "province": "EL ORO",
            "city": "MACHALA",
            "streetName": "Campos",
            "streetNumber": "90",
            "areaSize": "130",
            "hasAc": "SI",
            "yearBuilt": "2021",
            "rentPrice": "850",
            "dateAvailable": "2024-05-01",
            "picture": "../images/flats/picture_01.png"
        }]
    };

    const objetData8 = {
        "userkey": "max@abcd.com",
        "firstName": "Max",
        "lastName": "Garcia",
        "birthDate": "1991-07-07",
        "password": "1234",
        "flats": [{
            "dateRegisterKey": "20240522082420",
            "favorite": "no",
            "province": "SUCUMBIOS",
            "city": "NUEVA LOJA",
            "streetName": "Ramirez",
            "streetNumber": "13",
            "areaSize": "110",
            "hasAc": "NO",
            "yearBuilt": "2014",
            "rentPrice": "650",
            "dateAvailable": "2024-06-01",
            "picture": "../images/flats/picture_01.png"
        }, {
            "dateRegisterKey": "20240522082420",
            "favorite": "no",
            "province": "SANTA ELENA",
            "city": "LA LIBERTAD",
            "streetName": "Santos",
            "streetNumber": "52",
            "areaSize": "120",
            "hasAc": "SI",
            "yearBuilt": "2022",
            "rentPrice": "900",
            "dateAvailable": "2024-07-01",
            "picture": "../images/flats/picture_01.png"
        }]
    };

    const objetData9 = {
        "userkey": "nick@abcd.com",
        "firstName": "Nick",
        "lastName": "Rodriguez",
        "birthDate": "1988-08-08",
        "password": "1234",
        "flats": [{
            "dateRegisterKey": "20240522082420",
            "favorite": "si",
            "province": "NAPO",
            "city": "TENA",
            "streetName": "Castro",
            "streetNumber": "48",
            "areaSize": "140",
            "hasAc": "NO",
            "yearBuilt": "2016",
            "rentPrice": "800",
            "dateAvailable": "2024-08-01",
            "picture": "../images/flats/picture_01.png"
        }, {
            "dateRegisterKey": "20240522082420",
            "favorite": "si",
            "province": "ZAMORA CHINCHIPE",
            "city": "ZAMORA",
            "streetName": "Vargas",
            "streetNumber": "34",
            "areaSize": "150",
            "hasAc": "SI",
            "yearBuilt": "2013",
            "rentPrice": "850",
            "dateAvailable": "2024-09-01",
            "picture": "../images/flats/picture_01.png"
        }]
    };

    const objetData10 = {
        "userkey": "olga@abcd.com",
        "firstName": "Olga",
        "lastName": "Lopez",
        "birthDate": "1993-09-09",
        "password": "1234",
        "flats": [{
            "dateRegisterKey": "20240522082420",
            "favorite": "no",
            "province": "PASTAZA",
            "city": "PUYO",
            "streetName": "Mejia",
            "streetNumber": "77",
            "areaSize": "160",
            "hasAc": "NO",
            "yearBuilt": "2009",
            "rentPrice": "950",
            "dateAvailable": "2024-10-01",
            "picture": "../images/flats/picture_01.png"
        }, {
            "dateRegisterKey": "20240522082420",
            "favorite": "no",
            "province": "SANTO DOMINGO",
            "city": "SANTO DOMINGO",
            "streetName": "Bustos",
            "streetNumber": "22",
            "areaSize": "180",
            "hasAc": "SI",
            "yearBuilt": "2018",
            "rentPrice": "1050",
            "dateAvailable": "2024-11-01",
            "picture": "../images/flats/picture_01.png"
        }]
    };

    const objetData11 = {
        "userkey": "chris@abcd.com",
        "firstName": "Chris",
        "lastName": "Taylor",
        "birthDate": "1986-10-10",
        "password": "1234",
        "flats": [{
            "dateRegisterKey": "20240522082420",
            "favorite": "si",
            "province": "MORONA SANTIAGO",
            "city": "MACAS",
            "streetName": "Espinoza",
            "streetNumber": "5",
            "areaSize": "190",
            "hasAc": "NO",
            "yearBuilt": "2007",
            "rentPrice": "1250",
            "dateAvailable": "2024-12-01",
            "picture": "../images/flats/picture_01.png"
        }, {
            "dateRegisterKey": "20240522082420",
            "favorite": "si",
            "province": "GALAPAGOS",
            "city": "PUERTO AYORA",
            "streetName": "Perez",
            "streetNumber": "99",
            "areaSize": "200",
            "hasAc": "SI",
            "yearBuilt": "2023",
            "rentPrice": "1350",
            "dateAvailable": "2024-01-01",
            "picture": "../images/flats/picture_01.png"
        }]
    };

    const objetData12 = {
        "userkey": "sam@abcd.com",
        "firstName": "Sam",
        "lastName": "Wilson",
        "birthDate": "1983-11-11",
        "password": "1234",
        "flats": [{
            "dateRegisterKey": "20240522082420",
            "favorite": "no",
            "province": "LOS RIOS",
            "city": "BABAHOYO",
            "streetName": "Ortiz",
            "streetNumber": "66",
            "areaSize": "130",
            "hasAc": "NO",
            "yearBuilt": "2015",
            "rentPrice": "700",
            "dateAvailable": "2024-02-01",
            "picture": "../images/flats/picture_01.png"
        }, {
            "dateRegisterKey": "20240522082420",
            "favorite": "no",
            "province": "SUCUMBIOS",
            "city": "SHUSHUFINDI",
            "streetName": "Garcia",
            "streetNumber": "27",
            "areaSize": "120",
            "hasAc": "SI",
            "yearBuilt": "2021",
            "rentPrice": "950",
            "dateAvailable": "2024-03-01",
            "picture": "../images/flats/picture_01.png"
        }]
    };

    const objetData13 = {
        "userkey": "dave@abcd.com",
        "firstName": "Dave",
        "lastName": "Miller",
        "birthDate": "1995-12-12",
        "password": "1234",
        "flats": [{
            "dateRegisterKey": "20240522082420",
            "favorite": "si",
            "province": "ORELLANA",
            "city": "FRANCISCO DE ORELLANA",
            "streetName": "Guerrero",
            "streetNumber": "59",
            "areaSize": "140",
            "hasAc": "NO",
            "yearBuilt": "2010",
            "rentPrice": "850",
            "dateAvailable": "2024-04-01",
            "picture": "../images/flats/picture_01.png"
        }, {
            "dateRegisterKey": "20240522082420",
            "favorite": "si",
            "province": "IMBABURA",
            "city": "COTACACHI",
            "streetName": "Montes",
            "streetNumber": "38",
            "areaSize": "110",
            "hasAc": "SI",
            "yearBuilt": "2019",
            "rentPrice": "950",
            "dateAvailable": "2024-05-01",
            "picture": "../images/flats/picture_01.png"
        }]
    };

    const objetData14 = {
        "userkey": "jake@abcd.com",
        "firstName": "Jake",
        "lastName": "Brown",
        "birthDate": "1996-01-13",
        "password": "1234",
        "flats": [{
            "dateRegisterKey": "20240522082420",
            "favorite": "no",
            "province": "PASTAZA",
            "city": "MERA",
            "streetName": "Vasquez",
            "streetNumber": "44",
            "areaSize": "170",
            "hasAc": "NO",
            "yearBuilt": "2022",
            "rentPrice": "1100",
            "dateAvailable": "2024-06-01",
            "picture": "../images/flats/picture_01.png"
        }, {
            "dateRegisterKey": "20240522082420",
            "favorite": "no",
            "province": "NAPO",
            "city": "ARCHIDONA",
            "streetName": "Cisneros",
            "streetNumber": "73",
            "areaSize": "150",
            "hasAc": "SI",
            "yearBuilt": "2021",
            "rentPrice": "1200",
            "dateAvailable": "2024-07-01",
            "picture": "../images/flats/picture_01.png"
        }]
    };

    const objetData15 = {
        "userkey": "anna@abcd.com",
        "firstName": "Anna",
        "lastName": "White",
        "birthDate": "1997-02-14",
        "password": "1234",
        "flats": [{
            "dateRegisterKey": "20240522082420",
            "favorite": "si",
            "province": "GALAPAGOS",
            "city": "PUERTO BAQUERIZO MORENO",
            "streetName": "Reyes",
            "streetNumber": "20",
            "areaSize": "190",
            "hasAc": "NO",
            "yearBuilt": "2020",
            "rentPrice": "1300",
            "dateAvailable": "2024-08-01",
            "picture": "../images/flats/picture_01.png"
        }, {
            "dateRegisterKey": "20240522082420",
            "favorite": "si",
            "province": "SANTO DOMINGO",
            "city": "LA CONCORDIA",
            "streetName": "Torres",
            "streetNumber": "49",
            "areaSize": "160",
            "hasAc": "SI",
            "yearBuilt": "2018",
            "rentPrice": "1400",
            "dateAvailable": "2024-09-01",
            "picture": "../images/flats/picture_01.png"
        }]
    };

    const objetData16 = {
        "userkey": "nina@abcd.com",
        "firstName": "Nina",
        "lastName": "Harris",
        "birthDate": "1998-03-15",
        "password": "1234",
        "flats": [{
            "dateRegisterKey": "20240522082420",
            "favorite": "no",
            "province": "LOS RIOS",
            "city": "VENTANAS",
            "streetName": "Ortega",
            "streetNumber": "67",
            "areaSize": "130",
            "hasAc": "NO",
            "yearBuilt": "2017",
            "rentPrice": "750",
            "dateAvailable": "2024-10-01",
            "picture": "../images/flats/picture_01.png"
        }, {
            "dateRegisterKey": "20240522082420",
            "favorite": "no",
            "province": "BOLIVAR",
            "city": "CHILLANES",
            "streetName": "Salazar",
            "streetNumber": "31",
            "areaSize": "140",
            "hasAc": "SI",
            "yearBuilt": "2021",
            "rentPrice": "850",
            "dateAvailable": "2024-11-01",
            "picture": "../images/flats/picture_01.png"
        }]
    };

    const objetData17 = {
        "userkey": "alex@abcd.com",
        "firstName": "Alex",
        "lastName": "Roberts",
        "birthDate": "1999-04-16",
        "password": "1234",
        "flats": [{
            "dateRegisterKey": "20240522082420",
            "favorite": "si",
            "province": "SUCUMBIOS",
            "city": "LAGO AGRIO",
            "streetName": "Carrera",
            "streetNumber": "90",
            "areaSize": "120",
            "hasAc": "NO",
            "yearBuilt": "2016",
            "rentPrice": "950",
            "dateAvailable": "2024-12-01",
            "picture": "../images/flats/picture_01.png"
        }, {
            "dateRegisterKey": "20240522082420",
            "favorite": "si",
            "province": "MORONA SANTIAGO",
            "city": "GUALAQUIZA",
            "streetName": "Lara",
            "streetNumber": "85",
            "areaSize": "150",
            "hasAc": "SI",
            "yearBuilt": "2019",
            "rentPrice": "1150",
            "dateAvailable": "2024-01-01",
            "picture": "../images/flats/picture_01.png"
        }]
    };

    const objetData18 = {
        "userkey": "john@abcd.com",
        "firstName": "John",
        "lastName": "Doe",
        "birthDate": "2000-05-17",
        "password": "1234",
        "flats": [{
            "dateRegisterKey": "20240522082420",
            "favorite": "no",
            "province": "ORELLANA",
            "city": "DAYUMA",
            "streetName": "Salinas",
            "streetNumber": "58",
            "areaSize": "170",
            "hasAc": "NO",
            "yearBuilt": "2020",
            "rentPrice": "1000",
            "dateAvailable": "2024-02-01",
            "picture": "../images/flats/picture_01.png"
        }, {
            "dateRegisterKey": "20240522082420",
            "favorite": "no",
            "province": "NAPO",
            "city": "EL CHACO",
            "streetName": "Reyes",
            "streetNumber": "99",
            "areaSize": "160",
            "hasAc": "SI",
            "yearBuilt": "2021",
            "rentPrice": "1100",
            "dateAvailable": "2024-03-01",
            "picture": "../images/flats/picture_01.png"

        }]
    };

    const objetData19 = {
        "userkey": "emma@abcd.com",
        "firstName": "Emma",
        "lastName": "Smith",
        "birthDate": "2001-06-18",
        "password": "1234",
        "flats": [{
            "dateRegisterKey": "20240522082420",
            "favorite": "si",
            "province": "GUAYAS",
            "city": "GUAYAQUIL",
            "streetName": "Martinez",
            "streetNumber": "101",
            "areaSize": "200",
            "hasAc": "NO",
            "yearBuilt": "2018",
            "rentPrice": "1350",
            "dateAvailable": "2024-04-01",
            "picture": "../images/flats/picture_01.png"
        }, {
            "dateRegisterKey": "20240522082420",
            "favorite": "si",
            "province": "ESMERALDAS",
            "city": "ESMERALDAS",
            "streetName": "Leon",
            "streetNumber": "43",
            "areaSize": "150",
            "hasAc": "SI",
            "yearBuilt": "2022",
            "rentPrice": "1450",
            "dateAvailable": "2024-05-01",
            "picture": "../images/flats/picture_01.png"
        }]
    };

    const objetData20 = {
        "userkey": "mary@abcd.com",
        "firstName": "Mary",
        "lastName": "Johnson",
        "birthDate": "2002-07-19",
        "password": "1234",
        "flats": [{
            "dateRegisterKey": "20240522082420",
            "favorite": "no",
            "province": "TUNGURAHUA",
            "city": "AMBATO",
            "streetName": "Moreno",
            "streetNumber": "50",
            "areaSize": "180",
            "hasAc": "NO",
            "yearBuilt": "2019",
            "rentPrice": "1200",
            "dateAvailable": "2024-06-01",
            "picture": "../images/flats/picture_01.png"
        }, {
            "dateRegisterKey": "20240522082420",
            "favorite": "no",
            "province": "BOLIVAR",
            "city": "GUARANDA",
            "streetName": "Cruz",
            "streetNumber": "78",
            "areaSize": "190",
            "hasAc": "SI",
            "yearBuilt": "2021",
            "rentPrice": "1300",
            "dateAvailable": "2024-07-01",
            "picture": "../images/flats/picture_01.png"
        }]
    };

// // Obtener el formulario
// const elementFormRegister = document.querySelector('form[name=formrRegister]');
// //detecto la accion en el boton y ejecuto la funcion
// elementFormRegister.addEventListener('submit', getDataForm);

//funcion
// function getDataForm(event) {
//     event.preventDefault()

//console.log('formulario completo', elementFormRegister);

// const formData = new FormData(elementFormRegister);
// //console.log('Está pensado principalmente para enviar datos de formularios', formData);

//const objetData = Object.fromEntries(formData);
//console.log('transforma una lista de pares con [clave-valor]', objetData);

// Acceder al email y firstName
    const userkey = objetData.userkey;
    const userkey1 = objetData1.userkey;
    const userkey2 = objetData2.userkey;
    const userkey3 = objetData3.userkey;
    const userkey4 = objetData4.userkey;
    const userkey5 = objetData5.userkey;
    const userkey6 = objetData6.userkey;
    const userkey7 = objetData7.userkey;
    const userkey8 = objetData8.userkey;
    const userkey9 = objetData10.userkey;
    const userkey10 = objetData11.userkey;
    const userkey11 = objetData12.userkey;
    const userkey12 = objetData13.userkey;
    const userkey13 = objetData14.userkey;
    const userkey14 = objetData15.userkey;
    const userkey15 = objetData16.userkey;
    const userkey16 = objetData17.userkey;
    const userkey17 = objetData18.userkey;
    const userkey18 = objetData18.userkey;
    const userkey19 = objetData19.userkey;
    const userkey20 = objetData20.userkey;

// const firstName = objetData.firstName;
// console.log('userkey = ' + userkey + ' firstName = ' + firstName);

// elimino del objeto porque lo usare de key asi no puede haber dos iguales
// delete objetData.userkey;

// este campo es solo para la validacion se debe borrar
//delete objetData.passwordConfirmation;

//console.log(objetData);

    if (localStorage.length === 0) {

        console.log('localStorage está vacío');

        const userRegister = JSON.stringify(objetData);
        const userRegister1 = JSON.stringify(objetData1);
        const userRegister2 = JSON.stringify(objetData2);
        const userRegister3 = JSON.stringify(objetData3);
        const userRegister4 = JSON.stringify(objetData4);
        const userRegister5 = JSON.stringify(objetData5);
        const userRegister6 = JSON.stringify(objetData6);
        const userRegister7 = JSON.stringify(objetData7);
        const userRegister8 = JSON.stringify(objetData8);
        const userRegister9 = JSON.stringify(objetData9);
        const userRegister10 = JSON.stringify(objetData10);
        const userRegister11 = JSON.stringify(objetData11);
        const userRegister12 = JSON.stringify(objetData12);
        const userRegister13 = JSON.stringify(objetData13);
        const userRegister14 = JSON.stringify(objetData14);
        const userRegister15 = JSON.stringify(objetData15);
        const userRegister16 = JSON.stringify(objetData16);
        const userRegister17 = JSON.stringify(objetData17);
        const userRegister18 = JSON.stringify(objetData18);
        const userRegister19 = JSON.stringify(objetData19);
        const userRegister20 = JSON.stringify(objetData20);
        //console.log('grabar estos datos' , userRegister);

        localStorage.setItem(userkey, userRegister);
        localStorage.setItem(userkey1, userRegister1);
        localStorage.setItem(userkey2, userRegister2);
        localStorage.setItem(userkey3, userRegister3);
        localStorage.setItem(userkey4, userRegister4);
        localStorage.setItem(userkey5, userRegister5);
        localStorage.setItem(userkey6, userRegister6);
        localStorage.setItem(userkey7, userRegister7);
        localStorage.setItem(userkey8, userRegister8);
        localStorage.setItem(userkey9, userRegister9);
        localStorage.setItem(userkey10, userRegister10);
        localStorage.setItem(userkey11, userRegister11);
        localStorage.setItem(userkey12, userRegister12);
        localStorage.setItem(userkey13, userRegister13);
        localStorage.setItem(userkey14, userRegister14);
        localStorage.setItem(userkey15, userRegister15);
        localStorage.setItem(userkey16, userRegister16);
        localStorage.setItem(userkey17, userRegister17);
        localStorage.setItem(userkey18, userRegister18);
        localStorage.setItem(userkey19, userRegister19);
        localStorage.setItem(userkey20, userRegister20);

        console.log('Grabado', window.localStorage);

    } else {
        console.log('localStorage tiene elementos almacenados');
    }

}
// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;


// ============================
//  Identificar Entorno
// ============================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ============================
//  Base de datos
// ============================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb://usermlab:passmlab123@ds125618.mlab.com:25618/cafe';
}

process.env.URLDB = urlDB;
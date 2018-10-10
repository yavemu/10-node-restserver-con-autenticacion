const jwt = require('jsonwebtoken');

// =========================
//  Verificar Token
// =========================

let verificarToken = (req, res, next) => {

    // Obtener token enviado en el header de la peticion
    let token = req.get('token');

    // metodo de jwt para verificar que el token sea correcto y este certificado
    jwt.verify(token, process.env.SEED_TOKEN, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: "Autorizacion Denegada: Token no válido."
                }
            });
        }

        res.usuario = decoded.usuario;
        next();

    });
}

module.exports = {
    verificarToken
}
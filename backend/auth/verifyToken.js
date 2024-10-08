import jwt from 'jsonwebtoken'
import Esteticista from '../models/EsteticistaSchema.js'
import User from '../models/UserSchema.js'

export const authenticate = async (req, res, next) => {

    //get token from headers
    const authToken = req.headers.authorization

    //check if token exist
    if (!authToken || !authToken.startsWith('Bearer')) {
        return res.status(401).json({succes: false, message: 'No hay token, no autorizado'})
    }

    try {
        const token = authToken.split(' ')[1]


        //verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)

        req.userId = decoded.id
        req.role = decoded.role

        next()
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            return res.status(401).json({message: 'El token ha expirado'})
        }

        return res.status(401).json({succcess: false, message: 'Token inválido'})
    }
}

export const restrict = roles => async (req, res, next) => {
    const userId = req.userId

    let user;

    const patient = await User.findById(userId)
    const esteticista = await Esteticista.findById(userId)

    if (patient) {
         user=patient
    }

    if (esteticista) {
        user=esteticista
   }

   if (!roles.includes(user.role)) {
    return res.status(401).json({succes: false, message: 'No autorizado'})
   }

   next();
}
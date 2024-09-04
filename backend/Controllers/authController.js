import User from "../Models/UserSchema.js";
import Esteticista from "../Models/EsteticistaSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";


const generateToken = user => {
    return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY)
    {
        expiresIn: '15d'
    }
}

export const register = async (req, res) => {

    const { email, password, name, role, photo, gender } = req.body

    try {

        let user = null
        if (role === 'patient') {
            user = await User.findOne({ email })
        }
        else if (role === 'esteticista') {
            user = await Esteticista.findOne({ email })
        }


        //checkear si existe
        if (user) {
            return res.status(400).json({ message: 'El usuario ya existe' })
        }

        //hash password
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        if (role === 'patient') {
            user = new User({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role
            })
        }

        if (role === 'esteticista') {
            user = new Esteticista({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role
            })
        }

        await user.save()

        res.status(200).json({ succes: true, message: 'Usuario creado' })


    } catch (err) {
        res.status(500).json({ succes: false, message: 'Hubo un error, intentalo de nuevo' })

    }
}

export const login = async (req, res) => {

    const { email } = req.body

    try {

        let user = null

        const patient = await User.findOne({ email })
        const esteticista = await Esteticista.findOne({ email })

        if (patient) {
            user = patient
        }

        if (esteticista) {
            user = esteticista
        }

        //checkear si existe o no
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' })
        }

        //comparar contraseñas
        const isPasswordMatch = await bcrypt.compare(req.body.password, user.password)

        if (!isPasswordMatch) {
            return res
                .status(400)
                .json({ status: false, message: 'Credenciales inválidas' })
        }

        //generar token
        const token = generateToken(user)

        const { password, role, appointments, ...rest } = user._doc

        return res
        .status(200)
        .json({ status: true, message: 'Logueo exitoso', token, data:{...rest}, role })

    } catch (err) { 
        return res
        .status(500)
        .json({ status: false, message: 'Hubo un error'})

    }
}

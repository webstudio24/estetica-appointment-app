import User from "../models/UserSchema.js";
import Booking from "../models/BookingSchema.js";
import Esteticista from "../models/EsteticistaSchema.js";

export const updateUser = async (req, res) => {
    const id = req.params.id

    try {
        const updatedUser = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true })
        res.status(200).json({ success: true, message: 'Usuario actualizado', data: updatedUser })
    } catch (err) {
        res.status(500).json({ success: false, message: 'Error, no se pudo actualizar el usuario' })
    }
}

export const deleteUser = async (req, res) => {
    const id = req.params.id

    try {
        await User.findByIdAndDelete(id,);
        res.status(200).json({ success: true, message: 'Usuario eliminado' })
    } catch (err) {
        res.status(500).json({ success: false, message: 'Error, no se pudo eliminar el usuario' })
    }
}

export const getSingleUser = async (req, res) => {
    const id = req.params.id

    try {
        const user = await User.findById(id).select('-password')
        res.status(200).json({ success: true, message: 'Usuario encontrado', data: user })
    } catch (err) {
        res.status(404).json({ success: false, message: 'Error, no se pudo encontrar el usuario' })
    }
}
export const getAllUser = async (req, res) => {

    try {
        const users = await User.find({}).select('-password');
        res.status(200).json({ success: true, message: 'Usuarios encontrados', data: users })
    } catch (err) {
        res.status(404).json({ success: false, message: 'Error, no se pudo encontrar ningun usuario' })
    }
}

export const getUserProfile = async (req, res) => {
    const userId = req.userId

    try {
        const user = await User.findById(userId)

        if (!user) {
            return res.status(404).json({ success: false, message: 'Usuario no encontrado' })
        }

        const { password, ...rest } = user._doc

        res.status(200).json({ success: true, message: 'Usuario encontrado', data: { ...rest } })

    } catch (err) {

        res.status(500).json({ success: false, message: 'Algo salió mal' })

    }
}

export const getMyAppointments = async (req, res) => {

    try {
        //step -1 : retrieve appointments from booking for specific user
        const bookings = await Booking.find({ user: req.userId })

        //step -2 : extract esteticista from appointment bookings
        const esteticistaIds = bookings.map(el=> el.esteticista.id)

        //step -3 : retrieve doctors using doctor ids
        const esteticistas = await Esteticista.find({_id: {$in: esteticistaIds}}).select('-password')

        res.status(200).json({ success: true, message: 'Citas encontradas', data: esteticistas })

    } catch (err) {
        
        res.status(500).json({ success: false, message: 'Algo salió mal' })
    }
}
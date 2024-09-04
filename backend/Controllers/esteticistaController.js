import Booking from "../models/BookingSchema.js";
import Esteticista from "../models/EsteticistaSchema.js";

export const updateEsteticista = async (req, res) => {
    const id = req.params.id

    try {
        const updatedEsteticista = await Esteticista.findByIdAndUpdate(id, { $set: req.body }, { new: true })
        res.status(200).json({ success: true, message: 'Usuario actualizado', data: updatedEsteticista })
    } catch (err) {
        res.status(500).json({ success: false, message: 'Error, no se pudo actualizar el usuario' })
    }
}

export const deleteEsteticista = async (req, res) => {
    const id = req.params.id

    try {
        await Esteticista.findByIdAndDelete(id,);
        res.status(200).json({ success: true, message: 'Usuario eliminado' })
    } catch (err) {
        res.status(500).json({ success: false, message: 'Error, no se pudo eliminar el usuario' })
    }
}

export const getSingleEsteticista = async (req, res) => {
    const id = req.params.id

    try {
        const esteticista = await Esteticista.findById(id)
        .populate("reviews")
        .select('-password');

        res.status(200).json({ success: true, message: 'Esteticista encontrado', data: esteticista })
    } catch (err) {
        res.status(404).json({ success: false, message: 'Error, no se pudo encontrar el esteticista' })
    }
}
export const getAllEsteticista = async (req, res) => {



    try {

        const { query } = req.query
        let esteticistas;

        if (query) {
            esteticistas = await Esteticista.find({
                isApproved: 'approved',
                $or: [
                    { name: { $regex: query, $options: "i" } },
                    { specialization: { $regex: query, $options: "i" } }
                ],
            }).select('-password');
        } else {
            esteticistas = await Esteticista.find({ isApproved: 'approved' }).select('-password');
        }


        res.status(200).json({ success: true, message: 'Usuarios encontrados', data: esteticistas })
    } catch (err) {
        res.status(404).json({ success: false, message: 'Error, no se pudo encontrar ningun usuario' })
    }
}

export const getEsteticistaProfile = async (req, res) => {
    const esteticistaId = req.userId

    try {
        const esteticista = await Esteticista.findById(esteticistaId)

        if (!esteticista) {
            return res.status(404).json({ success: false, message: 'Esteticista no encontrado' })
        }

        const { password, ...rest } = esteticista._doc;
        const appointments = await Booking.find({ esteticista: esteticistaId })

        res.status(200).json({ success: true, message: 'Usuario encontrado', data: { ...rest, appointments } })

    } catch (err) {

        res.status(500).json({ success: false, message: 'Algo salió mal' })

    }
}
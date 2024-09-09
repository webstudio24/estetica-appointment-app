import Review from "../models/ReviewSchema.js";
import Esteticista from "../models/EsteticistaSchema.js";


//get all reviews
export const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find({})

        res.status(200).json({ success: true, message: 'Reviews encontradas', data: reviews })
    } catch (err) {
        res.status(404).json({ success: false, message: 'Error, no se pudo encontrar ninguna review' })
    }
}


//create review

export const createReview = async (req, res) => {
    if (!req.body.esteticista) req.body.esteticista = req.params.esteticistaId
    if (!req.body.user) req.body.user = req.userId

    const newReview = new Review(req.body)

    try {
        const savedReview = await newReview.save()

        await Esteticista.findByIdAndUpdate(req.body.esteticista, {
            $push: { reviews: savedReview._id }
        })

        res.status(200).json({ success: true, message: 'Review guardada', data: savedReview })

    } catch (err) {
        res.status(500).json({ success: false, message: err.message })
    }   
}
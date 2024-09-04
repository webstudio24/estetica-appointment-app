import mongoose from "mongoose";
import Esteticista from "./EsteticistaSchema.js";

const reviewSchema = new mongoose.Schema(
  {
    esteticista: {
      type: mongoose.Types.ObjectId,
      ref: "Esteticista",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);

reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'user',
    select: 'name photo',
  })
  next()
})

reviewSchema.statics.calcAverageRatings = async function (esteticistaId) {

  const stats = await this.aggregate([
    {
      $match: { esteticista: esteticistaId },
    },
    {
      $group: {
        _id: "$esteticista",
        numOfRating: { $sum: 1 },
        avgRating: { $avg: "$rating" },
      },
    },
  ]);

  await Esteticista.findByIdAndUpdate(esteticistaId, {
    totalRating: stats[0].numOfRating,
    averageRating: stats[0].avgRating,
  });

}

reviewSchema.post("save", function () {
  this.constructor.calcAverageRatings(this.esteticista);
});


export default mongoose.model("Review", reviewSchema);

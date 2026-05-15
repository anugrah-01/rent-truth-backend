import * as reviewRepository from "../repositories/review.repository";
import * as propertyRepository from "../repositories/property.repository";

interface CreateReviewData {
  comment: string;
  rating: number;
  propertyId: string;
  userId: string;
}

export const createReview = async (data: CreateReviewData) => {
    const review = await reviewRepository.createReview(data);
    const property = await propertyRepository.getPropertyById(data.propertyId);
    
    if(!property){
        throw new Error("Property not found");
    }

    const reviews = property.reviews;
    const totalRatings = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = totalRatings / reviews.length;

    await propertyRepository.updatePropertyRating(data.propertyId, averageRating, reviews.length);
    return review;
};
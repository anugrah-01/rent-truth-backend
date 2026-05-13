import * as reviewRepository from "../repositories/review.repository";
import * as propertyRepository from "../repositories/property.repository";

interface CreateReviewData {
  comment: string;
  rating: number;
  propertyId: string;
  userId: string;
}

export const createReview = async (data: CreateReviewData) => {
    const property = await propertyRepository.getPropertyById(data.propertyId);
    if(!property){
        throw new Error("Property not found");
    }
    return reviewRepository.createReview(data);
};
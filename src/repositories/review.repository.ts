import prisma from "../config/prisma";      

interface CreateReviewData {
  comment: string;
  rating: number;
  propertyId: string;
  userId: string;
}

export const createReview = async (data: CreateReviewData) => {
  return prisma.review.create({data,});
};

export const getAverageRating = async (propertyId : string) => {
    const result = await prisma.review.aggregate({
        where: { propertyId },
        _avg: { rating: true },
    });
    return result._avg.rating || 0;   //if no reviews, return 0
};


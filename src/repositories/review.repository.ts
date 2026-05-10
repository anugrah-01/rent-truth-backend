import prisma from "../config/prisma";      

interface CreateReviewData {
  propertyId: string;
  rating: number;
  comment: string;
}

export const createReview = async (data: CreateReviewData) => {
  return prisma.review.create({data,});
};


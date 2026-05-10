import prisma from "../config/prisma";

interface CreatePropertyData {
  address: string;
  city: string;
  pincode: string;
}

export const createProperty = async (data: CreatePropertyData) => {
  return prisma.property.create({data,});
};

export const getProperties = async () => {
  return prisma.property.findMany();    //fetches all rows from property table
};

export const getPropertyById = async (id: string) => {
  return prisma.property.findUnique({
    where: { id },
    include: {
      reviews: true,           //While fetching property,also fetch linked reviews-->JOIN behaviour between tables
    },
  });
};
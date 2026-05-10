import prisma from "../config/prisma";

interface CreatePropertyData {
  address: string;
  city: string;
  pincode: string;
}

interface GetPropertiesFilters{
  city?: string;
  pincode?: string;
}

export const createProperty = async (data: CreatePropertyData) => {
  return prisma.property.create({data,});
};

export const getProperties = async (filters?: GetPropertiesFilters) => {
  return prisma.property.findMany({
    where: {
      city: filters?.city,
      pincode: filters?.pincode,
    },

    include: {
      reviews: true,           //While fetching properties,also fetch linked reviews-->JOIN behaviour between tables
    },
    
  });    //fetches rows after filter from property table
};

export const getPropertyById = async (id: string) => {
  return prisma.property.findUnique({
    where: { id },
    include: {
      reviews: true,           //While fetching property,also fetch linked reviews-->JOIN behaviour between tables
    },
  });
};
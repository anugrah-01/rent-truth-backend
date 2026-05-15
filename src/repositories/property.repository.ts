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
      reviews: {                                    //While fetching properties,also fetch linked reviews-->JOIN behaviour between tables
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
      },        
    },
    
  });    //fetches rows after filter from property table
};


export const getPropertyById = async (id: string) => {
  return prisma.property.findUnique({
    where: { id },
    include: {
      reviews: {
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
      },   
    },
  });
};

export const updatePropertyRating = async (propertyId: string, averageRating: number, reviewCouunt: number) => {
  return prisma.property.update({
    where: { id: propertyId }, 
    data: {
      averageRating,
      reviewCount: reviewCouunt,
    },
  });
};
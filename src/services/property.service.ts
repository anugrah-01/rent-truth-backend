import * as propertyRepository from "../repositories/property.repository";
import * as reviewRepository from "../repositories/review.repository";

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
    if(!data.address || !data.city || !data.pincode) {
        throw new Error("All fields are required");
    }
    return propertyRepository.createProperty(data);
};

export const getProperties = async (filters?: GetPropertiesFilters) => {
    return propertyRepository.getProperties(filters);
};

export const getPropertyById = async (id: string) => {
    if(!id){
        throw new Error("Property ID is required");
    }

    const property = await propertyRepository.getPropertyById(id);
    if(!property){
        throw new Error("Property not found");
    }

    const averageRating = await reviewRepository.getAverageRating(id);
    
    return {
        ...property,
        averageRating
    };
};

import * as favouriteRepository from "../repositories/favourite.repository";

export const addFavourite = async(userId: string, propertyId: string) => {
    return favouriteRepository.addFavourite(userId, propertyId);
};

export const removeFavourite = async(userId: string, propertyId: string) => {
    return favouriteRepository.removeFavourite(userId, propertyId);
};

export const getFavourites = async(userId: string) => {
    return favouriteRepository.getFavourites(userId);
};
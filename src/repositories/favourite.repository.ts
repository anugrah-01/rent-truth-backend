import prisma from "../config/prisma";

export const addFavourite = async(userId: string, propertyId: string) => {
    return prisma.user.update({
        where: {
            id: userId,
        },
        data: {
            favoriteProperties: {
                connect: {                               //connects the property to user's favourite list by creating an entry in the join table
                    id: propertyId,
                },
            },
        },
    });
};

export const removeFavourite = async(userId: string, propertyId: string) => {
    return prisma.user.update({
        where: {
            id: userId,
        },
        data: {
            favoriteProperties: {
                disconnect: {                            //disconnects the property from user's favourite list by deleting the entry in the join table                          
                    id: propertyId,
                },
            },
        },
    });
};

export const getFavourites = async(userId: string) => {
    const user = await prisma.user.findUnique({
        where: {
            id: userId,
        },
        include: {                                          //While fetching user,also fetch linked favourite properties-->JOIN behaviour between tables
            favoriteProperties: true,
        },
    });
};

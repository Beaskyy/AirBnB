import prisma from "@/app/libs/prismadb";

interface IParams {
  listingId?: string;
}

export default async function getListingById(params: IParams) {
  try {
    const { listingId } = params;

    const listing = await prisma.listing.findUnique({
      where: {
        id: '64b4763b961985342c14fca6',
      },
      include: {
        user: true,
      },
    });

    if (!listing) {
      return null;
    }
    return {
      ...listing,
      createdAt: listing.createdAt.toString(),
      user: {
        ...listing.user,
        createdAt: listing.user.createdAt.toISOString(),
        updatedAt: listing.user.updatedAt.toISOString,
        emailVerified: listing.user.emailVerifiedAt?.toISOString() || null,
      },
    };
  } catch (error: any) {
    throw new Error(error);
  }
}

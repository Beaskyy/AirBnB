import { Listing, User } from "@prisma/client";

export type safeListing = Omit<Listing, "createdAt"> & {
  createdAt: string;
};

export type safeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerifiedAt"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerifiedAt: string | null;
};

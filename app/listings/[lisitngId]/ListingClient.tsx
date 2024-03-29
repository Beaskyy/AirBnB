"use client";

import { categories } from "@/app/components/navbar/Categories";
import { safeListing, safeUser } from "@/app/types";
import { Reservation } from "@prisma/client";
import { useMemo } from "react";
import ListingHead from "../ListingHead";
import Container from "@/app/components/Container";

interface ListingClientProps {
  reservation?: Reservation[];
  listing: safeListing & {
    user: safeUser;
  };
  currentUser: safeUser | null;
}
const ListingClient: React.FC<ListingClientProps> = ({
  listing,
  currentUser,
}) => {
  const category = useMemo(() => {
    return categories.find((item) => item.label === listing.category);
  }, [listing.category]);

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <ListingHead
            title={listing.title}
            imageSrc={listing.imageSrc}
            locationValue={listing.locationValue}
            id={listing.id}
            currentUser={currentUser}
          />
        </div>
      </div>
    </Container>
  );
};

export default ListingClient;

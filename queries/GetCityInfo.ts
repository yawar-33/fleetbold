import { API_BASE_URL } from "@/app/(others)/config";

export const fetchPlaceInfo = async (placeSlug:any) => {

  const API_ENDPOINT = `${API_BASE_URL}/real-estate-leads/${placeSlug}`;
  const response = await fetch(API_ENDPOINT, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

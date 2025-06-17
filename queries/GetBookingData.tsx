import { useMutation } from "@tanstack/react-query";

export const useGetBookingData = (legacy=false) => {
  const request = async (hash: string) => {
    const response = await fetch(legacy? `/api/bookings_legacy/`: `/api/bookings/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ hash })
    });

    if (!response.ok) {
      throw new Error('Failed to fetch trip data');
    }

    return response.json();
  };

  const { 
    isLoading, 
    mutate, 
    isSuccess, 
    data, 
    error 
  } = useMutation({
    mutationFn: request,
    onError: (error) => {
      console.error('Trip data fetch error:', error);
    }
  });

  return { 
    getBookingData: mutate, 
    isLoading, 
    isSuccess, 
    tripData: data,
    error 
  };
};
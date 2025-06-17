import { useMutation } from "@tanstack/react-query";

// Corrige tu hook useGetTripData
export const useGetTripData = () => {
  const request = async (reportId: string) => {
    // Usa el mismo nombre de parámetro que espera tu endpoint
    const response = await fetch(`/api/trips/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ hash: reportId }) // <-- aquí está el cambio clave
    });
    
    if (!response.ok) {
      const errorData = await response.text();
      console.error('API Error response:', errorData);
      throw new Error(`Failed to fetch trip data: ${response.status} ${errorData}`);
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
    getTripData: mutate,
    isLoading,
    isSuccess,
    tripData: data,
    error
  };
};
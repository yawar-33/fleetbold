import { useMutation, useQuery } from "@tanstack/react-query";
export const usePostSuscribeNewslatter = () => {
  const request = async (params: any) => {
    const obj = {
          template: "join_newslatter_template",
          senders: ['support@fleetbold.com'],
          recipients: [params.email],
          subject: "Thanks for Subscribing to the FleetBold Blog!",
          variables: {
            year: new Date().getFullYear().toString(),
            email: params.email
          }
        };
    const response = await fetch("/api/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    });
    const data = await response.json();
    return data;
  };

  const { isLoading, mutate, isSuccess, data } = useMutation(request);
  return { mutate, isLoading };
};

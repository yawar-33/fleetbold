import { useMutation, useQuery } from "@tanstack/react-query";

export const usePostSendWaitingListForm = () => {
  const request = async (params: any) => {
    const obj = {
          template: "waiting_list_app_template",
          senders: ['support@fleetbold.com'],
          recipients: [params.email],
          subject: "You’re on the FleetBold.com waiting List",
          variables: {
            year: new Date().getFullYear().toString(),
            full_name: params.full_name
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

import { useMutation, useQuery } from "@tanstack/react-query";
import { DOMAIN } from "@/app/(others)/config";
export const usePostSendReceivedForm = () => {
  const request = async (params: any) => {
    const obj = {
          template: "received_message_template",
          senders: ['support@fleetbold.com'],
          recipients: [params.email],
          subject: "We've received your message",
          variables: {
            year: new Date().getFullYear().toString()
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

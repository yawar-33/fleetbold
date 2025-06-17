import { useMutation, useQuery } from "@tanstack/react-query";
import { DOMAIN } from "@/app/(others)/config";
import { FormatVariable, VariableToCapital } from "@/lib/utils";

export const usePostNotifySupport = () => {
  const request = async (params: any) => {
    const body = Object.entries(params)
      .filter(
        ([key, value]) => key !== "subject" && key !== "tags" && value !== null
      )
      .map(([key, value]) => FormatVariable(key, value))
      .join("");

    const obj = {
      template: "mail_to_support_template",
      recipients: ["support@fleetbold.com"],
      subject: params.subject,
      variables: {
        body: body,
        form_url: DOMAIN,
      },
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

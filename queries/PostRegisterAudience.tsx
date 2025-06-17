import { useMutation } from "@tanstack/react-query";

export const usePostRegisterAudience = () => {
  const request = async (params: any) => {
    console.log(params);
    const obj = {
      email_address: params.email,
      status: "subscribed",
      subject: params.subject,
      merge_fields: {
        FNAME: params.full_name ?? "",
        PHONE: params.phone ?? "",
      },
      tags: [...(params.tags || []), "landing_page"]
    };

    try {
      const response = await fetch("/api/audience", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
      });

      // Check for HTTP errors
      if (!response.ok) {
        const errorData = await response.json();
        // Allow "Member Exists" error to pass through without throwing
        if (errorData?.error === "Member Exists") {
          console.warn("Member already exists, proceeding with the email request.");
          return { success: true, message: "Member already exists" };
        }
        throw new Error(errorData?.error || "Failed to register audience");
      }

      const data = await response.json();
      return data;
    } catch (error: any) {
      console.log(error);
      // Rethrow if it's not a "Member Exists" error
      if (error !== "Error: Member Exists") {
        throw error;
      }
      return { success: true, message: "Member already exists" };
    }
  };

  const { isLoading, mutate, isSuccess, data, error } = useMutation(request);

  return { mutate, isLoading, error };
};

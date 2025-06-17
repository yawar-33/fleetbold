"use client";

import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { usePostNotifySupport } from "@/queries/PostNotifySupport";
import { usePostRegisterAudience } from "@/queries/PostRegisterAudience";
import { usePostSuscribeNewslatter } from "@/queries/PostSuscribeNewslatter";

const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
  subject: z.string().nullable().optional(),
  tags: z.array(z.string()),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

export function SuscribeNewslaterForm() {
  const { toast } = useToast();
  const form = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
      subject: "",
      tags: [],
    },
    mode: "onChange",
  });

  const { mutate: postEmail, isLoading: isLoadingPostEmail } =
    usePostNotifySupport();
  const { mutate: postAudience, isLoading: isLoadingPostAudience } =
    usePostRegisterAudience();
  const { mutate: postEmailUser, isLoading: isLoadingPostEmailUser } =
    usePostSuscribeNewslatter();

  const onSubmit = (data: NewsletterFormData) => {
    data.subject = "New Subscription to the blog";
    data.tags = ["blog"];

    // First, register the audience
    postAudience(data, {
      onSuccess: () => {
        // On audience success, send the main email
        postEmail(data, {
          onSuccess: () => {
            // After the first email is sent successfully, send the user email
            postEmailUser(data, {
              onSuccess: () => {
                toast({
                  title: "Success:",
                  description: "Your message has been sent successfully!",
                });
                form.reset();
              },
              onError: () => {
                toast({
                  title: "Error:",
                  description:
                    "Something went wrong while sending the user email.",
                });
              },
            });
          },
          onError: () => {
            toast({
              title: "Error:",
              description: "Something went wrong while sending the email.",
            });
          },
        });
      },
      onError: (error) => {
        console.log(error);
        toast({
          title: "Error:",
          description: "" + error,
        });
      },
    });
  };

  return (
    <div className="flex justify-center p-6">
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-10 flex flex-col md:flex-row sm:flex-row lg:flex-row items-center bg-black p-2 rounded-md relative gap-2 w-full lg:w-1/2"
      >
        <div className="w-full">
          <Controller
            control={form.control}
            name="email"
            render={({ field, fieldState: { error } }) => (
              <>
                <Input
                  type="email"
                  placeholder="Email"
                  {...field}
                  className="w-full bg-transparent text-white placeholder:text-gray-400
                    focus-visible:ring-0 focus-visible:ring-offset-0 border-none lg:w-1/2 sm:w-full xs:w-full"
                />
                {error && (
                  <p className="text-red-500 text-xs mt-1 absolute top-[94px] lg:top-13 md:top-13 sm:top-13 ">
                    {error.message}
                  </p>
                )}
              </>
            )}
          />
        </div>
        <Button
          type="submit"
          className="bg-[#0086ff] hover:bg-[#006bcc] text-white w-full sm:w-[180px]"
          disabled={
            isLoadingPostEmail ||
            isLoadingPostAudience ||
            isLoadingPostEmailUser
          }
        >
          {isLoadingPostEmail || isLoadingPostAudience || isLoadingPostEmailUser
            ? "Joining..."
            : "Join our Newsletter"}
        </Button>
      </form>
    </div>
  );
}  

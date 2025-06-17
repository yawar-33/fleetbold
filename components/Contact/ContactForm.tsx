"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { isValidPhoneNumber } from "react-phone-number-input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { PhoneInput } from "./phone-input";
import { usePostNotifySupport } from "@/queries/PostNotifySupport";
import { usePostRegisterAudience } from "@/queries/PostRegisterAudience";
import { error } from "console";
import { usePostSendReceivedForm } from "@/queries/PostSendReceivedForm";

const formSchema = z.object({
  full_name: z
    .string()
    .min(1, "Name is required")
    .regex(/^[A-Za-z\s]+$/, "Name can only contain letters and spaces"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .refine(isValidPhoneNumber, { message: "Invalid phone number" })
    .optional()
    .nullable(),
  message: z
    .string()
    .min(5, "Message must be at least 5 characters")
    .max(500, "Message must be at most 500 characters"),
  subject: z.string().optional().nullable(),
  tags: z.array(z.string()).optional().nullable(),
});

type ContactFormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      email: "",
      phone: null,
      message: "",
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
    usePostSendReceivedForm();

  const onSubmit = (data: ContactFormData) => {
    data.subject = "New Contact Form";
    data.tags = ["contact_form"];
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
        <FormField
          control={form.control}
          name="full_name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <input
                  className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                  placeholder="Your Name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <input
                  className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                  placeholder="Your Email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <PhoneInput
                  placeholder="Your Phone (optional)"
                  {...field}
                  value={field.value || undefined}
                  defaultCountry="US"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <textarea
                  className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                  placeholder="Your Message"
                  rows={6}
                  {...field}
                  maxLength={500}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="w-full"
          type="submit"
          disabled={
            isLoadingPostEmail ||
            isLoadingPostAudience ||
            isLoadingPostEmailUser
          }
        >
          {isLoadingPostEmail || isLoadingPostAudience || isLoadingPostEmailUser
            ? "Sending..."
            : "Send Message"}
        </Button>
      </form>
    </Form>
  );
}

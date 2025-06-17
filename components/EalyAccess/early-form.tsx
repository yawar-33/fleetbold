"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { isValidPhoneNumber } from "react-phone-number-input";

import { useToast } from "@/hooks/use-toast";
import { PhoneInput } from "../Contact/phone-input";
import { usePostNotifySupport } from "@/queries/PostNotifySupport";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { usePostRegisterAudience } from "@/queries/PostRegisterAudience";
import { usePostSendReceivedForm } from "@/queries/PostSendReceivedForm";
import { usePostSendWaitingListForm } from "@/queries/PostSendWaitingListForm";

const contactSchema = z.object({
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
  subject: z.string().nullable().optional(),
  tags: z.array(z.string()).optional().nullable(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const EarlyForm = () => {
  const { toast } = useToast();
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      full_name: "",
      email: "",
      phone: null,
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
    usePostSendWaitingListForm();

  const onSubmit = (data: ContactFormData) => {
    data.subject = "New Waiting List Form";
    data.tags = ["early_access"];

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
                  placeholder="Your Phone"
                  {...field}
                  value={field.value || undefined}
                  defaultCountry="US"
                  className="mb-6"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="w-full rounded border border-primary bg-primary p-3 text-white transition hover:bg-opacity-90"
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
};

export default EarlyForm;

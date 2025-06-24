"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import { toast } from "sonner";
import emailjs from "emailjs-com";
import { isEmailValid } from "@/lib/helper";

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const [senderEmail, setSenderEmail] = useState("");
  const [senderMessage, setSenderMessage] = useState("");

  const sendEmail = async (
    senderEmail: string,
    senderMessage: string,
    e: any
  ) => {
    e.preventDefault();
    setLoading(true);

    if (!isEmailValid(senderEmail)) {
      toast.error("Invalid email address");
      setLoading(false);
      return;
    }

    try {
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

      const templateParams = {
        from_name: senderEmail,
        message: senderMessage,
        to_name: "Chaitanya",
      };

      const response = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      console.log(response);
      
      toast.success(`Email sent successfully from ${senderEmail}`);
      setSenderEmail("");
      setSenderMessage("");
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send email");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full overflow-hidden py-20">
      <div className="absolute inset-0 -z-10 grid grid-cols-3 p-4 pointer-events-none">
        <div className="border-r border-t border-dashed border-black"></div>
        <div className="border-b border-dashed border-black"></div>
        <div className="border-l border-t border-dashed border-black"></div>
      </div>
      <div className="absolute inset-10 -z-10 grid grid-cols-3 p-4 pointer-events-none">
        <div className="border-r border-t border-black"></div>
        <div className="border-b border-black"></div>
        <div className="border-l border-t border-black"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="bg-white dark:bg-black bg-opacity-80 dark:bg-opacity-80 backdrop-blur-sm p-8 rounded-lg max-w-3xl mx-auto">
          <h2 className="text-5xl font-medium tracking-tighter text-center mb-10">
            I&apos;m bored, let&apos;s talk.
          </h2>

          <div className="space-y-4 max-w-md mx-auto">
            <Input
              value={senderEmail}
              type="email"
              placeholder="Your email"
              required
              className="w-full"
              onChange={(e) => setSenderEmail(e.target.value)}
            />

            <Textarea
              value={senderMessage}
              placeholder="My dog says hi..."
              rows={4}
              className="w-full"
              onChange={(e) => setSenderMessage(e.target.value)}
            />

            <div className="flex justify-center">
              <Button
                variant="outline"
                size="sm"
                onClick={(e) => sendEmail(senderEmail, senderMessage, e)}
                disabled={loading}
                className="w-full sm:w-auto text-xs"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

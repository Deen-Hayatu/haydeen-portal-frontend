import { useEffect, useState } from "react";
import { useSearch } from "wouter";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";
import HeadTags from "@/components/seo/head-tags";
import { ApiClientError, requestJson } from "@/lib/api-client";

type Status = "pending" | "success" | "error";

const NewsletterUnsubscribe = () => {
  const search = useSearch();
  const [status, setStatus] = useState<Status>("pending");
  const [message, setMessage] = useState("Processing your request...");

  useEffect(() => {
    const params = new URLSearchParams(search);
    const email = params.get("email");
    const token = params.get("token");

    if (!email || !token) {
      setStatus("error");
      setMessage("This unsubscribe link is missing required information. Please use the link from your email exactly as sent.");
      return;
    }

    requestJson<{ success: boolean; message?: string }>("/api/newsletter/unsubscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, token }),
    })
      .then((result) => {
        setStatus("success");
        setMessage(result.message || "You've been unsubscribed from the newsletter.");
      })
      .catch((error) => {
        setStatus("error");
        setMessage(
          error instanceof ApiClientError
            ? error.message
            : "We couldn't process your unsubscribe request. Please try again later."
        );
      });
  }, [search]);

  return (
    <>
      <HeadTags
        title="Unsubscribe | Haydeen Technologies"
        description="Unsubscribe from the Haydeen Technologies newsletter."
        canonical="https://haydeentechnologies.com/newsletter/unsubscribe"
      />

      <section className="py-24 bg-white min-h-[60vh] flex items-center">
        <div className="container max-w-md text-center">
          {status === "pending" && (
            <>
              <Loader2 className="h-12 w-12 mx-auto mb-4 text-[#0A3D62] animate-spin" />
              <h1 className="text-2xl font-bold text-[#0A3D62] mb-2">Unsubscribing...</h1>
              <p className="text-gray-600">{message}</p>
            </>
          )}

          {status === "success" && (
            <>
              <CheckCircle className="h-12 w-12 mx-auto mb-4 text-[#27AE60]" />
              <h1 className="text-2xl font-bold text-[#0A3D62] mb-2">You're unsubscribed</h1>
              <p className="text-gray-600">{message}</p>
            </>
          )}

          {status === "error" && (
            <>
              <XCircle className="h-12 w-12 mx-auto mb-4 text-red-600" />
              <h1 className="text-2xl font-bold text-[#0A3D62] mb-2">Something went wrong</h1>
              <p className="text-gray-600">{message}</p>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default NewsletterUnsubscribe;

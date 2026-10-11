import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import EnhancedButton from "@/components/ui/enhanced-button";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { ApiClientError, requestJson } from "@/lib/api-client";
import MobileMoney from "@/components/payment/mobile-money";
import ContactFormProtectionProvider from "@/components/security/contact-form-protection";
import HeadTags from "@/components/seo/head-tags";
import { EnhancedValidation, emailRules, ghanaPhoneRules } from "@/components/forms/enhanced-form-validation";
import BetaSignupForm from "@/components/ui/beta-signup-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { contactFormSchema as sharedContactFormSchema } from "@shared/schema";

const formSchema = sharedContactFormSchema.extend({
  intent: z.enum(["demo", "partnership", "support", "general"], {
    required_error: "Please select a reason for contacting us"
  }),
  phone: z.string()
    .optional()
    .refine((val) => !val || /^(\+233|0)[2-5][0-9]{8}$/.test(val.replace(/\s/g, '')), {
      message: "Please enter a valid Ghana phone number"
    }),
  name: z.string().min(2, { message: "Name must be at least 2 characters" }).max(100, { message: "Name must be less than 100 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }).max(254, { message: "Email address is too long" }),
  company: z.string().max(100, { message: "Company name is too long" }).optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }).max(1000, { message: "Message must be less than 1000 characters" }),
});

const intentOptions = [
  { value: "demo", label: "Request a demo" },
  { value: "partnership", label: "Explore partnership" },
  { value: "support", label: "Technical support" },
  { value: "general", label: "General inquiry" },
];

type FormData = z.infer<typeof formSchema>;

const getIntentFromQuery = (): FormData["intent"] | undefined => {
  if (typeof window === "undefined") {
    return undefined;
  }

  const queryIntent = new URLSearchParams(window.location.search).get("intent");
  const isValidIntent = intentOptions.some((option) => option.value === queryIntent);
  return isValidIntent ? (queryIntent as FormData["intent"]) : undefined;
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      intent: getIntentFromQuery(),
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      honeypot: "",
    },
  });

  useEffect(() => {
    const intentFromQuery = getIntentFromQuery();
    if (intentFromQuery) {
      form.setValue("intent", intentFromQuery, { shouldValidate: true });
    }
  }, [form]);

  const onSubmit = async (data: FormData, recordAttempt: () => void) => {
    setIsSubmitting(true);
    recordAttempt();

    try {
      const result = await requestJson<{ success: boolean; message?: string }>("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      if (result.success) {
        toast({
          title: "Message sent!",
          description: "Thank you for contacting us. We'll get back to you soon.",
        });

        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      if (error instanceof ApiClientError) {
        error.details?.forEach((detail) => {
          const path = Array.isArray(detail.path) ? detail.path[0] : detail.path;
          if (typeof path === "string" && path in form.getValues()) {
            form.setError(path as keyof FormData, { message: detail.message });
          }
        });
      }

      toast({
        title: "Message failed to send",
        description:
          error instanceof Error
            ? error.message
            : "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactFormProtectionProvider>
      {({ canSubmit, remainingCooldown, recordAttempt }) => (
        <>
          <HeadTags
            title="Contact Us | Haydeen Technologies Ghana - Get in Touch"
            description="Contact Haydeen Technologies for innovative software solutions in Ghana. Located in Effiduase, Ashanti. We offer AgriConnect, GhEHR, and custom website design services."
            keywords="contact Haydeen Technologies, software company Ghana, Effiduase Ashanti, AgriConnect support, GhEHR contact, website design Ghana"
            canonical="https://haydeentechnologies.com/contact"
          />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0a3d62] via-[#0a2742] to-[#041425] text-white py-16 md:py-20">
        <div className="container">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact</h1>
            <p className="text-lg text-white/80">
              Request a demo, explore partnership, or get support.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[#0A3D62] mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Interested in our solutions or want to explore how we can work together? Fill out the form or contact us directly using the information below.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F2F2F2] flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-[#0A3D62]" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-[#0A3D62] mb-1">Visit Us</h3>
                    <p className="text-gray-600">Bw 14 Benz road<br />Effiduase Ashanti</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F2F2F2] flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-[#0A3D62]" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-[#0A3D62] mb-1">Email Us</h3>
                    <p className="text-gray-600">info@haydeentechnologies.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[#F2F2F2] flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-[#0A3D62]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#0A3D62] mb-1">Call Us</h3>
                    <p className="text-gray-600">+233 241 695 908</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-lg font-semibold text-[#0A3D62] mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="mailto:info@haydeentechnologies.com" className="w-10 h-10 rounded-full bg-[#F2F2F2] flex items-center justify-center hover:bg-[#0A3D62] hover:text-white transition-colors" aria-label="Email Us">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                  <a href="tel:+233241695908" className="w-10 h-10 rounded-full bg-[#F2F2F2] flex items-center justify-center hover:bg-[#0A3D62] hover:text-white transition-colors" aria-label="Call Us">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#F2F2F2] rounded-lg p-8">
              <Tabs defaultValue="contact" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="contact">General Inquiry</TabsTrigger>
                  <TabsTrigger value="beta">Beta Access</TabsTrigger>
                </TabsList>
                
                <TabsContent value="contact" className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-[#0A3D62] mb-2">Contact Us</h2>
                    <p className="text-gray-600 text-sm">
                      We respond within 24 hours.
                    </p>
                  </div>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit((data) => onSubmit(data, recordAttempt))} className="space-y-5">
                  {/* Honeypot: hidden from real users, bots tend to fill every field */}
                  <div className="absolute left-[-9999px]" aria-hidden="true">
                    <label htmlFor="contact-website">Leave this field blank</label>
                    <input
                      id="contact-website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      {...form.register("honeypot")}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="intent"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>What can we help you with?</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-white" data-testid="select-intent">
                              <SelectValue placeholder="Select a reason" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {intentOptions.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your full name" 
                              {...field} 
                              className="bg-white"
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
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="your.email@domain.com" 
                              type="email" 
                              autoComplete="email"
                              {...field} 
                              className="bg-white"
                            />
                          </FormControl>
                          <FormMessage />
                          <EnhancedValidation
                            value={field.value}
                            rules={emailRules}
                            showValidation={field.value.length > 0}
                          />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number (Optional)</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="+233 241 695 908"
                              type="tel" 
                              autoComplete="tel"
                              {...field} 
                              className="bg-white"
                            />
                          </FormControl>
                          <FormMessage />
                          <EnhancedValidation
                            value={field.value || ''}
                            rules={ghanaPhoneRules}
                            showValidation={Boolean(field.value && field.value.length > 5)}
                          />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company/Organization (Optional)</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your Company" 
                              {...field} 
                              className="bg-white"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us how we can help you..." 
                            className="min-h-[120px] bg-white"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <EnhancedButton 
                    type="submit" 
                    variant="primary"
                    size="lg"
                    fullWidth
                    isLoading={isSubmitting}
                    loadingText="Submitting..."
                    disabled={!canSubmit}
                    data-testid="button-submit-request"
                  >
                    Submit Request
                  </EnhancedButton>
                  
                  {!canSubmit && remainingCooldown > 0 && (
                    <p className="text-sm text-red-600 mt-2">
                      Please wait {Math.ceil(remainingCooldown / 1000)} seconds before submitting.
                    </p>
                  )}
                  
                  <div className="mt-6 p-4 bg-[#0A3D62]/5 rounded-lg border border-[#0A3D62]/10">
                    <h4 className="font-medium text-[#0A3D62] text-sm mb-2">What happens next?</h4>
                    <ol className="text-xs text-gray-600 space-y-1.5 list-decimal list-inside">
                      <li>We review your request within 24 hours</li>
                      <li>A team member will contact you via email or phone</li>
                      <li>We schedule a call to discuss your needs</li>
                    </ol>
                  </div>
                  
                  {/* Mobile Money Payment Option */}
                  <div className="mt-8 pt-8 border-t">
                    <h3 className="text-lg font-semibold text-[#0A3D62] mb-4">Quick Payment Options</h3>
                    <p className="text-gray-600 mb-4">
                      Need to make a quick payment? Use Mobile Money for instant transactions.
                    </p>
                    <MobileMoney
                      amount={100}
                      currency="GHS"
                      description="Consultation Fee"
                      onSuccess={() => {
                        toast({
                          title: "Payment Successful!",
                          description: "Thank you for your payment. We'll contact you soon.",
                        });
                      }}
                      onError={(error) => {
                        toast({
                          title: "Payment Failed",
                          description: error,
                          variant: "destructive",
                        });
                      }}
                    />
                  </div>
                </form>
              </Form>
                </TabsContent>
                
                <TabsContent value="beta">
                  <BetaSignupForm />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-[#F2F2F2]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A3D62] mb-4">Our Location</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Visit our office in Effiduase, Ashanti Region to meet our team and learn more about our solutions.
            </p>
          </div>
          
          <div className="h-[400px] w-full rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254697.24703437256!2d-1.3836!3d6.9186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf89a8dc4c8d51%3A0xf2b9ff0b9a2f7b1!2sEffiduase%2C%20Ghana!5e0!3m2!1sen!2sus!4v1689847225457!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Haydeen Technologies office location in Effiduase"
              aria-label="Google Maps showing Haydeen Technologies location in Effiduase, Ashanti"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0A3D62] mb-4">Frequently Asked Questions</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Find answers to common questions about our solutions and services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {/* FAQ Item 1 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
              <h3 className="text-xl font-bold text-[#0A3D62] mb-3">How can AgriConnect help my farming business?</h3>
              <p className="text-gray-600">
                AgriConnect provides real-time weather data, market connections, educational resources, and more to help you make better decisions, improve yields, and increase profitability. It's designed specifically for the challenges faced by West African farmers.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
              <h3 className="text-xl font-bold text-[#0A3D62] mb-3">Do I need consistent internet access to use your solutions?</h3>
              <p className="text-gray-600">
                We design our solutions with limited connectivity in mind. Many features of AgriConnect work offline, and we optimize for low-bandwidth connections. Data syncs when connectivity is available to ensure you always have the most current information.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
              <h3 className="text-xl font-bold text-[#0A3D62] mb-3">How do you handle data privacy and security?</h3>
              <p className="text-gray-600">
                We take data privacy and security seriously. All user data is encrypted, and we follow industry best practices for security. We never share your personal information with third parties without your explicit consent.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
              <h3 className="text-xl font-bold text-[#0A3D62] mb-3">Do you offer custom solutions for businesses?</h3>
              <p className="text-gray-600">
                Yes, we work with businesses and organizations to develop custom solutions tailored to specific needs and challenges. Contact us to discuss your requirements and how we can help you achieve your goals.
              </p>
            </div>
          </div>
        </div>
      </section>
        </>
      )}
    </ContactFormProtectionProvider>
  );
};

export default Contact;

import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users Table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  email: true,
});

// Blog Posts Table
export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  publishedAt: timestamp("published_at").defaultNow().notNull(),
  readTime: text("read_time").notNull(),
  coverImage: text("cover_image").notNull(),
  authorName: text("author_name").notNull(),
  authorRole: text("author_role").notNull(),
  authorAvatar: text("author_avatar").notNull(),
  category: text("category").notNull(),
});

export const insertBlogPostSchema = createInsertSchema(blogPosts).omit({
  id: true,
});

// Solutions Table
export const solutions = pgTable("solutions", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  longDescription: text("long_description").notNull(),
  slug: text("slug").notNull().unique(),
  color: text("color").notNull(),
  isAvailable: boolean("is_available").notNull().default(false),
});

export const insertSolutionSchema = createInsertSchema(solutions).omit({
  id: true,
});

// Solution Features Table
export const solutionFeatures = pgTable("solution_features", {
  id: serial("id").primaryKey(),
  solutionId: integer("solution_id").notNull().references(() => solutions.id),
  feature: text("feature").notNull(),
});

export const insertSolutionFeatureSchema = createInsertSchema(solutionFeatures).omit({
  id: true,
});

// Contact Form Submissions Table
export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  intent: text("intent"),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  company: text("company"),
  message: text("message").notNull(),
  submittedAt: timestamp("submitted_at").defaultNow().notNull(),
  isProcessed: boolean("is_processed").notNull().default(false),
});

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  submittedAt: true,
  isProcessed: true,
});

// Newsletter Subscriptions Table
export const newsletterSubscriptions = pgTable("newsletter_subscriptions", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  subscribedAt: timestamp("subscribed_at").defaultNow().notNull(),
  isActive: boolean("is_active").notNull().default(true),
});

export const insertNewsletterSubscriptionSchema = createInsertSchema(newsletterSubscriptions).pick({
  email: true,
});

// Types
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;

export type BlogPost = typeof blogPosts.$inferSelect;
export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;

export type Solution = typeof solutions.$inferSelect;
export type InsertSolution = z.infer<typeof insertSolutionSchema>;

export type SolutionFeature = typeof solutionFeatures.$inferSelect;
export type InsertSolutionFeature = z.infer<typeof insertSolutionFeatureSchema>;

export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;

export type NewsletterSubscription = typeof newsletterSubscriptions.$inferSelect;
export type InsertNewsletterSubscription = z.infer<typeof insertNewsletterSubscriptionSchema>;

// Validation schemas for API
export const contactFormSchema = z.object({
  intent: z.enum(["demo", "partnership", "support", "general"]).optional(),
  name: z.string().min(2, { message: "Name must be at least 2 characters" }).max(200, { message: "Name is too long" }),
  email: z.string().email({ message: "Please enter a valid email address" }).max(254, { message: "Email address is too long" }),
  phone: z.string().max(30, { message: "Phone number is too long" }).optional(),
  company: z.string().max(200, { message: "Company name is too long" }).optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }).max(2000, { message: "Message is too long" }),
  // Honeypot: hidden field real users never fill in. Checked server-side; not otherwise validated.
  honeypot: z.string().optional(),
});

export const newsletterSubscriptionFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }).max(254, { message: "Email address is too long" }),
  honeypot: z.string().optional(),
});

export const newsletterUnsubscribeFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }).max(254, { message: "Email address is too long" }),
  // Signed HMAC of the email, sent in the unsubscribe link, proves the requester
  // controls the address rather than unsubscribing an arbitrary known email.
  token: z.string().min(1, { message: "Missing unsubscribe token" }),
  honeypot: z.string().optional(),
});

// Job Applications Table
export const jobApplications = pgTable("job_applications", {
  id: serial("id").primaryKey(),
  position: text("position").notNull(), // "UX/UI Design Intern", "Agribusiness Research Intern", or "Health Information Intern"
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  location: text("location").notNull(),
  university: text("university"),
  studyField: text("study_field"),
  graduationYear: text("graduation_year"),
  experience: text("experience"), // Brief description of relevant experience
  motivation: text("motivation").notNull(), // Why they want to join
  cvFileName: text("cv_file_name"), // File name of uploaded CV
  cvFileData: text("cv_file_data"), // Base64 encoded CV file
  submittedAt: timestamp("submitted_at").defaultNow().notNull(),
  isProcessed: boolean("is_processed").notNull().default(false),
});

export const insertJobApplicationSchema = createInsertSchema(jobApplications).omit({
  id: true,
  submittedAt: true,
  isProcessed: true,
});

export type JobApplication = typeof jobApplications.$inferSelect;
export type InsertJobApplication = z.infer<typeof insertJobApplicationSchema>;

export const jobApplicationFormSchema = z.object({
  position: z.enum(["UX/UI Design Intern", "Agribusiness Research Intern", "Health Information Intern"], {
    message: "Please select a position"
  }),
  firstName: z.string().min(2, { message: "First name must be at least 2 characters" }).max(200, { message: "First name is too long" }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }).max(200, { message: "Last name is too long" }),
  email: z.string().email({ message: "Please enter a valid email address" }).max(254, { message: "Email address is too long" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }).max(30, { message: "Phone number is too long" }),
  location: z.string().min(2, { message: "Please enter your location" }).max(200, { message: "Location is too long" }),
  university: z.string().max(200, { message: "University name is too long" }).optional(),
  studyField: z.string().max(200, { message: "Field of study is too long" }).optional(),
  graduationYear: z.string().max(10, { message: "Graduation year is too long" }).optional(),
  experience: z.string().max(2000, { message: "Experience is too long" }).optional(),
  motivation: z.string().min(50, { message: "Please tell us why you want to join (at least 50 characters)" }).max(2000, { message: "Motivation is too long" }),
  // Note: cvFile is handled separately on the client and not validated here
  // The file is sent as FormData and processed by multer on the server
  cvFile: z.unknown().optional(), // File will be handled separately
  // Honeypot: hidden field real users never fill in. Checked server-side; not otherwise validated.
  honeypot: z.string().optional(),
});

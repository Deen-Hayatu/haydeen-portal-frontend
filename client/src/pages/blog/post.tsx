import { useRoute } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import HeadTags from "@/components/seo/head-tags";
import { ArticleSchema, BreadcrumbSchema } from "@/components/seo/schema-markup";
import { Badge } from "@/components/ui/badge";
import NotFound from "@/pages/not-found";
import type { BlogPost } from "@/lib/types";

async function fetchPost(slug: string): Promise<BlogPost> {
  const res = await fetch(`/api/blog/${slug}`, { credentials: "include" });
  if (!res.ok) {
    throw new Error(`${res.status}`);
  }
  return res.json();
}

const BlogPostPage = () => {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug ?? "";

  const { data: post, isLoading, isError } = useQuery<BlogPost>({
    queryKey: ["/api/blog", slug],
    queryFn: () => fetchPost(slug),
    enabled: Boolean(slug),
    retry: false,
  });

  if (isError) {
    return <NotFound />;
  }

  if (isLoading || !post) {
    return (
      <div className="container py-24 text-center text-muted-foreground" role="status" aria-live="polite">
        Loading…
      </div>
    );
  }

  return (
    <>
      <HeadTags
        title={`${post.title} | Haydeen Technologies Blog`}
        description={post.excerpt}
        keywords={`${post.category}, Haydeen Technologies, GhEHR, MedPal, Ghana healthcare`}
        canonical={`https://haydeentechnologies.com/blog/${post.slug}`}
        ogImage={post.coverImage}
        ogType="article"
      />
      <ArticleSchema
        headline={post.title}
        description={post.excerpt}
        url={`https://haydeentechnologies.com/blog/${post.slug}`}
        image={post.coverImage}
        datePublished={post.publishedAt}
        authorName={post.author.name}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://haydeentechnologies.com/" },
          { name: "Blog", url: "https://haydeentechnologies.com/blog" },
          { name: post.title, url: `https://haydeentechnologies.com/blog/${post.slug}` },
        ]}
      />

      <article className="py-16 md:py-20 bg-white">
        <div className="container max-w-3xl">
          <div className="mb-6">
            <Badge variant="outline">{post.category}</Badge>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0A3D62] mb-4">{post.title}</h1>
          <div className="flex items-center gap-3 mb-8 pb-8 border-b border-gray-100">
            <div className="h-10 w-10 rounded-full bg-[#0A3D62] text-white flex items-center justify-center text-sm font-semibold flex-shrink-0 overflow-hidden">
              {post.author.avatar ? (
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                post.author.name.charAt(0)
              )}
            </div>
            <div className="text-sm">
              <p className="font-medium text-gray-900">
                {post.author.name} <span className="text-gray-500 font-normal">· {post.author.role}</span>
              </p>
              <p className="text-gray-500">
                {format(new Date(post.publishedAt), "MMMM d, yyyy")} · {post.readTime}
              </p>
            </div>
          </div>

          {post.coverImage && (
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full rounded-xl mb-8 object-cover max-h-96"
              loading="eager"
              decoding="async"
            />
          )}

          <div className="prose prose-lg max-w-none prose-headings:text-[#0A3D62] prose-a:text-[#185abd]">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogPostPage;

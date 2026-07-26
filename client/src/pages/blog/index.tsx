import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import HeadTags from "@/components/seo/head-tags";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { BlogPost } from "@/lib/types";

const AuthorAvatar = ({ name, avatar }: { name: string; avatar: string }) => (
  <div className="h-8 w-8 rounded-full bg-[#0A3D62] text-white flex items-center justify-center text-xs font-semibold flex-shrink-0 overflow-hidden">
    {avatar ? (
      <img src={avatar} alt={name} className="h-full w-full object-cover" loading="lazy" decoding="async" />
    ) : (
      name.charAt(0)
    )}
  </div>
);

const Blog = () => {
  const { data: posts, isLoading, isError } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  return (
    <>
      <HeadTags
        title="Blog & Insights | Haydeen Technologies Ghana"
        description="Product updates, healthcare technology explainers, and customer stories from Haydeen Technologies - the team behind GhEHR and MedPal."
        keywords="Haydeen Technologies blog, GhEHR, MedPal, Ghana healthcare technology, electronic health records Ghana"
        canonical="https://haydeentechnologies.com/blog"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0a3d62] via-[#0a2742] to-[#041425] text-white py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & Insights</h1>
            <p className="text-xl opacity-90">
              Product updates, healthcare technology explainers, and real customer stories from the team building GhEHR and MedPal.
            </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          {isLoading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="status" aria-live="polite">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse rounded-xl border border-gray-100 overflow-hidden">
                  <div className="h-48 bg-gray-200" />
                  <div className="p-6 space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-1/3" />
                    <div className="h-6 bg-gray-200 rounded w-5/6" />
                    <div className="h-4 bg-gray-200 rounded w-full" />
                    <div className="h-4 bg-gray-200 rounded w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {isError && (
            <div className="max-w-2xl mx-auto text-center py-12">
              <p className="text-lg text-gray-600">
                We couldn't load blog posts right now. Please try again shortly.
              </p>
            </div>
          )}

          {!isLoading && !isError && posts?.length === 0 && (
            <div className="max-w-2xl mx-auto text-center py-12">
              <p className="text-lg text-gray-600">No posts published yet - check back soon.</p>
            </div>
          )}

          {!isLoading && !isError && posts && posts.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                  <Card className="h-full overflow-hidden transition-all duration-200 ease-hover-slide hover:-translate-y-1 hover:shadow-lg">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col h-[calc(100%-12rem)]">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline">{post.category}</Badge>
                        <span className="text-xs text-gray-500">{post.readTime}</span>
                      </div>
                      <h2 className="text-xl font-bold text-[#0A3D62] mb-2 group-hover:text-[#27AE60] transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 text-sm mb-4 flex-grow">{post.excerpt}</p>
                      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                        <AuthorAvatar name={post.author.name} avatar={post.author.avatar} />
                        <div className="text-xs">
                          <p className="font-medium text-gray-900">{post.author.name}</p>
                          <p className="text-gray-500">{format(new Date(post.publishedAt), "MMM d, yyyy")}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;

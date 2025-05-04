import { MDXRenderComponents } from '@/components/blog/MDXRenderComponents'
import { allPosts } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer2/hooks';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);

  if (!post) return notFound();

  const MDXContent = getMDXComponent(post.body.code);

  return (
    <article className="py-20 max-sm:px-4 mx-auto bg-primary-bg text-foreground">
      <h1 className="text-4xl font-bold mb-6 text-primary">{post.title}</h1>
      <div className="mb-6">

        <time className="text-sm text-primary-white">
          {format(new Date(post.date), "LLLL d, yyyy")}
        </time>

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-primary"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <MDXContent components={MDXRenderComponents} />
    </article >
  );
}
import { allPosts } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer2/hooks';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';

const components = {
  h1: ({ ...props }) => (
    <h1 className="text-4xl font-bold mb-6 text-primary" {...props} />
  ),
  h2: ({ ...props }) => (
    <h2 className="text-3xl font-semibold mt-8 mb-4 text-primary-white" {...props} />
  ),
  h3: ({ ...props }) => (
    <h3 className="text-2xl font-medium mt-6 mb-3 text-primary-white" {...props} />
  ),
  p: ({ ...props }) => (
    <p className="text-base leading-7 mb-4 text-foreground" {...props} />
  ),
  a: ({ ...props }) => (
    <a
      className="underline hover:no-underline hover:text-primary-hover cursor-pointer transition-colors text-primary"
      {...props}
    />
  ),
  ul: ({ ...props }) => (
    <ul className="list-disc pl-6 mb-4 text-foreground" {...props} />
  ),
  ol: ({ ...props }) => (
    <ol className="list-decimal pl-6 mb-4 text-foreground" {...props} />
  ),
  li: ({ ...props }) => (
    <li className="mb-2 text-foreground" {...props} />
  ),
  code: ({ ...props }) => (
    <code
      className="bg-secondary-bg text-primary-white px-1 py-0.5 rounded font-mono"
      {...props}
    />
  ),
  pre: ({ ...props }) => (
    <pre
      className="p-4 rounded-lg overflow-x-auto mb-4 bg-secondary-bg text-primary-white font-mono"
      {...props}
    />
  ),
  blockquote: ({ ...props }) => (
    <blockquote
      className="border-l-4 border-primary pl-4 italic mb-4 text-foreground"
      {...props}
    />
  ),
  img: ({ ...props }) => (
    <img
      className="max-w-full h-auto rounded-lg mb-4 border border-primary-gray"
      {...props}
    />
  ),
  hr: ({ ...props }) => (
    <hr className="my-8 border-primary-gray" {...props} />
  ),
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);

  if (!post) return notFound();

  const MDXContent = getMDXComponent(post.body.code);

  return (
    <article className="py-20 px-4 max-w-3xl mx-auto bg-primary-bg text-foreground">
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
      <MDXContent components={components} />
    </article >
  );
}
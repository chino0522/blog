import { allPosts } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer2/hooks';

interface PageProps {
  params: Promise<{ slug: string }>; // Change to Promise
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);

  if (!post) return <div>Post does not exist</div>;

  const MDXContent = getMDXComponent(post.body.code);

  return (
    <article>
      <h1>{post.title}</h1>
      <MDXContent />
    </article>
  );
}
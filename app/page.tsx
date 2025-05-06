import { allPosts } from '@/.contentlayer/generated';
import { compareDesc } from 'date-fns';
import Link from 'next/link';
import PostCard from '@/components/blog/PostCard';

export default function Page() {
  const posts = allPosts
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 3);

  return (
    <main className="flex flex-col gap-2 py-20">
      {/* Introduction Section */}
      <section className="mb-12 flex flex-col gap-2">
        <h1 className="text-2xl font-bold mb-4 text-primary">👋 Welcome to My Blog!</h1>
        <div className='flex flex-col gap-1'>
          <p className="text-foreground">
            <span className='text-primary'>{">"}</span> Here, I share my learning journey, coding insights, and helpful resources for fellow developers.
          </p>
          <p>
            <span className='text-primary'>{">"}</span> Whether you're a beginner or experienced, I hope you find something valuable and inspiring.
          </p>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="mb-12 flex flex-col gap-2">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Latest Posts</h2>
        <div className="space-y-4">
          {posts.map((post) => (
            <PostCard key={post._id} {...post} />
          ))}
        </div>
        <Link
          href="/blog"
          className="mt-4 inline-block text-primary hover:text-primary-hover font-medium"
        >
          → View all posts
        </Link>
      </section>

      {/* Guestbook Section */}
      <section className="mb-12 flex flex-col gap-2">
        <h2 className="text-2xl font-semibold mb-4 text-primary">📬 Guestbook</h2>
        <p className="text-foreground mb-4">
          Leave a comment or say hi! Powered by giscus.
        </p>
        <div className="bg-secondary-bg p-4 rounded-lg">
          <p className="text-primary-gray">
            [Giscus comment section placeholder]
          </p>
        </div>
      </section>
    </main>
  );
}
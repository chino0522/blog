import { Post } from '@/.contentlayer/generated';
import Link from 'next/link';
import { format } from "date-fns";

export default function PostCard(post: Post) {
    return (
        <Link
            href={`/blog/${post._raw.flattenedPath}`}
        >
            <section className="py-4 hover:cursor-pointer text-primary group">
                <p className="text-xl font-semibold group-hover:text-primary-hover transition-colors">{post.title}</p>

                <time className="block text-sm text-primary-gray group-hover:text-primary-white mt-1 transition-colors">
                    {format(new Date(post.date), "LLLL d, yyyy")}
                </time>

                <div className="flex flex-wrap gap-2 mt-2 group-hover:text-primary-hover transition-colors">
                    {post.tags?.map((tag: string) => (
                        <span
                            key={tag}
                            className="text-xs py-0.5"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
            </section>
        </Link>
    );
}

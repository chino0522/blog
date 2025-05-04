import PostCard from '@/components/blog/PostCard';
import { allPosts } from 'contentlayer/generated';
import { compareDesc } from "date-fns"

export default function Page() {
    const posts = allPosts
        .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));


    return (
        <div className='flex flex-col gap-2 py-20'>
            {posts.map((post) => (
                <PostCard key={post._id} {...post} />
            ))}
        </div>
    );
}
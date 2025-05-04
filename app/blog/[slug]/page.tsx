import { allPosts } from '@/.contentlayer/generated';

interface PageProps {
    params: {
        slug: string;
    }
}

export default function Page({ params }: PageProps) {
    const post = allPosts.find(post => post._raw.flattenedPath == params.slug)

    if (!post?.body.html) return <div>does not exist</div>

    return (
        <article>
            <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
        </article>
    );
}
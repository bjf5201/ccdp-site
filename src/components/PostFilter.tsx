import { useState, useMemo } from 'preact/hooks';

export type PostItem = {
    slug: string;
    title: string;
    date: Date;
    summary?: string;
    tags: string[];
    draft: boolean;
}

type Props = {
    posts: PostItem[];
}

export default function PostFilter({ posts }: Props) {
    const allTags = useMemo(() => {
        return Array.from(
            new Set(
                posts.flatMap((post) => post.tags ?? [])
            )
        );
    }, [posts]);

    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    const filteredPosts = selectedTag
        ? posts.filter((post) =>
              post.tags.includes(selectedTag)
          )
        : posts;

    return (
        <div>
            {/* Tag filter */}
            <div className="flex gap-2 mb-4 flex-wrap">
                <button
                    type="button"
                    onClick={() => setSelectedTag(null)}
                    className={`underline ${selectedTag === null ? 'fw-bold' : ''}`}
                >
                    All
                </button>

                {allTags.map((tag) => (
                    <button
                        key={tag}
                        type="button"
                        onClick={() => setSelectedTag(tag)}
                        className={`underline ${selectedTag === tag ? 'fw-bold' : ''}`}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            {/* Post list */}
            <ul>
                {filteredPosts.map((post) => {
                    return (
                        <li key={post.slug} className="mb-6">
                            <h2 className="text-xl fw-semibold">
                                {post.title}
                            </h2>

                            <p className="text-sm text-muted">
                                {post.date.toLocaleDateString()}
                            </p>

                            {post.summary && post.summary.length > 0 && <p>{post.summary}</p>}

                            {post.tags.length > 0 && (
                                <div className="flex gap-2 text-xs mt-2">
                                    {post.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-0.5 rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}

                            <a href={`/news/${post.slug}`} className="text-blue-600 underline mt-2 inline-block">
                                Read more &rarr;
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
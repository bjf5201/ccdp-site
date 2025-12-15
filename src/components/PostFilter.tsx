import { useState, useMemo } from 'preact/hooks';

export default function PostFilter({ posts = [] }) {
    const allTags = useMemo(() => {
        return Array.from(
            new Set(
                posts.flatMap((post) => post.frontmatter?.tags ?? [])
            )
        );
    }, [posts]);

    const [selectedTag, setSelectedTag] = useState(null);

    const filteredPosts = selectedTag
        ? posts.filter((post) =>
              post.frontmatter?.tags?.includes(selectedTag)
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
                    const { frontmatter } = post;

                    return (
                        <li key={frontmatter.slug} className="mb-6">
                            <h2 className="text-xl fw-semibold">
                                {frontmatter.title}
                            </h2>

                            <p className="text-sm text-muted">
                                {frontmatter.date}
                            </p>

                            <p>{frontmatter.summary}</p>

                            {frontmatter.tags && (
                                <div className="flex gap-2 text-xs mt-2">
                                    {frontmatter.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-0.5 rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}

                            <a href={`/news/${frontmatter.slug}`} className="text-blue-600 underline mt-2 inline-block">
                                Read more &rarr;
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
import { useState } from 'react';

export default function PostFilter({ posts }) {
    const allTags = Array.from(
        new Set(posts.flatMap(p => p.frontmatter.tags || []))
    );

    const [selectedTag, setSelectedTag] = useState(null);

    const filtered = selectedTag
        ? posts.filter(p => p.frontmatter.tags?.includes(selectedTag))
        : posts;

    return (
        <div>
            <div classname="flex gap-2 mb-4 flex-wrap">
                <button
                    onClick={() => setSelectedTag(null)}
                    className={`underline ${!selectedTag ? 'font-bold' : ''}`}
                >
                    All
                </button>
                {allTags.map(tag => (
                    <button
                        key={tag}
                        onClick={() => setSelectedTag(tag)}
                        className={`underline ${selectedTag === tag ? 'font-bold' : ''}`}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            <ul>
                {filtered.map((post) => (
                    <li key={post.frontmatter.slug} classname="mb-6">
                        <h2 classname="text-xl font-semibold">{post.frontmatter.title}</h2>
                        <p classname="text-sm text-gray-600">
                            {post.frontmatter.date}</p>
                        <p>{post.frontmatter.summary}</p>
                        <div className="flex gap-2 text-xs mt-2">
                            {post.frontmatter.tags?.map(tag => (
                                <span className="bg-gray-200 px-2 py-0.5 rounded">{tag}</span>
                            ))}
                        </div>
                        <a href={`/news/${post.frontmatter.slug}`} className="text-blue-600 underline mt-2 inline-block">
                            Read more →
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
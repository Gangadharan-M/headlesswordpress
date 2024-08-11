import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Index() {
    const [posts, setPosts] = useState([]); // State to hold posts

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch('http://wp-restapi.local/wp-json/wp/v2/posts');
                const data = await res.json();
                setPosts(data); // Update state with fetched posts
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts(); // Fetch posts on component mount
    }, []);

    console.log(posts);

    // Return statement must be inside the function body
    return (
        <div className='post-info'>
            {posts.length > 0 ? (
                posts.map((post) => (
                    <div key={post.id} >
                        <h2>
                            <Link href={`/blogs/${post.slug}`}>
                                {post.title.rendered}
                            </Link>
                        </h2>
                        {/* <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} /> */}
                        <p>{post.yoast_head_json.description}</p>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

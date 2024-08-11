import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

// Fetch all the paths (slugs) to generate the static pages
export async function getStaticPaths() {
  const res = await fetch(`http://wp-restapi.local/wp-json/wp/v2/posts`);
  const posts = await res.json();

  // Create paths with `slug` parameter
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

// Fetch the individual post data based on the slug
export async function getStaticProps({ params }) {
  const res = await fetch(`http://wp-restapi.local/wp-json/wp/v2/posts?slug=${params.slug}`);
  const posts = await res.json();

  // WordPress returns an array, so we need to get the first element
  const post = posts[0];

  return {
    props: { post },
  };
}

const PostPage = ({ post }) => {
  return (
    <div>
      <section className="post-banner-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h4>
                <Link href="/">Home</Link> <i className="fa-solid fa-angles-right"></i> 
                <Link href="/blogs">Blog</Link> <i className="fa-solid fa-angles-right"></i> 
              </h4>
              <h1>{post.title.rendered}</h1>
            </div>
            <div className="col-md-6">
              <img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1720077219/baremetal-bg_vw9dvu.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="post-sec">
        <div className="post-main bg-gray">
          <div className="post-left">
            <div className="stick">
              <h3>Table Of Content</h3>
              <ul>
                <li><Link href='#'>Section 1</Link></li>
                {/* Add more sections if needed */}
              </ul>
            </div>
          </div>
          <div className="post-content">
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </div>
        </div>
      </section>
    </div>
  );
};

PostPage.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.shape({
      rendered: PropTypes.string.isRequired,
    }).isRequired,
    content: PropTypes.shape({
      rendered: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default PostPage;

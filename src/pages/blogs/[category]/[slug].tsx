import React from 'react';
import { getPostBySlug, getAllPosts } from '@/lib/files';
import Blog from '@/layouts/blog';

const PostTemplate = (props: { post: { content: string } }) => {
    const {content} = props.post;

    return (
        <main>
            <Blog content={content}/>
        </main>
    );
};

export const getStaticProps = async (props: { params: { category: string; slug: string } }) => {
    const {category, slug} = props.params;

    const item = getPostBySlug(category, slug, [
        'title',
        'date',
        'blogTopImage',
        'characters',
        'category',
        'readTime',
        'tag',
        'description',
        'content'
    ]);

    return {
        props: {
            post: {
                ...item
            }
        }
    };
};

export const getStaticPaths = async () => {
    const posts = getAllPosts(['category', 'slug']);

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    // @ts-ignore
                    category: post.category,
                    // @ts-ignore
                    slug: post.slug
                }
            };
        }),
        fallback: false
    };
};

export default PostTemplate;
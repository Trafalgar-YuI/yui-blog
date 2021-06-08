import React from 'react';
import { getPostBySlug, getAllPosts } from '@/lib/files';
import ReactMarkdown from 'react-markdown';

const PostTemplate = (props: { post: { content: string } }) => {
    const {content} = props.post;

    return (
        <main>
            <ReactMarkdown children={content}/>
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

interface IS {

}

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
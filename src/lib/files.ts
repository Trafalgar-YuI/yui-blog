import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import dayjs from 'dayjs';

const postsDirectory = join(process.cwd(), 'data', 'blogs');

export function getPostSlugs(): { category: string; slug: string }[] {
    const category = fs.readdirSync(postsDirectory).filter(i => !i.includes('.'));
    const slugParam: { category: string; slug: string }[] = [];

    category.forEach(i => {
        const categoryPath = join(postsDirectory, i);
        const slugsPath = fs.readdirSync(categoryPath);
        slugsPath.forEach(j => {
            slugParam.push({category: i, slug: j.replace(/\.md$/, '')});
        });
    });

    return slugParam;
}

/**
 * title, date, dateTime, articleTopImage,
 * description, category, tag, slug
 * characters, readTime
 *
 * @param category
 * @param slug
 * @param fields
 * @returns {{}}
 */
export function getPostBySlug(category: string, slug: string, fields: string[]): {} {
    const fullPath = join(postsDirectory, `${category}/${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const {data, content} = matter(fileContents);
    const stats = readingTime(content);

    const dateTime: dayjs.Dayjs = dayjs(data.dateTime, ['YYYY-MM-DD HH:mm', 'YYYY-MM-DD HH:mm:ss']);

    const items = {};

    // Ensure only the minimal needed data is exposed
    fields.map((field) => {
        if (field === 'category') {
            // @ts-ignore
            return items[field] = category;
        }
        if (field === 'slug') {
            // @ts-ignore
            return items[field] = slug;
        }
        if (field === 'content') {
            // @ts-ignore
            return items[field] = content;
        }
        if (field === 'characters') {
            // @ts-ignore
            return items[field] = stats.words;
        }
        if (field === 'readTime') {
            // @ts-ignore
            return items[field] = stats.minutes;
        }
        if (field === 'date') {
            // @ts-ignore
            return items[field] = dateTime.format('YYYY-MM-DD');
        }
        if (data[field]) {
            // @ts-ignore
            return items[field] = data[field];
        }
        return null;
    });

    return items;
}

export function getAllPosts(fields: string[]): {}[] {
    const slugs = getPostSlugs();

    return slugs
        .map((value: { category: string; slug: string }) => getPostBySlug(value.category, value.slug, fields))
        // @ts-ignore
        .sort((post1: { dateTime: string }, post2: { dateTime: string }) => {
            const dateTime1: Date = dayjs(post1.dateTime, ['YYYY-MM-DD HH:mm', 'YYYY-MM-DD HH:mm:ss']).toDate();
            const dateTime2: Date = dayjs(post2.dateTime, ['YYYY-MM-DD HH:mm', 'YYYY-MM-DD HH:mm:ss']).toDate();

            return dateTime1 > dateTime2 ? -1 : 1;
        });
}
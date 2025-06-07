import type { PageServerLoad } from './$types';
import { getBook } from '$lib/data/books';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = ({ params }) => {
  const data = getBook(params.book);
  if (!data) throw error(404);
  const verses = data.chapters[params.chapter];
  if (!verses) throw error(404);
  return { book: data.name, slug: params.book, chapter: params.chapter, verses };
};

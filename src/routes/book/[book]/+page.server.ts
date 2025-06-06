import type { PageServerLoad } from './$types';
import { getBook } from '$lib/data/books';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = ({ params }) => {
  const data = getBook(params.book);
  if (!data) throw error(404);
  const chapters = Object.keys(data.chapters).sort((a, b) => Number(a) - Number(b));
  return { slug: params.book, book: data.name, chapters };
};

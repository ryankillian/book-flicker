import { listBookNames } from '$lib/data/books';

export function load() {
  return { books: listBookNames() };
}

import { listBooks } from '$lib/data/books';

export function load() {
  return { books: listBooks() };
}

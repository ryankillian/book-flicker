export interface Verse { verse: number; text: string }
export interface BookData { name: string; chapters: Record<string, Verse[]> }

const modules = import.meta.glob('./books/*.json', { eager: true, query: '?json' }) as Record<string, BookData>

function slugify(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

const map: Record<string, BookData> = {}
for (const mod of Object.values(modules)) {
  const slug = slugify(mod.name)
  map[slug] = mod
}

export const allBooks = map

export function listBookNames() {
  return Object.values(map)
    .map((b) => b.name)
    .sort((a, b) => a.localeCompare(b))
}

export function listBooks() {
  return Object.entries(map)
    .map(([slug, data]) => ({ slug, name: data.name }))
    .sort((a, b) => a.name.localeCompare(b.name))
}

export function getBook(slug: string): BookData | undefined {
  return map[slugify(slug)]
}

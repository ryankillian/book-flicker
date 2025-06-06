export interface Verse { verse: number; text: string }
export interface BookData { name: string; chapters: Record<string, Verse[]> }

const modules = import.meta.glob('./books/*.json', { eager: true, as: 'json' }) as Record<string, BookData>

const map: Record<string, BookData> = {}
for (const [path, mod] of Object.entries(modules)) {
  const key = path.split('/').pop()?.replace('.json', '') ?? ''
  map[key] = mod
}

export const allBooks = map

export function listBookNames() {
  return Object.keys(map).sort()
}

export function getBook(name: string): BookData | undefined {
  return map[name]
}

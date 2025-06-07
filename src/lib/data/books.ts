export interface Verse {
	verse: number;
	text: string;
}
export interface BookData {
	name: string;
	chapters: Record<string, Verse[]>;
}

const modules = import.meta.glob('./books/*.json', { eager: true, as: 'json' }) as Record<
	string,
	BookData
>;

const map: Record<string, BookData> = {};
for (const [path, mod] of Object.entries(modules)) {
	const key = path.split('/').pop()?.replace('.json', '') ?? '';
	map[key] = mod;
}

export const allBooks = map;

export interface BookInfo {
	slug: string;
	name: string;
}

export function listBooks(): BookInfo[] {
	return Object.entries(map)
		.map(([slug, data]) => ({ slug, name: data.name }))
		.sort((a, b) => a.name.localeCompare(b.name));
}

export function listBookNames() {
	return Object.keys(map).sort();
}

export function getBook(name: string): BookData | undefined {
	const key = name.replace(/\s+/g, '');
	return map[key];
}

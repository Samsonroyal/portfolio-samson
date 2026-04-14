/**
 * Convert an article title to a URL-friendly slug
 * @param {string} title
 * @returns {string}
 */
export function titleToSlug(title) {
	return title
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
}

/**
 * Find an article from RSS items by matching its slug
 * @param {Array} items - RSS feed items
 * @param {string} slug - URL slug to match
 * @returns {Object|undefined}
 */
export function findArticleBySlug(items, slug) {
	return items.find((item) => titleToSlug(item.title) === slug);
}

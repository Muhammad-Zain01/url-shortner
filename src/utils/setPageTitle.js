/**
 * Sets the document title with a consistent format
 * @param {string} title - The page-specific title
 */
export const setPageTitle = (title) => {
  document.title = title ? `${title} | URL Shortener` : 'URL Shortener';
};

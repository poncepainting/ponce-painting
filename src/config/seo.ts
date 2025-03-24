/**
 * SEO configuration file
 * Centralized management of SEO-related settings
 */

/**
 * Paths that should automatically be set as noindex, nofollow
 * These pages typically contain sensitive, duplicate, or utility content
 * that shouldn't be indexed by search engines
 */
export const nonIndexedPaths = [
  // Authentication pages
  '/login',
  '/signup',
  '/register',
  '/reset-password',
  '/forgot-password',
  
  // Thank you and confirmation pages
  '/thank-you',
  '/confirmation',
  '/success',
  
  // Admin and dashboard pages
  '/admin',
  '/admin/*',
  '/dashboard',
  '/dashboard/*',
  '/account',
  '/account/*',
  
  // Preview pages
  '/preview',
  '/preview/*',
  
  // Utility pages
  '/api/*',
  '/404',
  '/500',
  '/maintenance',
  
  // Duplicate content or temporary pages
  '/temp/*',
  '/staging/*',
  '/test/*'
];

/**
 * Determines if a given path should be excluded from indexing
 * 
 * @param path The path to check
 * @returns True if the path should not be indexed, false otherwise
 */
export function shouldExcludeFromIndexing(path: string): boolean {
  // Normalize the path for comparison
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // Check against the nonIndexedPaths
  return nonIndexedPaths.some(pattern => {
    // Check exact matches
    if (pattern === normalizedPath) {
      return true;
    }
    
    // Check wildcard patterns
    if (pattern.endsWith('/*')) {
      const prefix = pattern.slice(0, -1); // Remove the '*'
      return normalizedPath.startsWith(prefix);
    }
    
    return false;
  });
}

/**
 * Generates robots meta tag content based on a path
 * 
 * @param path The path to check
 * @returns The robots meta tag content
 */
export function getRobotsMetaForPath(path: string): string {
  return shouldExcludeFromIndexing(path) 
    ? 'noindex, nofollow'
    : 'index, follow';
} 
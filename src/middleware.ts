import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define path patterns that should be excluded from 404 tracking
const EXCLUDE_PATTERNS = [
  /^\/api\//, // API routes
  /^\/favicon\.ico$/, // Favicon
  /^\/robots\.txt$/, // Robots.txt
  /^\/sitemap/, // Sitemaps
  /\.(png|jpg|jpeg|gif|svg|webp|css|js|woff|woff2|ttf|eot)$/, // Static assets
  /^\/_next\//, // Next.js internal routes
];

/**
 * Middleware function to handle 404 errors and broken links
 * This runs on all requests before they reach the application
 */
export function middleware(request: NextRequest) {
  // Skip if we're already on the 404 page
  if (request.nextUrl.pathname === '/404') {
    return NextResponse.next();
  }

  // Get the request URL
  const url = request.nextUrl.clone();

  // Function to check if this is a path we should ignore for 404 tracking
  const shouldIgnorePath = (path: string) => {
    return EXCLUDE_PATTERNS.some(pattern => pattern.test(path));
  };

  // Skip tracking for excluded paths
  if (shouldIgnorePath(url.pathname)) {
    return NextResponse.next();
  }

  const requestHeaders = new Headers(request.headers);
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // Add resource hint headers to improve LCP
  if (request.nextUrl.pathname === '/') {
    response.headers.set(
      'Link',
      '</images/painter-in-front-of-home.jpg>; rel=preload; as=image; fetchpriority=high, </images/ponce-painting-about-us.jpg>; rel=preload; as=image'
    );
  }

  // Set security headers
  // ... existing code ...

  return response;
}

// Configure middleware to run on all paths except static files and API routes
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images (app stored images)
     * - public (public assets)
     */
    '/((?!_next/static|_next/image|favicon.ico|images/|public/).*)',
  ],
};

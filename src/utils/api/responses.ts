import { NextResponse } from 'next/server';

/**
 * Standard API response utility functions to ensure consistent
 * response formats across all API endpoints
 */

export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}

/**
 * Create a successful API response
 */
export function successResponse<T = any>(data?: T, message = 'Operation successful'): NextResponse {
  const response: ApiResponse<T> = {
    success: true,
    message,
  };

  if (data !== undefined) {
    response.data = data;
  }

  return NextResponse.json(response);
}

/**
 * Create an error API response
 */
export function errorResponse(
  error: string = 'An error occurred',
  status: number = 500
): NextResponse {
  return NextResponse.json(
    {
      success: false,
      error,
    },
    { status }
  );
}

/**
 * Create a bad request (400) API response
 */
export function badRequestResponse(error: string = 'Bad request'): NextResponse {
  return errorResponse(error, 400);
}

/**
 * Create a not found (404) API response
 */
export function notFoundResponse(error: string = 'Resource not found'): NextResponse {
  return errorResponse(error, 404);
}

/**
 * Create an unauthorized (401) API response
 */
export function unauthorizedResponse(error: string = 'Unauthorized'): NextResponse {
  return errorResponse(error, 401);
}

/**
 * Create a forbidden (403) API response
 */
export function forbiddenResponse(error: string = 'Forbidden'): NextResponse {
  return errorResponse(error, 403);
}

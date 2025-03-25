import type { NextRequest } from 'next/server';
import fs from 'fs';
import path from 'path';
import { successResponse, badRequestResponse, errorResponse } from '@/utils/api';

interface BrokenLinkData {
  brokenUrl: string;
  referringUrl: string;
  userAgent: string;
  timestamp: string;
}

/**
 * API route to log broken links
 * Records data to a JSON file in development
 * In production, this would connect to a database
 */
export async function POST(request: NextRequest) {
  try {
    const data: BrokenLinkData = await request.json();

    // Validate required fields with safe fallbacks
    if (!data.brokenUrl) {
      return badRequestResponse('Missing required fields');
    }

    // Add defaults for missing fields
    data.referringUrl = data.referringUrl || 'unknown-referrer';
    data.userAgent = data.userAgent || 'unknown-user-agent';
    data.timestamp = data.timestamp || new Date().toISOString();

    // Log broken link information
    try {
      await logBrokenLink(data);
    } catch (loggingError) {
      // Just log the error but don't fail the request
      console.error('Error while logging broken link:', loggingError);
    }

    // Return a success response
    return successResponse(null, 'Broken link logged successfully');
  } catch (error) {
    console.error('Error processing broken link request:', error);
    return errorResponse('Failed to process request');
  }
}

/**
 * Log broken link to a file or database
 */
async function logBrokenLink(data: BrokenLinkData) {
  try {
    // For development: Log to a JSON file
    if (process.env.NODE_ENV === 'development') {
      const logDir = path.join(process.cwd(), 'logs');
      const logFile = path.join(logDir, 'broken-links.json');

      // Ensure the logs directory exists
      if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir, { recursive: true });
      }

      // Read existing logs or initialize empty array
      let logs: BrokenLinkData[] = [];
      if (fs.existsSync(logFile)) {
        try {
          const fileContent = fs.readFileSync(logFile, 'utf-8');
          logs = JSON.parse(fileContent);
        } catch (e) {
          console.error('Failed to parse existing logs:', e);
        }
      }

      // Add new log and write to file
      logs.push(data);
      fs.writeFileSync(logFile, JSON.stringify(logs, null, 2), 'utf-8');

      console.log(`[Development] Broken link logged to ${logFile}`);
    } else {
      // For production: Just log to console for now
      console.log('[Production] Broken link detected:', data);
    }
  } catch (error) {
    console.error('Error in logBrokenLink:', error);
    // Don't throw, just log the error
  }
}

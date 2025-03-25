import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { sendFormSubmissionEmail } from '@/app/api/email-service';
import { QuoteFormData } from '@/types/forms';
import { badRequestResponse, errorResponse, successResponse } from '@/utils/api';

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const formData = (await request.json()) as QuoteFormData;

    // Simple validation
    if (!formData.email || !formData.name) {
      return badRequestResponse('Missing required fields');
    }

    // Send email notification
    const emailResult = await sendFormSubmissionEmail(formData);

    if (!emailResult.success) {
      console.warn('Email notification failed:', emailResult.message);
      // We'll still consider the submission successful even if email fails
      // But log it for monitoring
    }

    // Here you could also store the submission in a database if needed

    // Return a success response
    return successResponse(null, 'Form submitted successfully');
  } catch (error) {
    console.error('Error processing form submission:', error);
    return errorResponse('Failed to process submission');
  }
}

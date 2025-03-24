import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { sendFormSubmissionEmail } from '@/utils/emailService';
import { QuoteFormData } from '@/types/forms';

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const formData = await request.json() as QuoteFormData;
    
    // Simple validation
    if (!formData.email || !formData.name) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
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
    return NextResponse.json({ 
      success: true,
      message: 'Form submitted successfully' 
    });
    
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { error: 'Failed to process submission' },
      { status: 500 }
    );
  }
} 
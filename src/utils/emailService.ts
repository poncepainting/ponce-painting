import nodemailer from 'nodemailer';
import { QuoteFormData } from '@/types/forms';

type EmailResult = {
  success: boolean;
  message: string;
};

// Configure the email transporter
// For production, you would use your actual SMTP credentials
const getTransporter = () => {
  // For development, use a test account
  if (process.env.NODE_ENV !== 'production') {
    // For testing, we'll use ethereal.email
    // In a real app, you would configure this with actual SMTP credentials
    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.ethereal.email',
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER || 'ethereal_user',
        pass: process.env.EMAIL_PASS || 'ethereal_pass',
      },
    });
  }
  
  // For production, use actual SMTP settings
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT) || 587,
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

/**
 * Send a notification email about a new form submission
 */
export const sendFormSubmissionEmail = async (formData: QuoteFormData): Promise<EmailResult> => {
  try {
    const transporter = getTransporter();
    
    // Create the email content
    const mailOptions = {
      from: process.env.EMAIL_FROM || 'noreply@yourbusiness.com',
      to: process.env.EMAIL_TO || 'contact@yourbusiness.com',
      subject: 'New Quote Request Submission',
      text: `
        New quote request from ${formData.name}
        
        Contact Details:
        - Name: ${formData.name}
        - Email: ${formData.email}
        - Phone: ${formData.phone || 'Not provided'}
        
        Address: ${formData.address}
        
        Service Requested: ${formData.service}
        
        Additional Message:
        ${formData.message || 'No additional message provided.'}
      `,
      html: `
        <h2>New Quote Request</h2>
        <p>You have received a new quote request from <strong>${formData.name}</strong>.</p>
        
        <h3>Contact Details:</h3>
        <ul>
          <li><strong>Name:</strong> ${formData.name}</li>
          <li><strong>Email:</strong> ${formData.email}</li>
          <li><strong>Phone:</strong> ${formData.phone || 'Not provided'}</li>
        </ul>
        
        <h3>Address:</h3>
        <p>${formData.address}</p>
        
        <h3>Service Requested:</h3>
        <p>${formData.service}</p>
        
        <h3>Additional Message:</h3>
        <p>${formData.message || 'No additional message provided.'}</p>
      `,
    };
    
    // Send the email
    const info = await transporter.sendMail(mailOptions);
    
    console.log('Email sent:', info.messageId);
    
    return {
      success: true,
      message: 'Email notification sent successfully',
    };
  } catch (error) {
    console.error('Error sending email:', error);
    
    return {
      success: false,
      message: error instanceof Error 
        ? `Failed to send email: ${error.message}` 
        : 'Failed to send email due to an unknown error',
    };
  }
}; 
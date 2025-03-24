# Form Handling Guide

This document explains how form submissions are handled in this website template and provides instructions for configuring form submission capabilities.

## Overview

The template includes a complete form handling solution that:

1. Collects form data from users
2. Validates submissions
3. Processes the data through one of three handling methods
4. Provides success/error feedback to users

## Form Handling Options

The template offers three ways to handle form submissions, which can be easily switched via configuration:

### 1. Formspree (Default, Works Everywhere)

The default and simplest option uses [Formspree](https://formspree.io/), a third-party form handling service that requires:
- No server configuration
- No backend code
- Works on any hosting platform

#### Configuration for Formspree:

1. Create a free account at [Formspree](https://formspree.io/)
2. Create a new form to get a form ID (looks like `xaybdpzk`)
3. Update your `.env.local` file:
   ```
   NEXT_PUBLIC_FORM_HANDLER=formspree
   NEXT_PUBLIC_FORMSPREE_ID=your_formspree_form_id
   ```

### 2. Next.js API Route (Optimized for Vercel)

This option uses a Next.js API route with email sending capabilities:
- Best for Vercel deployments
- Requires server-side execution
- Sends email notifications via SMTP

#### Configuration for Vercel:

1. Update your `.env.local` file:
   ```
   NEXT_PUBLIC_FORM_HANDLER=api
   EMAIL_HOST=smtp.example.com
   EMAIL_PORT=587
   EMAIL_SECURE=false
   EMAIL_USER=your_email_username
   EMAIL_PASS=your_email_password
   EMAIL_FROM=noreply@yourbusiness.com
   EMAIL_TO=contact@yourbusiness.com
   ```

2. Make sure these variables are added to your Vercel environment variables in the Vercel dashboard.

### 3. EmailJS (Alternative Client-Side Option)

Another client-side only option that doesn't require server configuration:
- Works on any hosting platform
- No server configuration needed
- Sends emails directly from the client

#### Configuration for EmailJS:

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template 
3. Update your `.env.local` file:
   ```
   NEXT_PUBLIC_FORM_HANDLER=emailjs
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## Switching Between Methods

You can easily switch between these methods by updating the `NEXT_PUBLIC_FORM_HANDLER` environment variable:

```
# For Formspree (works everywhere)
NEXT_PUBLIC_FORM_HANDLER=formspree

# For Vercel deployments
NEXT_PUBLIC_FORM_HANDLER=api

# For an alternative client-side option
NEXT_PUBLIC_FORM_HANDLER=emailjs
```

## Implementation Details

The form handling is implemented in these key files:

- `src/config/forms.ts` - Configuration for the form handling
- `src/utils/formSubmission.ts` - Core functions for submitting forms
- `src/utils/emailService.ts` - Email sending service (for API option)
- `src/app/api/submit-form/route.ts` - Server API endpoint (for Vercel)

## EmailJS Template Setup

If using EmailJS, your template should include these variables:
- `{{name}}`
- `{{email}}`
- `{{phone}}`
- `{{address}}`
- `{{service}}`
- `{{message}}`

## Form Validation

Client-side validation is implemented in the form components. If using the API option, server-side validation is also performed.

## Extending Form Functionality

To add new fields to the form:

1. Update the `QuoteFormData` interface in `src/types/forms.ts`
2. Add the new fields to the form components
3. Update the email templates (if using API) or EmailJS template

## Security Considerations

- All form handlers have rate limiting to prevent abuse
- API credentials are stored in environment variables
- Client-side methods use restricted API keys
- Consider adding CAPTCHA for additional protection

## Troubleshooting

### Formspree Issues
- Verify your form ID is correct
- Check if you've exceeded the free tier limits
- Check browser console for CORS errors

### API Route Issues
- Verify SMTP credentials are correct
- Check server logs for detailed error messages
- Make sure environment variables are set on Vercel

### EmailJS Issues
- Confirm service ID, template ID, and public key are correct
- Check if your template is properly configured
- Verify you haven't exceeded the free tier limits 
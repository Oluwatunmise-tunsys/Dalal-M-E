# EngineeriX - AI-Powered Engineering Services Website

A modern, full-stack web application for engineering services with AI-powered quotations, chatbot consultation, and lead management.

## 🎯 Features

- **Responsive Marketing Website** - Modern UI with hero, services, projects, and contact pages
- **AI-Powered Quote Assistant** - Instant project quotations using OpenAI/Groq integration
- **Engineering AI Chatbot** - 24/7 intelligent assistant for service inquiries
- **Lead Management** - Automatic lead capture from quotes and contact forms
- **Professional Dashboard** - View and manage quotes and leads
- **Mobile Optimized** - Fully responsive design for all devices

## 📋 Requirements

- Node.js 18+ and npm
- Supabase account (free tier available)
- OpenAI API key (or Groq/OpenRouter alternative)
- Netlify account for deployment

## 🚀 Quick Start

### 1. Clone & Install

```bash
npm install
```

### 2. Environment Setup

Create a `.env.local` file in the project root:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# AI API Keys (choose one)
OPENAI_API_KEY=your_openai_key
# GROQ_API_KEY=your_groq_key
# OPENROUTER_API_KEY=your_openrouter_key
```

### 3. Database Setup

1. Create a Supabase project at https://supabase.com
2. Go to SQL Editor and run the migration:
   - Copy the SQL from `supabase/migrations/init.sql`
   - Paste and execute it in the Supabase SQL editor
3. Get your credentials and add them to `.env.local`

### 4. Run Development Server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## 📁 Project Structure

```
.
├── src/
│   ├── app/               # Next.js app directory
│   │   ├── page.tsx      # Homepage
│   │   ├── about/        # About page
│   │   ├── services/     # Services page
│   │   ├── projects/     # Portfolio page
│   │   ├── quote/        # Quote request page
│   │   ├── contact/      # Contact page
│   │   ├── layout.tsx    # Root layout
│   │   └── globals.css   # Global styles
│   ├── components/        # React components
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   ├── QuoteForm.tsx
│   │   ├── ContactForm.tsx
│   │   └── Chatbot.tsx
│   └── lib/
│       └── supabase.ts    # Supabase client & utilities
├── netlify/
│   └── functions/         # Netlify serverless functions
│       ├── ai-quote.ts    # AI quotation endpoint
│       ├── ai-chat.ts     # AI chatbot endpoint
│       └── contact.ts     # Contact form endpoint
├── supabase/
│   └── migrations/
│       └── init.sql       # Database schema
├── netlify.toml           # Netlify configuration
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # TailwindCSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🔧 API Endpoints

### POST /api/ai-quote
Generate AI-powered project quotation

**Request:**
```json
{
  "projectType": "hvac|coldroom|electrical|combination",
  "projectSize": "small|medium|large|enterprise",
  "requirements": "basic-cooling|medium-load|heavy-load|industrial",
  "location": "Dubai, UAE",
  "email": "user@example.com"
}
```

**Response:**
```json
{
  "costEstimate": "$15,000 - $22,000",
  "duration": "3-4 weeks",
  "summary": "Professional HVAC installation with materials and labor included..."
}
```

### POST /api/ai-chat
Send message to AI engineering assistant

**Request:**
```json
{
  "message": "How much does an HVAC system cost?",
  "conversationHistory": [],
  "userEmail": "user@example.com"
}
```

**Response:**
```json
{
  "reply": "HVAC costs vary based on project size and complexity...",
  "suggestedFollowUps": ["Tell me more about your project", "Get an instant quote"]
}
```

### POST /api/contact
Submit contact form

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+971 50 123 4567",
  "company": "ABC Company",
  "subject": "quote-inquiry",
  "message": "I need a quote for HVAC installation"
}
```

## 🌐 Deployment

### Deploy to Netlify

1. Push your code to GitHub/GitLab/Bitbucket

2. Connect your repository to Netlify

3. Set environment variables in Netlify:
   - Go to Site settings → Build & deploy → Environment
   - Add all variables from `.env.local`

4. Netlify will automatically detect `netlify.toml` and deploy

5. Your site will be live at: `https://your-site.netlify.app`

### Build & Test Locally Before Deploying

```bash
npm run build
npm start
```

## 🤖 Configuring AI Models

### OpenAI (Recommended for Production)
```bash
OPENAI_API_KEY=sk-...
```

### Groq (Free & Fast)
```bash
GROQ_API_KEY=gsk_...
```

### OpenRouter (Multiple Models)
```bash
OPENROUTER_API_KEY=sk-...
```

## 📊 Database Schema

### leads
- Captures leads from contact forms and chatbot
- Fields: name, email, phone, company, message, source, created_at

### quote_requests
- Stores all quotation requests
- Fields: email, projectType, projectSize, requirements, location, costEstimate, duration, summary

### chatbot_messages
- Logs all chatbot conversations for analytics
- Fields: userEmail, userMessage, assistantReply, created_at

## 🎨 Customization

### Colors & Branding
Edit `tailwind.config.ts` and `src/app/globals.css`

### Content
Edit individual pages in `src/app/` directory

### AI Behavior
Modify the system prompts in:
- `netlify/functions/ai-quote.ts`
- `netlify/functions/ai-chat.ts`

## 🧪 Testing

### Local Testing
```bash
npm run dev
# Visit http://localhost:3000
```

### Test Quote Generation
1. Navigate to /quote
2. Fill form and submit
3. Check browser console for errors

### Test Chat
1. Click chatbot icon (bottom-right)
2. Send a test message
3. Verify AI response

## 🔒 Security

- API keys stored in environment variables
- Netlify functions validate requests
- Supabase RLS policies protect data
- CORS headers configured appropriately

## 📞 Support

For issues or questions:
- Check error logs in browser console
- Review Netlify function logs
- Verify environment variables are set
- Check API key validity

## 📝 License

This project is provided as-is for demonstration purposes.

## 🚀 Future Enhancements

- [ ] Email notifications for new leads
- [ ] Admin dashboard for viewing leads
- [ ] PDF export for quotes
- [ ] Multi-language support
- [ ] Advanced analytics
- [ ] SMS notifications
- [ ] Booking/scheduling integration
- [ ] Payment integration

---

Built with Next.js, TailwindCSS, Netlify, and Supabase

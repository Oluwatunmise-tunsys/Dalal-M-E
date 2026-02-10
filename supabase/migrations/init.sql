-- Create leads table
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  company VARCHAR(255),
  message TEXT NOT NULL,
  source VARCHAR(50) NOT NULL CHECK (source IN ('chatbot', 'contact-form', 'quote-request')),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create quote_requests table
CREATE TABLE IF NOT EXISTS quote_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) NOT NULL,
  project_type VARCHAR(100) NOT NULL,
  project_size VARCHAR(50) NOT NULL,
  requirements VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  cost_estimate VARCHAR(255),
  duration VARCHAR(100),
  summary TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create chatbot_messages table
CREATE TABLE IF NOT EXISTS chatbot_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_email VARCHAR(255),
  user_message TEXT NOT NULL,
  assistant_reply TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better query performance
CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_leads_source ON leads(source);
CREATE INDEX idx_leads_created_at ON leads(created_at);

CREATE INDEX idx_quote_requests_email ON quote_requests(email);
CREATE INDEX idx_quote_requests_created_at ON quote_requests(created_at);

CREATE INDEX idx_chatbot_messages_user_email ON chatbot_messages(user_email);
CREATE INDEX idx_chatbot_messages_created_at ON chatbot_messages(created_at);

-- Create triggers for updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_leads_updated_at BEFORE UPDATE ON leads
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_quote_requests_updated_at BEFORE UPDATE ON quote_requests
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Enable RLS (Row Level Security)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE chatbot_messages ENABLE ROW LEVEL SECURITY;

-- Create policies to allow anyone to insert
CREATE POLICY "Anyone can insert leads"
  ON leads FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can view leads"
  ON leads FOR SELECT
  USING (true);

CREATE POLICY "Anyone can insert quote requests"
  ON quote_requests FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can view quote requests"
  ON quote_requests FOR SELECT
  USING (true);

CREATE POLICY "Anyone can insert chatbot messages"
  ON chatbot_messages FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can view chatbot messages"
  ON chatbot_messages FOR SELECT
  USING (true);

export default function handler(req, res) {
    res.status(200).json({
      openaiApiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY || 'Not Set'
    });
  }
  
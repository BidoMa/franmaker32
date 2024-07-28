import OpenAI from 'openai';

if (!process.env.NEXT_PUBLIC_OPENAI_API_KEY) {
  throw new Error('The OPENAI_API_KEY environment variable is missing or empty; please provide it.');
}

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { message } = req.body;

      if (!message) {
        return res.status(400).json({ error: 'Message is required' });
      }

      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: message },
        ],
      });

      res.status(200).json({ message: completion.choices[0].message.content });
    } catch (error) {
      console.error('Error with OpenAI API:', error);

      if (error.response) {
        // Error de respuesta de OpenAI API
        res.status(error.response.status).json({ error: error.response.data });
      } else {
        // Otro tipo de error
        res.status(500).json({ error: 'Error with OpenAI API' });
      }
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

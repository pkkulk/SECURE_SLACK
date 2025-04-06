import { Request, Response, NextFunction, RequestHandler } from 'express';
import { detectIntent } from '../detectIntent'; // adjust path to your file

export const chatbotReply: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  const { message } = req.body;

  try {
    const botReply = await detectIntent(message);
    console.log('Bot Reply:', botReply);
    res.status(200).json({ reply: botReply });
    return;
  } catch (error) {
    console.error('Chatbot error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
    return;
  }
};

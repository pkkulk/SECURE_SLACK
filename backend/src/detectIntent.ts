import { SessionsClient } from '@google-cloud/dialogflow';
import { v4 as uuid } from 'uuid';
import dotenv from 'dotenv';

dotenv.config();

const projectId = process.env.DIALOGFLOW_PROJECT_ID as string;

let sessionClient: SessionsClient;

if (process.env.NODE_ENV === 'production') {
  // In production (e.g., Vercel), parse the JSON string from env variable
  const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS!);
  sessionClient = new SessionsClient({ credentials });
} else {
  // In development (local), use the credentials file
  sessionClient = new SessionsClient({
    keyFilename: './config/google-credentials.json',
  });
}

export const detectIntent = async (message: string): Promise<string> => {
  const sessionId = uuid();
  const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: message,
        languageCode: 'en',
      },
    },
  };

  const [response] = await sessionClient.detectIntent(request);
  const result = response.queryResult;

  return result?.fulfillmentText || "Sorry, I didn’t understand that.";
};

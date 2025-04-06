import { SessionsClient } from '@google-cloud/dialogflow';
import { v4 as uuid } from 'uuid';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const projectId = process.env.DIALOGFLOW_PROJECT_ID as string;

const sessionClient = new SessionsClient({
  keyFilename: path.join(__dirname, '../config/google-credentials.json'),
});

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

import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  try {
    // Find the absolute path of the json directory
    const jsonDirectory = path.join(process.cwd(), 'data');
    // Read the json data file
    const fileContents = await fs.readFile(jsonDirectory + '/your-data.json', 'utf8');
    // Return the content as JSON
    res.status(200).json(JSON.parse(fileContents));
  } catch (error) {
    res.status(500).json({ error: 'Unable to load data' });
  }
}
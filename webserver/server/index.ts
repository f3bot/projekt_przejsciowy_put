import express, { Request, Response } from "express";
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../s7-webserver-client/dist')));

app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../s7-webserver-client/dist/src/views/index/index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
  
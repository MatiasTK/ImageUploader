import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes/upload.routes';

dotenv.config();

export default function startExpress() {
  const { PORT } = process.env;

  const app = express();

  app.use(cors());

  app.use(router);

  app.get('/', (req, res) => {
    res.sendFile(`${process.cwd()}/public/index.html`);
  });

  app.use(express.static(`${process.cwd()}/public`));

  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
}

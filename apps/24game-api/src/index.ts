import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import solutionRouter from './api/routes/solution';
import dbInit from './db/init';

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3001;

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send('This is a 24Game API.');
});

app.use('/cheat24', solutionRouter);

try {
  app.listen(port, () => {
    dbInit();
    console.log(`Server running on http://localhost:${port}`);
  });
} catch (error) {
  console.log({
    error:
      error instanceof Error
        ? error.message
        : 'Failed to do something exceptional',
  });
}

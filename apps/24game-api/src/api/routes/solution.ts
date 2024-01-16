import { Router, Request, Response } from 'express';
import { validateNumber } from '../../utils/validate';
import { create, getByProblem } from '../services/solutionService';

interface queryNumber {
  number: string;
}

const { solve24Game } = require('../../utils/solver');
const solutionRouter = Router();

solutionRouter.get(
  '/',
  async (req: Request<{}, {}, {}, queryNumber>, res: Response) => {
    const { query } = req;
    const number = query.number;

    // check for 4digit and not contain 0
    const validation = validateNumber(number);
    if (!validation) {
      return res.status(400).json({
        message: 'The number must have 4 digits and not contain zero.',
      });
    }

    // check for available solutions
    const availableSolution = await getByProblem(number);
    if (availableSolution.solutions) {
      return res.status(200).json(availableSolution.solutions);
    }

    // find solutions
    const generatedSolutions = solve24Game(
      number.charAt(0),
      number.charAt(1),
      number.charAt(2),
      number.charAt(3)
    );

    if (!generatedSolutions) {
      return res.status(204).json({ message: 'Cannot find any solution' });
    }

    const result = await create({
      problem: number,
      solutions: generatedSolutions,
    });

    return res.status(200).json(generatedSolutions);
  }
);

export default solutionRouter;

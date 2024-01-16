import Solution from '../models/solution';
import { SolutionInput, SolutionOutput } from '../models/solution';

export const create = async (
  payload: SolutionInput
): Promise<SolutionOutput> => {
  const solution = await Solution.create(payload);
  return solution;
};

export const getByProblem = async (
  problem: string
): Promise<SolutionOutput> => {
  const solution = await Solution.findOne({ where: { problem: problem } });
  if (solution === null) {
    return { solutions: undefined };
  }
  return solution;
};

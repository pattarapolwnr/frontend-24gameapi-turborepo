import * as solutionDal from '../../db/dal/solution';
import { SolutionInput, SolutionOutput } from '../../db/models/solution';

export const create = (payload: SolutionInput): Promise<SolutionOutput> => {
  return solutionDal.create(payload);
};

export const getByProblem = (number: string): Promise<SolutionOutput> => {
  return solutionDal.getByProblem(number);
};

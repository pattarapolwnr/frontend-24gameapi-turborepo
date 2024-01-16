import Solution from './models/solution';

const dbInit = () => {
  Solution.sync({ alter: true });
};

export default dbInit;

import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../config';

interface SolutionAttributes {
  id: number;
  problem: string;
  solutions: string[];
}

export interface SolutionInput extends Optional<SolutionAttributes, 'id'> {}
export interface SolutionOutput {
  id?: number;
  problem?: string;
  solutions?: string[];
}

class Solution
  extends Model<SolutionAttributes, SolutionInput>
  implements SolutionAttributes
{
  public id!: number;
  public problem!: string;
  public solutions!: string[];
}

Solution.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    problem: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    solutions: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  },
  { sequelize: sequelizeConnection }
);

export default Solution;

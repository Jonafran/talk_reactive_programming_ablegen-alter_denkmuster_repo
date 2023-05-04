import { candidates } from '../../../../util';

export const result = candidates
  .filter((candidate) => candidate.age > 18 && candidate.size > 175)
  .sort((a, b) => a.age - b.age)
  .map((candidate) => ({
    firstName: candidate.firstName,
    lastName: candidate.lastName,
  }));

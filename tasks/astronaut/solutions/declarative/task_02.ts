import { candidates } from '../../../../util';

export const result = candidates
  .filter((candidate) => candidate.age > 18 && candidate.size > 175)
  .map((candidate) => ({
    firstName: candidate.firstName,
    lastName: candidate.lastName,
  }));

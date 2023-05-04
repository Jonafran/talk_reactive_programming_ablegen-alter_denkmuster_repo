import { candidates, IPrivacyCandidate } from '../../../../util';

export let result: IPrivacyCandidate[] = [];

for (let i = 0; i < candidates.length; i++) {
  let candidate = candidates[i];

  if (candidate.age > 18 && candidate.size > 175) {
    const { firstName, lastName } = candidate;
    result.push({ firstName, lastName });
  }
}

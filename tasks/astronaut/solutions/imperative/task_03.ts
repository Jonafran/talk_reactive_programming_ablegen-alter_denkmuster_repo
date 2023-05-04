import { candidates, ICandidate, IPrivacyCandidate } from '../../../../util';

export let result: IPrivacyCandidate[] = [];
let filteredCandidates: ICandidate[] = [];

for (let i = 0; i < candidates.length; i++) {
  let candidate = candidates[i];

  if (candidate.age > 18 && candidate.size > 175) {
    filteredCandidates.push(candidate);
  }
}

for (var i = 1; i < filteredCandidates.length; i++) {
  for (var j = 0; j < i; j++) {
    if (filteredCandidates[i].age < filteredCandidates[j].age) {
      var temp = filteredCandidates[i];
      filteredCandidates[i] = filteredCandidates[j];
      filteredCandidates[j] = temp;
    }
  }
}

for (let i = 0; i < filteredCandidates.length; i++) {
  let filteredCandidate = filteredCandidates[i];
  const { firstName, lastName } = filteredCandidate;
  result.push({ firstName, lastName });
}

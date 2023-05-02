// ============== EXERCISE DESCRIPTION ===============
/**
 * Wir suchen aus einer Liste von Kandidates geeignete Kandidat*innen fürs Raumfahrtprogramm
 *
 * Aufgaben
 * 1. Die Kandidaten müssen folgende Eigenschafften erfüllen
 * ~ Alter ist über 18
 * ~ Größe liegt über 175
 * 2. Die geeigneten Kandidaten werden nur mit Vor- und Nachnamen ausgegeben
 */
// ===================================================

import { candidates, IPrivacyCandidate } from '../../../../util';

export let result: IPrivacyCandidate[] = [];

for (let i = 0; i < candidates.length; i++) {
  let candidate = candidates[i];

  if (candidate.age > 18 && candidate.size > 175) {
    const { firstName, lastName } = candidate;
    result.push({ firstName, lastName });
  }
}

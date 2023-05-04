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

import { candidates } from '../../../../util';

export const result = candidates
  .filter((candidate) => candidate.age > 18 && candidate.size > 175)
  .map((candidate) => ({
    firstName: candidate.firstName,
    lastName: candidate.lastName,
  }));

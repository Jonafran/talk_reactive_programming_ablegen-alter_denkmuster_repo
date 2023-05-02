// ================== EXERCISE DESCRIPTION =====================
/**
 * Implementiere einen Timer
 *
 * Aufgaben
 * 1. Starte und Pausiere den Timer.
 * Bei erneutem Start ist es in Ordnung den Counter zu resetten.
 */
// =============================================================
import { NEVER, timer, merge, Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Timer } from '../../../util/classes';

const counter = new Timer();

export const result = new Subscription();

result.add(
  merge(
    counter.start$.pipe(map(() => true)),
    counter.pause$.pipe(map(() => false))
  )
    .pipe(switchMap((isTicking) => (isTicking ? timer(0, 100) : NEVER)))
    .subscribe(counter.renderCounter)
);

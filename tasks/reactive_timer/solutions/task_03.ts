// ================== EXERCISE DESCRIPTION =====================
/**
 * Implementiere einen Timer
 *
 * Aufgaben
 * 1. Starte und Pausiere den Timer.
 * Bei erneutem Start ist es in Ordnung den Counter zu resetten.
 * 2. Bei erneutem Start soll der Counter weiterlaufen
 * 3. Bei Reset soll der Timer auf 0 gestellt werden
 */
// =============================================================
import { NEVER, timer, merge, scan, startWith } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Timer } from '../../../util/classes';

const counter = new Timer();

export const result = counter.reset$
  .pipe(
    map(() => 0),
    startWith(0),
    switchMap(() =>
      merge(
        counter.start$.pipe(map(() => true)),
        counter.pause$.pipe(map(() => false))
      ).pipe(
        startWith(false),
        switchMap((isTicking) => (isTicking ? timer(0, 100) : NEVER)),
        scan((acc) => ++acc),
        startWith(0)
      )
    )
  )
  .subscribe(counter.renderCounter);

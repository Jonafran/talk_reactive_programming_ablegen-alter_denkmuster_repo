// ================== EXERCISE DESCRIPTION =====================
/**
 * Implementiere einen Timer
 *
 * Aufgaben
 * 1. Starte und Pausiere den Timer.
 * Bei erneutem Start ist es in Ordnung den Counter zu resetten.
 * 2. Bei erneutem Start soll der Counter weiterlaufen
 */
// =============================================================
import { NEVER, timer, merge, scan } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Timer } from '../../../util/classes';

const counter = new Timer();

export const result = merge(
  counter.start$.pipe(map(() => true)),
  counter.pause$.pipe(map(() => false))
)
  .pipe(
    switchMap((isTicking) => (isTicking ? timer(0, 100) : NEVER)),
    scan((acc) => acc++)
  )
  .subscribe(counter.renderCounter);

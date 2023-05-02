import { Observable, switchMap } from 'rxjs';
/**
 * You have Two Observables (A and B).
 *
 * Fulfill the following requirements
 * B triggers events
 * B cannot trigger without at least one trigger from A
 * */

const A$ = new Observable((observer) => observer.next('A'));
const B$ = new Observable((observer) => observer.next('B'));

export const result = A$.pipe(switchMap(() => B$)).subscribe(console.log);

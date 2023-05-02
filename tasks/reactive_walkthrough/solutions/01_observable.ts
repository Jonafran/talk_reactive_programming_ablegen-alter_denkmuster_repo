import { Observable } from 'rxjs';
/**
 * Create an Observable that emits an Value "Foo"
 * export the value as result
 * */

export let result: unknown;
const DataStream$ = new Observable((observer) => observer.next('Foo'));
DataStream$.subscribe((value) => (result = value));

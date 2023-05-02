import { Observable } from 'rxjs';
/**
 * Create an Observable that emits an Value "Foo"
 * export the value as result
 * */

export const result = new Observable((observer) =>
  observer.next('Foo')
).subscribe(console.log);

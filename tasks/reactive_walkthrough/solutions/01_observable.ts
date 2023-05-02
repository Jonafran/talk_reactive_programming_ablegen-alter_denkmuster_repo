import { Observable } from 'rxjs';

const DataStream$ = new Observable((observer) => observer.next('Foo'));
DataStream$.subscribe();

export const result = 'foo';

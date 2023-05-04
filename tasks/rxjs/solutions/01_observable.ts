import { Observable } from 'rxjs';

export const result: Observable<number> = new Observable((observer) => {
  observer.next(1);
  setTimeout(() => observer.next(2), 1000);
});

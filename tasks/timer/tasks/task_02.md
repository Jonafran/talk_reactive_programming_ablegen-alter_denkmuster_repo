# Task 02 - Start Continue

##### Kriteria
* Bei erneutem Start soll der Counter weiterlaufen

##### Utility
###### class Timer
```
start$: Observable<Event>
pause$: Observable<Event>
reset$: Observable<Event>
renderCounter: (value: number) => void
```

###### renderTimer: () => void
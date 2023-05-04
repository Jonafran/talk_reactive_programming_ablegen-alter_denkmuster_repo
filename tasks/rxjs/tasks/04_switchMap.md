# Task 4 - Scan

### Erzeuge ein neues Observable, welches nach 2 Sekunden den Wert 42 emitted. Gebe die Werte aus "03 erst aus, wenn das neue Observable emitted hat. Addiere den Wert des neuen Observables auf die Werte von 03.

##### Kriterien

- Observable 03 emitted erst nach dem neuen Observable
- Die Werte des neuen Observables werden auf die von 03 addiert

##### Utility

```
Funktion    -> renderRxJS(result: Observable<number>)
```

##### Ziel

> `renderRxJS` erhält alle Werte aus 03 nachdem das neue Observable emitted hat und mit 42 addiert

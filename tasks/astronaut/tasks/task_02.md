# Task 2 - Privacy - Nur Vor- und Nachnamen

### Die Kandidaten aus Task 1 werden nur mit Vor- und Nachnamen weitergegeben

##### Kriterien

- Vorname - `firstName`
- Nachname - `lastName`

##### Utility

```
Interface   -> ICandidate
Intercace   -> IPrivacyCandidate
Variable    -> candidates: ICandidate[]
Funktion    -> renderAstronaut(result: Object)
```

##### Datenstruktur

###### ICandidate[]

```
firstName: string
lastName: string
age: number
size: number
isCapable: boolean
```

###### IPrivacyCandidate[]

```
firstName: string
lastName: string
```

##### Ziel

> `renderAstronaut` erhält eine Liste von Kandidaten, die den Kriterien entsprechen

# Number distributor


The script ```distributor.js``` allows you to match numbers against names. For instance, it may be used for exam tickets distribution. It uses SHA-3 algorithm, which allows to change numbers dramatically.

## Usage:
Preliminarily execute: 
```
npm install
```

```distributor.js``` takes 3 parameters, one of which is optional:

```node distributor.js --file <file with names> --tickets <number of tickets> [--parameter <number of tickets>]```

For example:

```node distributor.js --file "file.txt" --tickets 17 --parameter 38```
```node distributor.js --file "file.txt" --tickets 42```

## [Example output](./distribution.txt):

```
Lil Sorry: 3
Alfie Torres: 5
Lennox Griffin: 7
Kieran Gill: 1
Haydn Ashley: 9
Aidan Juarez: 7
Phoenix Beck: 9
Asa Welch: 5
Ebony Castillo: 5
...
```
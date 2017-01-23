# Internations FE Dev Task

## Setup
```bash
git clone git@github.com:djungowski/internations.git
cd internations
npm install
```
npm install automatically runs ```npm build``` after all packages have been installed

## Building
```bash
npm run build
```
Build target is build/

## Opening Application
1. Run Build
2. Open build/index.html

Alternative
1. Run Build
2. Start server
```bash
npm run dev:server
```
3. Open ```localhost:8080```

If you need any other port than 8080, use:
```bash
PORT=1337 npm run dev:server
```

## Running the tests
```bash
npm test
```

## Development
Running the build automatically on filechange:
```bash
npm run dev
```

Start tests with automatic re-test on filechange:
```bash
npm run karma
```

## Gulp
The Build is done using gulp. The following targets are available

|Target				|Description									|
|-------------------|-----------------------------------------------|
|build				|Runs the complete build. Target: build/		|
|build-css			|Only builds css. Target: build/assets/css		|
|build-js			|Only builds js. Target: build/assets/js		|
|build-templates	|Only builds templates. Target: build/			|
|dev				|Running the build automatically on filechange	|
|default			|Runs the build									|

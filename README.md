## angular 2 playground [ ![Codeship Status for kddc/angular-2-playground](https://codeship.com/projects/e38268d0-42e4-0134-c947-6642d9f7ed7f/status?branch=master)](https://codeship.com/projects/168291)

A simple starter project demonstrating the basic concepts of Angular 2.

```bash
npm install
npm start
```

> If the `typings` folder doesn't show up after `npm install` please install them manually with:

> `npm run typings -- install`

### npm scripts

some npm scripts defined in the `package.json`:

* `npm start` - run webpack development server
* `npm run build` - run the webpack compiler
* `npm run tsc` - runs the TypeScript compiler once.
* `npm test` - compiles, runs and watches the karma unit tests (spec.js)
* `npm run test:watch` - compiles, runs and watches the karma unit tests in watch mode
* `npm run e2e` - run protractor e2e tests, written in JavaScript (*e2e-spec.js)

### Unit Tests
TypeScript unit-tests are usually in the `app` folder. Their filenames must end in `.spec`.

Look for the example `app/app.component.spec.ts`.
Add more `.spec.ts` files as you wish; we configured karma to find them.

Run it with `npm test`

That command first compiles the application, then simultaneously re-compiles and runs the karma test-runner.
Both the compiler and the karma watch for (different) file changes.

Shut it down manually with Ctrl-C.

Test-runner output appears in the terminal window.
We can update our app and our tests in real-time, keeping a weather eye on the console for broken tests.
Karma is occasionally confused and it is often necessary to shut down its browser or even shut the command down (Ctrl-C) and
restart it. No worries; it's pretty quick.

### End-to-end (E2E) Tests

E2E tests are in the `e2e` directory, side by side with the `app` folder.
Their filenames must end in `.e2e-spec.ts`.

Look for the example `e2e/app.e2e-spec.ts`.
Add more `.e2e-spec.js` files as you wish (although one usually suffices for small projects);
we configured protractor to find them.

Thereafter, run them with `npm run e2e`.

That command first compiles, then simultaneously starts the Http-Server at `localhost:8080`
and launches protractor.  

The pass/fail test results appear at the bottom of the terminal window.

Shut it down manually with Ctrl-C.

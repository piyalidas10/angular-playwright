# angular-playwright
Playwright is a framework for Web Testing and Automation. It allows testing Chromium, Firefox and WebKit with a single API.

<img src="./playwright-basic/playwright.png" width="100%">

“Playwright E2E tests live outside src in a tests/ directory to enforce separation of concerns, avoid bundling test code, and align with Playwright’s standalone execution and CI-first design.”


| Test Type        | Location            |
| ---------------- | ------------------- |
| Unit             | `src/**/**.spec.ts` |
| Component        | `src/**/**.spec.ts` |
| E2E (Playwright) | `tests/e2e/`        |
| Mocks/Fixtures   | `tests/fixtures/`   |


## ✅ Recommended (Angular 19 + Playwright – Best Practice)
📁 Put E2E tests OUTSIDE src/
```
project-root/
│
├── src/                    ← Angular app source
│   ├── app/
│   └── assets/
│
├── tests/                  ← ✅ E2E tests live here
│   ├── e2e/
│   │   ├── home.spec.ts
│   │   ├── login.spec.ts
│   │   ├── admin.spec.ts
│   │
│   ├── fixtures/
│   │   └── users.json
│   │
│   └── utils/
│       └── auth.helper.ts
│
├── playwright.config.ts
├── angular.json
└── package.json
```

## Playwright UI mode (MOST LIKE SIESTA)
```
npx playwright test --ui
```

This opens:
    -   Test list
    -   Run / debug buttons
    -   Time-travel viewer
    -   Traces, screenshots, videos

👉 This is Playwright’s Siesta-like UI

## ▶️ Run Playwright UI mode
```
ng serve
npx playwright test --ui
```

## Debug mode (step by step)
```
npx playwright test --debug
```

    -   Pauses on each step
    -   Opens Inspector
    -   You can step through actions

## Siesta vs Playwrite

> “Unlike Siesta, Playwright is headless by default because it’s CI-first. For local development, UI mode or headed mode can be enabled to visually observe test execution.”

| Siesta          | Playwright        |
| --------------- | ----------------- |
| UI-first        | Automation-first  |
| Manual friendly | CI friendly       |
| Always visible  | Visible on demand |


## Unit Test vs E2E (Interview Trap)
| Unit Test             | E2E Test                    |
| --------------------- | --------------------------- |
| Tests component logic | Tests real browser behavior |
| Jasmine / Karma       | Playwright                  |
| Fast                  | Slower                      |
| No browser            | Real browser                |

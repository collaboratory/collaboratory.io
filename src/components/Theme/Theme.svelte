<slot />

<style global>
  html,
  body {
    font-family: "Aleo", serif;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    background: var(--page-bg);
    color: var(--page-fg);
    font-size: var(--text-md);
    line-height: 1.57em;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  :root {
    --page-bg: var(--color-neutral-0);
    --page-fg: var(--color-black);

    --font-heading: "Advent Pro", sans-serif;
    --font-body: "Aleo", serif;

    --text-xs: 14px;
    --text-sm: 18px;
    --text-md: 21px;
    --text-lg: 24px;
    --text-xl: 32px;
    --text-2xl: 42px;
    --text-3xl: 48px;
    --text-4xl: 64px;

    --spacing-xs: 2px;
    --spacing-sm: 4px;
    --spacing-md: 8px;
    --spacing-lg: 12px;
    --spacing-xl: 16px;
    --spacing-2xl: 24px;
    --spacing-3xl: 32px;
    --spacing-4xl: 48px;

    --color-white: hsl(225, 10%, 99%);
    --color-black: hsl(225, 10%, 1%);

    --color-primary: hsl(210, 60%, 50%);
    --color-primary-light: hsl(210, 60%, 70%);
    --color-primary-lightest: hsl(210, 60%, 80%);

    --color-secondary: hsl(240, 60%, 50%);
    --color-secondary-light: hsl(240, 60%, 70%);
    --color-secondary-lightest: hsl(240, 60%, 80%);

    --color-info: hsl(195, 40%, 50%);

    --color-success: hsl(132, 100%, 50%);

    --color-warning: hsl(48, 80%, 50%);

    --color-error: hsl(4, 60%, 50%);

    --color-neutral-0: hsl(225, 10%, 95%);
    --color-neutral-1: hsl(225, 10%, 90%);
    --color-neutral-2: hsl(225, 10%, 80%);
    --color-neutral-3: hsl(225, 10%, 70%);
    --color-neutral-4: hsl(225, 10%, 60%);
    --color-neutral-5: hsl(225, 10%, 50%);
    --color-neutral-6: hsl(225, 10%, 40%);
    --color-neutral-7: hsl(225, 10%, 30%);
    --color-neutral-8: hsl(225, 10%, 20%);
    --color-neutral-9: hsl(225, 10%, 10%);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Advent Pro";
    font-weight: 300;
  }

  h1 {
    color: var(--color-primary);
    font-size: var(--text-4xl);
  }
  h2 {
    color: var(--color-secondary);
    font-size: var(--text-3xl);
  }
  h3 {
    color: var(--color-primary-light);
    font-size: var(--text-2xl);
  }
  h4 {
    color: var(--color-secondary-light);
    font-size: var(--text-xl);
  }
  h5 {
    color: var(--color-neutral-5);
    font-size: var(--text-lg);
  }
  h6 {
    color: var(--color-neutral-6);
    font-size: var(--text-md);
  }

  hr {
    border: 1px solid var(--color-neutral-1);
  }

  a {
    color: var(--color-secondary);
    font-weight: bold;
    text-decoration: none;
    border-bottom: 2px solid transparent;
    transition: border 0.5s;
  }
  a:hover {
    color: var(--color-secondary-light);
    border-bottom: 2px solid var(--color-secondary-light);
  }
</style>

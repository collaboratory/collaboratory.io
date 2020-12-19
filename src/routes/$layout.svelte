<script>
  import Theme from "$components/Theme/Theme.svelte";
</script>

<svelte:head>
  <title>collaboratory.io</title>
</svelte:head>

<Theme>
  <header>
    <a class="brand" href="/">collaboratory.io</a>
    <nav>
      <a href="/blog">Blog</a>
      <a href="/projects">Projects</a>
      <a href="/stuff">Stuff I Like</a>
    </nav>
  </header>

  <main>
    <slot />
  </main>

  <footer>&copy; 2020 collaboratory.io. All rights reserved.</footer>
</Theme>

<style>
  main,
  header,
  footer {
    padding: 0 8px;
  }
  header {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  header > a {
    text-decoration: none;
  }
  a.brand {
    font-weight: 300;
    font-size: var(--text-2xl);
    font-family: var(--font-heading);
    flex: 1 1 auto;
    margin: 0 16px 0 0;
    color: var(--color-secondary);
    text-align: center;
    padding: 8px 0;
    transition: color 0.5s ease-out;
    border: none;
  }
  a.brand:hover {
    color: var(--color-primary);
  }
  nav {
    padding: 8px;
    flex: 1 1 auto;
    font-weight: 500;
    font-size: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  nav a {
    margin: 0 0 0 32px;
    text-align: center;
    font-weight: bold;
    font-style: italic;
    color: var(--color-neutral-7);
    text-decoration: none;
    border-bottom: 2px solid var(--color-neutral-1);
    transition: border 0.5s, color 0.5s;
  }
  nav a:hover {
    color: var(--color-primary-light);
    border-bottom: 2px solid var(--color-primary-light);
  }
  main {
    flex: 1 1 auto;
    padding: 0 32px;
    overflow: auto;
  }

  footer {
    font-size: var(--text-sm);
    color: var(--color-neutral-6);
    border-top: 2px solid var(--color-neutral-1);
    padding: var(--spacing-xl) 0;
  }

  @media (min-width: 860px) {
    main,
    header,
    footer {
      width: 840px;
      margin: auto;
    }
    a.brand {
      text-align: left;
    }
    nav {
      justify-content: flex-end;
    }
  }
</style>

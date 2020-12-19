<h1>Stuff I Like</h1>
<p>
  A collection of cool ideas and projects that I found inspiring or interesting.
</p>

<div class="sections">
  <section>
    <a href="#svelte"><h3 id="svelte">Svelte</h3></a>
    <p>
      Svelte is the secret sauce behind this website (and every other thing I'm
      building at the moment).
    </p>
    <p>
      Incredibly performant and so much fun to write, Svelte is my absolute
      favorite
      <em>thing</em>
      right now.
    </p>
  </section>
  <section>
    <a href="#contentful"><h3 id="contentful">Contentful</h3></a>
    <p>
      Contentful is a flexible and pleasant content management system with an
      excellent free tier offering that will scale with your project.
    </p>
    <p>Highly recommended for personal blogs or small businesses.</p>
  </section>
</div>

<style>
  h1 {
    text-align: center;
  }
  p {
    text-align: center;
  }
  .sections {
    display: flex;
    text-align: center;
  }
  section {
    width: 50%;
    padding: var(--spacing-md) var(--spacing-lg);
    background: var(--color-white);
    margin: var(--spacing-md) var(--spacing-sm);
    border-radius: var(--spacing-md);
  }
  section h3 {
    margin: var(--spacing-sm);
  }
  section p {
    margin: var(--spacing-lg) var(--spacing-sm);
  }
</style>

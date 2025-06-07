<script lang="ts">
  let { data } = $props();
  const { book, slug, chapter, verses } = data;

  const highlight = [
    '.carousel:not(:has(article:target)) + .markers li:first-child a{background:#333}',
    ...verses.map(
      (_, i) => `.carousel:has(#v${i}:target) + .markers li:nth-child(${i + 1}) a{background:#333}`
    )
  ].join('');
</script>

<h1><a href="/">Index</a> / <a href={`/book/${slug}`}>{book}</a> / {chapter}</h1>
<div class="carousel-wrap">
  <div class="carousel">
    {#each verses as v, i}
      <article id={`v${i}`} class="slide">
        <p class="ref">
          <a href="/">Index</a> / <a href={`/book/${slug}`}>{book}</a> / {chapter} / {i + 1}
        </p>
        <p>{v.text}</p>
        <a class="nav prev" href={`#v${i === 0 ? 0 : i - 1}`}>‹</a>
        <a class="nav next" href={`#v${i === verses.length - 1 ? i : i + 1}`}>›</a>
      </article>
    {/each}
  </div>
</div>
<ol class="markers">
  {#each verses as _, i}
    <li><a href={`#v${i}`}></a></li>
  {/each}
</ol>
{@html `<style>${highlight}</style>`}

<style>
        .carousel-wrap {
                position: relative;
        }
        .carousel {
                list-style: none;
                margin: 0;
                padding: 0;
                display: grid;
                grid-auto-flow: column;
                grid-auto-columns: 100%;
                gap: 1rem;
                overflow-x: auto;
                scroll-snap-type: x mandatory;
                scroll-behavior: smooth;
                scrollbar-width: none;
        }
        .carousel::-webkit-scrollbar {
                display: none;
        }
        .slide {
                scroll-snap-align: center;
                padding: 1rem;
                box-sizing: border-box;
                position: relative;
        }
        .nav {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                font-size: 2rem;
                padding: 0 0.5rem;
                text-decoration: none;
                color: inherit;
        }
        .prev {
                left: 0;
        }
        .next {
                right: 0;
        }
        .slide:not(:target) .nav {
                display: none;
        }
        .markers {
                display: flex;
                justify-content: center;
                list-style: none;
                padding: 0;
                margin-top: 0.5rem;
        }
        .markers li {
                margin: 0 0.25rem;
        }
        .markers a {
                display: block;
                width: 0.75rem;
                height: 0.75rem;
                border-radius: 50%;
                background: #ccc;
        }
</style>

<script lang="ts">
  let { data } = $props();
  const { book, slug, chapter, verses } = data;
  let current = 0;

  function goTo(i: number) {
    current = i;
  }
</script>

<h1><a href="/">Index</a> / <a href={`/book/${slug}`}>{book}</a> / {chapter}</h1>
<div class="carousel-wrap">
  <div class="carousel" style={`transform:translateX(-${current * 100}%);`}>
    {#each verses as v, i}
      <article class="slide">{v.text}</article>
    {/each}
  </div>
  <a
    class="nav prev"
    href="#"
    on:click|preventDefault={() => goTo(Math.max(0, current - 1))}
    >‹</a
  >
  <a
    class="nav next"
    href="#"
    on:click|preventDefault={() => goTo(Math.min(verses.length - 1, current + 1))}
    >›</a
  >
</div>
<ol class="markers">
  {#each verses as _, i}
    <li>
      <a
        href="#"
        class:selected={i === current}
        on:click|preventDefault={() => goTo(i)}
      ></a>
    </li>
  {/each}
</ol>

<style>
        .carousel-wrap {
                position: relative;
        }
        .carousel {
                display: flex;
                overflow: hidden;
                transition: transform 0.4s ease;
        }
        .slide {
                flex: 0 0 100%;
                padding: 1rem;
                box-sizing: border-box;
        }
        .nav {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                font-size: 3rem;
                padding: 0 0.5rem;
                text-decoration: none;
                color: inherit;
        }
        .prev {
                left: -1.5rem;
        }
        .next {
                right: -1.5rem;
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
        .markers a.selected {
                background: #666;
        }
</style>

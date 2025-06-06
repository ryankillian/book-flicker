<script lang="ts">
  let { data } = $props();
  const { book, chapter, verses } = data;
  const highlight = verses
    .map((_, i) => `#v${i}:target ~ .markers li:nth-child(${i + 1}) a{background:#333}`)
    .join('');
</script>

<h1><a href="/">Index</a> / <a href={`/book/${book}`}>{book}</a> / {chapter}</h1>
<div class="carousel-wrap">
  <div class="carousel">
    {#each verses as v, i}
      <article id={`v${i}`} class="slide">
        <p class="ref"><a href="/">Index</a> / <a href={`/book/${book}`}>{book}</a> / {chapter} / {i + 1}</p>
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

<style>
  .carousel-wrap{position:relative}
  .carousel{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;scroll-behavior:smooth}
  .slide{flex:0 0 100%;scroll-snap-align:center;padding:1rem;box-sizing:border-box;position:relative}
  .nav{position:absolute;top:50%;transform:translateY(-50%);font-size:2rem;padding:0 .5rem;text-decoration:none;color:inherit}
  .prev{left:0}
  .next{right:0}
  .slide:not(:target) .nav{display:none}
  .markers{display:flex;justify-content:center;list-style:none;padding:0;margin-top:.5rem}
  .markers li{margin:0 .25rem}
  .markers a{display:block;width:.75rem;height:.75rem;border-radius:50%;background:#ccc}
  .markers li:first-child a{background:#333}
</style>
{@html `<style>${highlight}</style>`}

<script lang="ts">
  let { data } = $props();
  const { slug, book, chapter, verses } = data;
</script>

<h1><a href="/">Index</a> / <a href={`/book/${slug}`}>{book}</a> / {chapter}</h1>

<div class="carousel">
  {#each verses as v, i}
    <article id={`v${i}`} class="slide" data-label={i + 1}>
      <p class="ref"><a href="/">Index</a> / <a href={`/book/${slug}`}>{book}</a> / {chapter} / {i + 1}</p>
      <p>{v.text}</p>
    </article>
  {/each}
</div>

<style>
  .carousel{list-style:none;display:grid;grid-auto-flow:column;grid-auto-columns:100%;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;padding:0;gap:1rem;position:relative}
  .carousel::-webkit-scrollbar{display:none}
  .carousel::scroll-button(left){content:"\2039";left:.5rem}
  .carousel::scroll-button(right){content:"\203a";right:.5rem}
  .carousel::scroll-button(left),.carousel::scroll-button(right){position:absolute;top:50%;transform:translateY(-50%);background:#fff;border:1px solid #ccc;border-radius:50%;width:2rem;height:2rem;display:flex;justify-content:center;align-items:center;color:#333}
  .carousel::scroll-marker-group{display:grid;grid-auto-flow:column;gap:.5rem;position:absolute;left:50%;transform:translateX(-50%);bottom:-1.5rem}
  .slide{scroll-snap-align:center;padding:1rem}
  .slide::scroll-marker{content:"";width:.5rem;height:.5rem;background:#ccc;border-radius:50%}
  .slide::scroll-marker:target-current{background:#333}
</style>

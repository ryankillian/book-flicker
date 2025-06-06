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
<ol class="markers">
  {#each verses as _, i}
    <li><a href={`#v${i}`} aria-label={`Verse ${i + 1}`}></a></li>
  {/each}
</ol>
{@html `<style>${verses.map((_,i)=>`#v${i}:target~.markers li:nth-child(${i+1}) a{background:#333}`).join('')}</style>`}

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
  .markers{display:flex;justify-content:center;list-style:none;padding:0;margin-top:.5rem}
  .markers li{margin:0 .25rem}
  .markers a{display:block;width:.75rem;height:.75rem;border-radius:50%;background:#ccc}
  .markers li:first-child a{background:#333}
</style>

<script lang="ts">
  let { data } = $props();
  const { book, slug, chapter, verses } = data;
</script>

<h1><a href="/">Index</a> / <a href={`/book/${slug}`}>{book}</a> / {chapter}</h1>
<div class="carousel" role="region" aria-label="Chapter {chapter}">
  {#each verses as v, i}
    <article class="carousel__slide" data-label={`Verse ${i + 1}`}> 
      <p class="ref">
        <a href="/">Index</a> / <a href={`/book/${slug}`}>{book}</a> / {chapter} / {i + 1}
      </p>
      <p>{v.text}</p>
    </article>
  {/each}
</div>

<style>
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
    scroll-padding-inline: 1rem;

    &::scroll-marker-group {
      grid-auto-columns: 10px;
      left: calc(anchor(left) - 5px);
      right: auto;
      inline-size: 50px;
      padding: 0;
    }

    &::scroll-button(left),
    &::scroll-button(right) {
      position-area: var(--_inner);
    }
  }

  .carousel::-webkit-scrollbar {
    display: none;
  }

  .carousel__slide {
    scroll-snap-align: center;
    padding: 1rem;
    box-sizing: border-box;

    &::scroll-marker {
      background: #ccc;
    }

    &::scroll-marker:target-current {
      background: #333;
      border-color: #333;
    }
  }
</style>

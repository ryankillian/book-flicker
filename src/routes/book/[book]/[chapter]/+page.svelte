<script lang="ts">
  let { data } = $props();
  const { book, slug, chapter, verses } = data;
</script>

<h1><a href="/">Index</a> / <a href={`/book/${slug}`}>{book}</a> / {chapter}</h1>
<div
  class="carousel carousel--scroll-markers carousel--scroll-buttons"
  role="region"
  aria-label="Chapter {chapter}"
>
  {#each verses as v, i}
    <article class="carousel__slide" data-label={`Verse ${i + 1}`}> 
      <p class="ref">Index / {book} / {chapter} / {i + 1}</p>
      <p>{v.text}</p>
    </article>
  {/each}
</div>

<style>
  .carousel {
    list-style-type: none;
    margin: 0;
    padding: 0;
    position: relative;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 100%;
    gap: 1rem;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    scroll-padding-inline: 1rem;
  }

  @media (prefers-reduced-motion: no-preference) {
    .carousel {
      scroll-behavior: smooth;
    }
  }

  .carousel--scroll-markers {
    &::scroll-marker-group {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 4px;
      padding: 5px 10px;
      block-size: 44px;
      inline-size: 50px;
    }
  
    .carousel__slide::scroll-marker {
      content: "";
      inline-size: 10px;
      aspect-ratio: 1;
      border: 1px solid #999;
      border-radius: 50%;
      background: #ccc;
    }

    .carousel__slide::scroll-marker:target-current {
      background: #333;
      border-color: #333;
    }
  }

  .carousel--scroll-buttons {
    &::scroll-button(left),
    &::scroll-button(right) {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      inline-size: 44px;
      aspect-ratio: 1;
      display: grid;
      place-content: center;
      background: white;
      border: 1px solid #999;
      border-radius: 50%;
      font-size: 1.25rem;
    }

    &::scroll-button(left) {
      content: "\2039";
      left: 0;
    }

    &::scroll-button(right) {
      content: "\203A";
      right: 0;
    }
  }

  .carousel::-webkit-scrollbar {
    display: none;
  }

  .carousel__slide {
    container-type: scroll-state;
    scroll-snap-align: center;
    scroll-snap-stop: always;
    padding: 1rem;
    box-sizing: border-box;
  }
</style>

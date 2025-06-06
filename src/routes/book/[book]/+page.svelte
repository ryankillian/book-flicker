<script lang="ts">
  let { data } = $props();
  const { book, chapters } = data;
</script>

<h1><a href="/">Index</a> / {book}</h1>
<ul class="chapter-list">
  {#each chapters as c}
    <li><a href={`/book/${book}/${c}`}>Chapter {c}</a></li>
  {/each}
</ul>

<style>
  .chapter-list{display:grid;grid-template-columns:repeat(auto-fit,minmax(6rem,1fr));gap:.5rem;padding:0;list-style:none}
  .chapter-list li{padding:.25rem;background:#eee;text-align:center}
</style>

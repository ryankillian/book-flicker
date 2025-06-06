<script>
  let { data } = $props();
  const { books } = data;
</script>

<h1>Bible Books</h1>
<ul class="book-list">
  {#each books as b}
    <li><a href={`/book/${b}`}>{b}</a></li>
  {/each}
</ul>

<style>
  .book-list{display:grid;grid-template-columns:repeat(auto-fit,minmax(8rem,1fr));gap:.5rem;padding:0;list-style:none}
  .book-list li{padding:.25rem;background:#eee;text-align:center}
</style>

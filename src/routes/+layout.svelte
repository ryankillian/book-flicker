<script>
  let { data, children } = $props();
</script>

<header class="site-header">
  <a href="/">Book Flicker</a>
</header>
<main>
  {@render children()}
</main>
<footer class="site-footer">&copy; 2025 Book Flicker</footer>

<style>
  :global(body){margin:0;font-family:sans-serif}
  .site-header,.site-footer{padding:1rem;text-align:center;background:#f0f0f0}
  main{padding:1rem;min-height:80vh;margin:0 auto;width:100%}
  @media (min-width: 1024px){main{width:60%}}
  a{color:inherit;text-decoration:none}
</style>

<script>
	let { data } = $props();
</script>

<header class="site-header">
	<a href="/">Book Flicker</a>
</header>
<main>
	<slot />
</main>
<footer class="site-footer">&copy; 2025 Book Flicker</footer>

<style>
	:global(body) {
		margin: 0;
		font-family: sans-serif;
	}
	.site-header,
	.site-footer {
		padding: 1rem;
		text-align: center;
		background: #f0f0f0;
	}
	main {
		padding: 1rem;
		min-height: 80vh;
	}
	@media (min-width: 768px) {
		main {
			width: 60%;
			margin: 0 auto;
		}
	}
	a {
		color: inherit;
		text-decoration: none;
	}
</style>

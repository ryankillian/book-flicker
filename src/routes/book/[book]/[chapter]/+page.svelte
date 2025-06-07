<script lang="ts">
	let { data } = $props();
	const { book, slug, chapter, verses } = data;
	const highlight = [
		'.carousel:not(:has(article:target)) + .markers li:first-child a{background:#333}',
		...verses.map(
			(_, i) => `.carousel:has(#v${i}:target) + .markers li:nth-child(${i + 1}) a{background:#333}`
		)
	].join('');
</script>

<h1><a href="/">Index</a> / <a href={`/book/${slug}`}>{book}</a> / {chapter}</h1>
<div class="carousel-wrap">
	<div class="carousel">
		{#each verses as v, i}
			<article id={`v${i}`} class="slide">
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
{@html `<style>${highlight}</style>`}

<style>
	.carousel-wrap {
		position: relative;
	}
	.carousel {
		position: relative;
	}
	.slide {
		position: absolute;
		inset: 0;
		padding: 1rem;
		box-sizing: border-box;
		opacity: 0;
		transition: opacity 0.3s;
		pointer-events: none;
	}
	.carousel:not(:has(article:target)) > .slide:first-child,
	.slide:target {
		opacity: 1;
		position: relative;
		pointer-events: auto;
	}
	.nav {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		font-size: 3rem;
		padding: 0 0.5rem;
		margin: 0 0.5rem;
		text-decoration: none;
		color: inherit;
	}
	.prev {
		left: -1.5rem;
	}
	.next {
		right: -1.5rem;
	}
	.slide:not(:target) .nav {
		display: none;
	}
	.carousel:not(:has(article:target)) .slide:first-child .nav {
		display: block;
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
</style>

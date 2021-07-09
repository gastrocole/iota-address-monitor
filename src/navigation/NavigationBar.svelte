<script>
	import Logo from '../components/common/Logo.svelte';
	import { navOptions } from './Navigation.svelte';

	let selected = navOptions[0];
	let intSelected = 0;

	// change the selected component (the event.originalTarget.id is not accessible in Chrome so switched to event.srcElement.id)
	function changeComponent(event) {
		selected = navOptions[event.srcElement.id];
		intSelected = event.srcElement.id;
	}
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
	<div class="container-fluid">
		<h1 class="navbar-brand">
			<Logo />
			IOTA Address Monitor
		</h1>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarNav"
			aria-controls="navbarNav"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon" />
		</button>
		<div class="collapse navbar-collapse justify-content-center" id="navbarNav">
			<ul class="navbar-nav">
				{#each navOptions as option, i}
					<li class="nav-item">
						<a
							type="button"
							class={intSelected == i ? 'nav-link btn-link  active ' : 'nav-link'}
							on:click={changeComponent}
							id={i}>{option.page}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</nav>

<svelte:component this={selected.component} />

<style>
	nav {
		margin-top: -16px;
		margin-left: -16px;
		margin-right: -16px;
	}

	.navbar-toggler {
		border: none;
	}
</style>

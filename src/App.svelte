
<!-- Material Icons -->
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
<!-- Roboto -->
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700"
/>
<!-- Roboto Mono -->
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto+Mono"
/>

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/svelte-material-ui@4.0.0/bare.min.css"
/>

<!-- Include Bootstrap CSS-->
<link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'>

<script>
	// You can specify which plugins you need
	import * as bootstrap from 'bootstrap';
	import {updateAddressObjectsInStorage} from './lib/AddressApi'

	import { navOptions } from  './Navigation/Navigation.svelte';	// import application navigation
	import { registerAddressPollingService } from './services/polling';
	let selected = navOptions[0];	// keep track of the selected 'page' object (default to the about component since we must have local db connection established first)
	let intSelected = 0;	// selected page index

	// change the selected component (the event.originalTarget.id is not accessible in Chrome so switched to event.srcElement.id)
	function changeComponent(event) {
		selected = navOptions[event.srcElement.id];
		intSelected = event.srcElement.id;
	}

	registerAddressPollingService();
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <h1 class="navbar-brand">IOTA Address Monitor</h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
		{#each navOptions as option, i}
        	<li class="nav-item">
				<a type="button" class={intSelected==i ? "nav-link btn-link  active " : "nav-link"} on:click={changeComponent} id={i}>{option.page}</a>
			</li>
		{/each}
      </ul>
    </div>
  </div>
</nav>

<svelte:component this={selected.component}/>

<style>
	nav {
		margin-top: -16px;
		margin-left: -16px;
		margin-right: -16px;
	}

	.navbar-toggler {
		border: none
	}
	
</style>
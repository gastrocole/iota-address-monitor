<script>
	import * as bootstrap from 'bootstrap';
	import NavigationBar from './navigation/NavigationBar.svelte';
	import { registerAddressPollingService } from './services/polling';

	registerAddressPollingService();
</script>

<!-- Include Bootstrap CSS-->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />

<NavigationBar />

<style>
</style>

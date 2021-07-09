<script context="module">
	// main navigation for the application
	import AddressManager from '../../pages/AddressManager.svelte';
	import AddressMonitor from '../../pages/AddressMonitor.svelte';
	import AddressSearch from '../../pages/AddressSearch.svelte';
	import Settings from '../../pages/Settings.svelte';

	// these are our 'pages' to navigate through (in order for this export to work the script tag MUST include context="module")
	export const navOptions = [
		{ page: 'Monitor', component: AddressMonitor },
		{ page: 'Search', component: AddressSearch },
		{ page: 'Manage', component: AddressManager },
		{ page: 'Settings', component: Settings },
	];
</script>

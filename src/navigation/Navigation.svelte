<script context="module">
// main navigation for the application
import AddressMonitor from '../pages/AddressMonitor.svelte';
import NodeSettings from '../pages/NodeSettings.svelte';

// these are our 'pages' to navigate through (in order for this export to work the script tag MUST include context="module")
export const navOptions = [
    { page: 'Addresses',   component: AddressMonitor },
    { page: 'Node Settings',   component: NodeSettings },
		// other navigation pages can go here
];
</script>
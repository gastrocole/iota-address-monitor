<script context="module">
// main navigation for the application
import AddressMonitor from '../pages/AddressMonitor.svelte';
import AddressSearch from '../pages/AddressSearch.svelte';
import AddressManager from '../pages/AddressManager.svelte';
import NodeSettings from '../pages/NodeSettings.svelte';

// these are our 'pages' to navigate through (in order for this export to work the script tag MUST include context="module")
export const navOptions = [
    { page: 'Monitor',   component: AddressMonitor },
    { page: 'Search',   component: AddressSearch },
    { page: 'Manage',   component: AddressManager },
    { page: 'Settings',   component: NodeSettings },
];
</script>
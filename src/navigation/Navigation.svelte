<script context="module">
// main navigation for the application
import AddressMonitor from '../pages/AddressMonitor.svelte';
import AddressManager from '../pages/AddressManager.svelte';
import Settings from '../pages/Settings.svelte';

// these are our 'pages' to navigate through (in order for this export to work the script tag MUST include context="module")
export const navOptions = [
    { page: 'Monitor',   component: AddressMonitor },
    { page: 'Manage',   component: AddressManager },
    { page: 'Settings',   component: Settings },
];
</script>
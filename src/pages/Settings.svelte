<script lang="ts">
	import PageTitle from '../components/common/PageTitle.svelte';
	import NodeInfo from '../components/Settings/NodeInfo.svelte';
	import NodeInputField from '../components/Settings/NodeInputField.svelte';
	import PollingIntervalInputField from '../components/Settings/PollingIntervalInputField.svelte';
</script>

<main>
	<PageTitle title="App Settings" />
	<NodeInfo />
	<NodeInputField />
	<PollingIntervalInputField />
</main>

<style>
</style>

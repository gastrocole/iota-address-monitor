<script>
  import Tab, { Label } from '@smui/tab';
  import TabBar from '@smui/tab-bar';
  import Button from '@smui/button';
 
  let active = 'Home';
</script>

<div>
  <TabBar tabs={['Home', 'Merchandise', 'About Us']} let:tab bind:active>
    <!-- Note: the `tab` property is required! -->
    <Tab {tab}>
      <Label>{tab}</Label>
    </Tab>
  </TabBar>
 
  <div style="margin-top: 1em;">
    <div>Programmatically select:</div>
    {#each ['Home', 'Merchandise', 'About Us'] as tab}
      <Button on:click={() => (active = tab)}><Label>{tab}</Label></Button>
    {/each}
  </div>
 
  <slot></slot>
</div>
 

<script>
  export let danger = false;
</script>

<button on:click class:danger>
  <slot></slot>
</button>

<style>
  button {
    font-size: 20px;
    border: 2px solid var(--color-metallic-blue);
    border-radius: 5px;
    background-color: var(--color-pacific-blue);
    color: white;
    filter: var(--drop-shadow);
    padding: 5px 10px;
    flex: var(--flex);
  }
  .danger {
    background-color: var(--color-atomic-tangerine);
    border-color: var(--color-rajah);
  }
</style>

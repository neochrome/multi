<script>
</script>

<button on:click>
  <slot></slot>
</button>

<style>
  button {
    font-size: 20px;
    border-style: solid;
    border-radius: 5px;
    border-color: var(--color-metallic-blue);
    border-width: 2px;
    background-color: var(--color-pacific-blue);
    color: white;
    filter: var(--drop-shadow);
    padding: 5px 10px;
    flex: var(--flex);
  }
</style>

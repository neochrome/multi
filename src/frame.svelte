<script>
export let title = undefined;
</script>

<div class="frame grid">
  {#if title}<h1>{title}</h1>{/if}
  <slot></slot>
  {#if $$slots.footer }
    <slot name="footer"></slot>
  {/if}
</div>

<style>
  .frame {
    border: 5px solid var(--color-rajah);
    border-radius: 5px;
    background-color: white;
    margin: 10px;
    box-shadow: inset 1px 1px 2px 0 #8888;
    filter: var(--drop-shadow);
    padding: 10px;
    grid-gap: 10px;
    flex: 1;
  }

  h1 {
    _margin: 0 0 10px 0;
    text-align: center;
  }
</style>

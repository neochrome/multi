<script>
export let title = undefined;
</script>

<div class="frame">
  {#if title}<h1>{title}</h1>{/if}
  <div class="content row">
    <slot></slot>
  </div>
  {#if $$slots.footer }
  <div class="footer row">
    <slot name="footer"></slot>
  </div>
  {/if}
</div>

<style>
  .frame {
    border: 5px solid var(--color-rajah);
    border-radius: 5px;
    background-color: white;
    max-width: 80%;
    margin: 10px;
    box-shadow: inset 1px 1px 2px 0 #8888;
    filter: var(--drop-shadow);
    padding: 10px;
    flex: 1;
  }
  @media (max-width: 768px) {
    .frame { flex: 100%; margin: 10px auto; }
  }
  
  .content, .footer {
    align-items: flex-end;
  }
  .footer {
    margin-top: 10px;
  }

  h1 {
    flex: 100%;
    margin: 0 0 10px 0;
    text-align: center;
  }
</style>

<script>
export let min=0;
export let max=100;
export let current;
export let align = 'center';

$: fill = Math.max(0,Math.floor(current / (max - min) * 100));
$: rest = 100 - fill;
</script>

<div
  class="bar"
  style:text-align={align}
  style:background-image="linear-gradient(to right, var(--color-pacific-blue) {fill}%, transparent {fill}% {rest}%)"
>
  <slot></slot>
</div>

<style>
  .bar {
    border: 2px solid var(--color-metallic-blue);
    border-radius: 15px;
    padding: 2px 5px
  }
</style>

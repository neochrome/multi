<script>
import Frame from './frame.svelte';
export let onEnter;
const digits = [1,2,3,4,5,6,7,8,9];
let input = [];
clear();

function handleDigit(digit) {
  input = [...input.slice(1), digit];
}

function clear() {
  input = [0,0,0];
}

function handleEnter() {
  const [number] = input.reduceRight(([a,i],d) => [a + d * i, i * 10], [0,1]);
  onEnter(number);
  clear();
}
</script>

<Frame>
  <div class="numpad row">
    <div class="input">{input.join('')}</div>
    {#each digits as digit}
      <button on:click={() => handleDigit(digit)}>{digit}</button>
    {/each}
    <button on:click={() => clear()}>C</button>
    <button on:click={() => handleDigit(0)}>0</button>
    <button on:click={() => handleEnter()}>⏎</button>
  </div>
</Frame>

<style>
  .numpad {
    gap: 10px;
  }
  button {
    font-size: 4em;
    border: 2px solid var(--color-metallic-blue);
    border-radius: 5px;
    background-color: var(--color-pacific-blue);
    color: white;
    filter: var(--drop-shadow);
    position: relative;
    flex: 25%;
    aspect-ratio: 1 / 1;
  }
  .input {
    font-size: 4em;
    flex: 100%;
    text-align: right;
    border: 2px solid var(--color-metallic-blue);
    border-radius: 5px;
    padding: 0 10px;
  }
</style>

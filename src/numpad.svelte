<script>
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

<div class="numpad grid">
  <div class="input t-l">{input.join('')}</div>
  {#each digits as digit}
    <button class="t-l" on:click={() => handleDigit(digit)}>{digit}</button>
  {/each}
  <button class="t-l" on:click={() => clear()}>C</button>
  <button class="t-l" on:click={() => handleDigit(0)}>0</button>
  <button class="t-l" on:click={() => handleEnter()}>⏎</button>
</div>

<style>
  .numpad {
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr 1fr;
  }
  button {
    border: 2px solid var(--color-metallic-blue);
    border-radius: 5px;
    background-color: var(--color-pacific-blue);
    color: white;
    filter: var(--drop-shadow);
    aspect-ratio: 1;
  }
  .input {
    grid-column: 1 / span 3;
    text-align: right;
    border: 2px solid var(--color-metallic-blue);
    border-radius: 5px;
    padding: 0 10px;
  }
</style>

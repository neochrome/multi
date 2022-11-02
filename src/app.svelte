<script>
import InGame from './in_game.svelte';
import TopList from './toplist.svelte';
import Frame from './frame.svelte';
import Button from './button.svelte';
import RangeSlider from 'svelte-range-slider-pips';

let isPlaying = false;
let duration = 0;
let tables = [1,10];

function play(time) {
  duration = time * 60;
  isPlaying = true;
}

function onGameOver(score) {
  isPlaying = false;
  console.log('game over', score);
}

</script>

<main class="flex">
  {#if isPlaying}
    <InGame {tables} {duration} {onGameOver} />
  {:else}
    <Frame title="Öva">
      <div>
        <RangeSlider
          bind:values={tables}
          min={1}
          max={12}
          pips
          all="label"
          range
          pushy
        />
      </div>
      <div class="actions grid" slot="footer">
        <Button on:click={() => play(1)}>1 min</Button>
        <Button on:click={() => play(3)}>3 min</Button>
        <Button on:click={() => play(5)}>5 min</Button>
      </div>
    </Frame>
  {/if}
</main>

<style>
  main {
    flex-direction: column;
    max-width: 80%;
    margin: auto;
  }
  @media (max-width: 768px) { 
    main {
      max-width: 70%;
    }
  }
  div.actions {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 10px;
  }
</style>

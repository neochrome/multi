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
  duration = time * 10;// * 60;
  isPlaying = true;
}

function onGameOver(score) {
  isPlaying = false;
  console.log('game over', score);
}

</script>

<main class="row">
  {#if isPlaying}
    <InGame {tables} {duration} {onGameOver} />
  {:else}
    <Frame title="Spela">
      <div class="row">
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
      <div class="row">
        <Button on:click={() => play(1)}>1 min</Button>
        <Button on:click={() => play(3)}>3 min</Button>
        <Button on:click={() => play(5)}>5 min</Button>
      </div>
    </Frame>
  {/if}
</main>

<style>
  main {
    max-width: 80%;
    margin: auto;
  }
  div {
    flex: 100%;
  }
</style>

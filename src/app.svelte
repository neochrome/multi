<script>
import InGame from './in_game.svelte';
import TopList from './toplist.svelte';
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

<main>
  {#if isPlaying}
    <InGame {tables} {duration} {onGameOver} />
  {:else}
    <section class="frame">
      <h1 class="t-l">Välj tabeller och tid</h1>
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
      <div class="actions">
        <Button on:click={() => play(1)}>1 min</Button>
        <Button on:click={() => play(3)}>3 min</Button>
        <Button on:click={() => play(5)}>5 min</Button>
      </div>
    </section>
  {/if}
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    margin: 0 5vw;
  }
  @media (orientation: portrait) and (max-width: 320px) {
    main { margin: 0; }
  }
  @media (orientation: portrait) and (min-width: 321px) and (max-width: 712px) {
    main { margin: 0 5vh; }
  }
  @media (orientation: portrait) and (min-width: 768px) and (max-width: 819px) {
    main { margin: 0 10vh; }
  }
  @media (orientation: portrait) and (min-width: 820px) and (max-width: 1023px) {
    main { margin: 0 7vh; }
  }
  @media (orientation: portrait) and (min-width: 1024px) {
    main { margin: 0 10vh; }
  }

  div.actions {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 10px;
  }
</style>

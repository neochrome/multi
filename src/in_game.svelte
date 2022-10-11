<script>
import Numpad from './numpad.svelte';
import Timer from './timer.svelte';
import Frame from './frame.svelte';
import Button from './button.svelte';

import { rnd, range } from './utils';

export let tables = [1,10];
const [min,max] = tables;
export let duration = 1;
export let onGameOver;

const numbers =
  range(min, max)
  .flatMap(n =>
    range(1, Math.max(10, max))
    // [a,b,correct]
    .flatMap(m => [
      [n,m,n*m],
      [m,n,m*n],
    ])
  );

let count = 0;
let correctCount = 0;
let score = 0;
let scoreMultiplier = 1;
let gameOver = false;

let a,b,correctAnswer;
nextNumbers();

function handleEnter(answer) {
  count++;
  if (answer === correctAnswer) {
    console.log('correct');
    correctCount++;
    score += scoreMultiplier++;
  } else {
    console.log('incorrect');
    scoreMultiplier = 1;
  }
  nextNumbers();
}

function onTimeout() {
  gameOver = true;
}

function nextNumbers() {
  [a,b,correctAnswer] = numbers[rnd(0, numbers.length - 1)];
}

</script>

{#if gameOver}
  <Frame title="Tiden UTE!!">
    <h3>Din poäng: {score}</h3>
    <h3>Du svarade rätt {correctCount} gånger</h3>
    <h3>Du svarade <strong>fel</strong> {count - correctCount} gånger</h3>
    <Button on:click={() => onGameOver(score)} slot="footer">tillbaka</Button>
  </Frame>
{:else}
  <Frame title="Vad blir {a} x {b} ?">
    <div class="timer"><Timer {duration} {onTimeout} /></div>
    <div class="stats">
      <span class="score">Poäng: {score}</span>
      {#if scoreMultiplier > 1 }
        <span class="multiplier">+{scoreMultiplier}</span>
      {/if}
    </div>
    <Button on:click={() => onGameOver()} slot="footer">avbryt</Button>
  </Frame>
  <Numpad onEnter={handleEnter} />
{/if}

<style>
  .timer {
    flex: 100%;
    margin-bottom: 10px;
  }
  .stats, h3 {
    flex: 100%;
  }
  h3 {
    margin: 0;
  }
  .score {
    font-size: 1.5em;
    font-weight: bold;
  }
  .multiplier {
    background-color: var(--color-atomic-tangerine);
    border-radius: 5px;
    padding: 2px;
    _transform: rotate(15deg);
    display: inline-block;
  }
</style>

<script>
import Numpad from './numpad.svelte';
import Timer from './timer.svelte';
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

<div class="in-game">
{#if gameOver}
  <section class="frame">
    <h1 class="t-l">Tiden är UTE!!</h1>
    <div class="t-m">Din poäng: {score}</div>
    <div class="t-m">Du svarade rätt {correctCount} gånger</div>
    <div class="t-m">Du svarade <strong>fel</strong> {count - correctCount} gånger</div>
    <Button on:click={() => onGameOver(score)} slot="footer">tillbaka</Button>
  </section>
{:else}
  <section class="frame">
    <h1 class="t-l">Vad blir {a} x {b} ?</h1>
    <div class="timer t-m"><Timer {duration} {onTimeout} /></div>
    <div class="stats t-m">
      <span class="score">Poäng: {score}</span>
      {#if scoreMultiplier > 1 }
        <span class="multiplier">+{scoreMultiplier}</span>
      {/if}
    </div>
    <Button danger on:click={() => onGameOver()}>avbryt</Button>
  </section>
  <section class="frame numpad">
    <Numpad onEnter={handleEnter} />
  </section>
{/if}
</div>

<style>
  .in-game {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
  .frame { flex: auto; }
  .frame.numpad { flex: 1; }

  @media (min-width: 568px) and (max-width: 657px) {
    .frame.numpad { flex: 1.5; }
  }
  @media (min-width: 658px) and (max-width: 666px) {
    .frame.numpad { flex: 1; }
  }
  @media (min-width: 667px) and (max-width: 895px) {
    .frame.numpad { flex: 1.5; }
  }
  @media (min-width: 896px) and (max-width: 1023px) {
    .frame.numpad { flex: 1; }
  }
  @media (min-width: 1024px) and (max-width: 1137px) {
    .frame.numpad { flex: 4; }
  }
  @media (min-width: 1138px) and (max-width: 1179px) {
    .frame.numpad { flex: 2; }
  }
  @media (min-width: 1180px) {
    .frame.numpad { flex: 3; }
  }

  @media (orientation: portrait) { 
    .in-game {
      flex-direction: column;
      align-items: stretch;
    }
    .frame { flex: 1 }
  }

  .timer {
    margin-bottom: 10px;
  }
  .score {
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

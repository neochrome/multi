<script>
import ProgressBar from './progressbar.svelte';

export let duration;
export let onTimeout;

let timeLeft = duration;
let progress = 100;
const timer = setInterval(() => {
  timeLeft--;
  progress = Math.max(0, Math.floor(timeLeft / duration * 100));
  if (timeLeft <= 0) {
    clearInterval(timer);
    onTimeout();
    return;
  }
}, 1000);
</script>

<div>
  <ProgressBar current={progress}>
    <span class="time">Tid kvar: {timeLeft}s</span>
  </ProgressBar>
</div>

<style>
  .time {
    color: white;
  }
</style>

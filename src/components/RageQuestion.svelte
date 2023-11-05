<script>
  export let question;
  import { answers } from '../lib/store.js';
  import { onMount } from 'svelte';

  let selectedOption;
  let timeLeft = 30; // Start the timer with 30 seconds
  let timer; // Reference to keep the setInterval so it can be cleared

  $: if (selectedOption) {
    answers.update(current => ({ ...current, [question.question]: selectedOption }));
  }


  // Function to start the countdown
  function startCountdown() {
    if (question.options.length == 0) { // Check if there are no options
      timer = setInterval(() => {
        if (timeLeft > 0) {
          timeLeft -= 1;
        } else {
          clearInterval(timer);
          // You can take additional action here when time is up
        }
      }, 1000);
    }
  }

  // Start the countdown when the component is first mounted
  onMount(() => {
    startCountdown();
    return () => { // Cleanup when component is destroyed
      if (timer) {
        clearInterval(timer);
      }
    };
  });
</script>

<div>
  <h2>{question.question}</h2>
  {#if (question.options).length != 0}
  <select bind:value={selectedOption}>
    <option value="" disabled selected>Escoge una opción</option>
    {#each question.options as option}
      <option value={option}>{option}</option>
    {/each}
  </select>
  {:else}
    <p>{question.desc}</p>
    <h3>{timeLeft}</h3>
  {/if}
</div>

<style>
  div {
    margin: 1rem;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
  }

  h2 {
    color: #333;
  }

  h3 {
    text-align: center;
  }

  select {
    padding: 0.5rem;
    margin-top: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    width: 100%;
  }
</style>
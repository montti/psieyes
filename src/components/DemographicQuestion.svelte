<script>
  export let question;
  import { answers } from '../lib/store.js';

  let selectedOption;

  $: if (selectedOption) {
    answers.update(current => ({ ...current, [question.question]: selectedOption }));
  }
</script>

<div>
  <h2>{question.question}</h2>
  <select bind:value={selectedOption}>
    <option value="" disabled selected>Choose an option</option>
    {#each question.options as option}
      <option value={option}>{option}</option>
    {/each}
  </select>
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

  select {
    padding: 0.5rem;
    margin-top: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    width: 100%;
  }
</style>
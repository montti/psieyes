<script>
  export let question;
  import { answers } from '../lib/store.js';
  export { resetSelectedOption };

  export let selectedOption;

  function resetSelectedOption() {
    selectedOption = null;
  }

  $: if (selectedOption) {
    answers.update(current => ({ ...current, [question.question]: selectedOption }));
  }
</script>

<div>
  <img src={question.image} alt={`Question image for "${question.question}"`} />
  <h2>{question.question}</h2>
  {#each question.options as option}
    <label>
      <input type="radio" bind:group={selectedOption} value={option} />
      {option}
    </label>
  {/each}
</div>

<style>
  div {
    margin: 1rem;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
  }

  button {
    padding: 0.6rem 1.2rem;
    margin-top: 1rem;
    background-color: #0062cc;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
  }

  h2 {
    color: #333;
    margin-top: 1rem;
  }

  label {
    display: block;
    margin: 0.5rem 0;
  }

  input[type='radio'] {
    margin-right: 0.5rem;
  }
</style>

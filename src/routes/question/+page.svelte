<script>
  import { questions } from '../../lib/questions';
  import DemographicQuestion from '../../components/DemographicQuestion.svelte';
  import ImageQuestion from '../../components/ImageQuestion.svelte';
  import { answers } from '../../lib/store.js';
  import { goto } from '$app/navigation';

  let currentQuestionIndex = 0;
  let isSubmitted = false;

  function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex += 1;
    } else {
      isSubmitted = true;
    }
  }

  function submitAnswers() {
    console.log($answers);
    goto('/thank-you'); // Pagina de gracias
  }
</script>

{#if !isSubmitted}
  <div>
    {#if questions[currentQuestionIndex].type === 'demographic'}
      <DemographicQuestion question={questions[currentQuestionIndex]} />
    {:else if questions[currentQuestionIndex].type === 'image'}
      <ImageQuestion question={questions[currentQuestionIndex]} />
    {/if}
    <button on:click={nextQuestion}>Next</button>
  </div>
{:else}
  <div>
    <h1>Gracias por completar el test!</h1>
    <button on:click={submitAnswers}>Enviar respuesta</button>
  </div>
{/if}

<style>
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

  button:hover {
    background-color: #0056b3;
  }

  .thank-you {
    text-align: center;
    margin-top: 2rem;
  }
</style>

<script>
  import { questions } from '../../lib/questions';
  import DemographicQuestion from '../../components/DemographicQuestion.svelte';
  import ImageQuestion from '../../components/ImageQuestion.svelte';
  import RageQuestion from '../../components/RageQuestion.svelte';
  import { answers } from '../../lib/store.js';
  import { skipRageStore } from '$lib/store.js';
  import { goto } from '$app/navigation';
  
  let currentQuestionIndex = 0;
  let isSubmitted = false;

  $: if ($skipRageStore) {
    currentQuestionIndex = questions.findIndex((q) => q.type !== 'rage');
  }

  function nextQuestion() {

    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex += 1;
    } else {
      isSubmitted = true;
    }
  }

  function submitAnswers() {
    console.log($answers);
    goto('/thanks'); 
  }

  function handleNextQuestion() {
    nextQuestion();
  }
</script>

{#if !isSubmitted}
  <div class="questionnaire-container">
    {#if questions[currentQuestionIndex].type === 'demographic'}
      <DemographicQuestion question={questions[currentQuestionIndex]} />
      <button on:click={nextQuestion}>Siguiente</button>
    {:else if questions[currentQuestionIndex].type === 'image'}
      <ImageQuestion question={questions[currentQuestionIndex]} on:nextquestion={handleNextQuestion}/>
    {:else if questions[currentQuestionIndex].type === 'rage'}
      <RageQuestion question={questions[currentQuestionIndex]} selectedOption=null/>
      <button on:click={nextQuestion}>Siguiente</button>
    {/if}
  </div>
{:else}
  <div class="questionnaire-container">
    <h1>Fin!</h1>
    <button on:click={submitAnswers}>Enviar respuestas</button>
  </div>
{/if}

<style>
  .questionnaire-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh; /* Use full screen height to center vertically */
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

  button:hover {
    background-color: #0056b3;
  }
</style>

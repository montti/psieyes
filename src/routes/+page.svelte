<script>
  import { goto } from '$app/navigation';
  import { skipRageStore } from '$lib/store.js';
  $skipRageStore = Math.random() < 0.5;
</script>



<div class="questionnaire-container">
	<h1>Reading the Mind in the Eyes Test</h1>
	<img src="/images/monalisa.jpg" alt="Eyes of the Mona Lisa" />
	<p>Este test pretende evaluar su capacidad para discernir emociones a través de la expresión de los ojos. Se le presentarán imágenes de pares de ojos junto a cuatro etiquetas emocionales. Su tarea consistirá en elegir cuál de las palabras disponibles describe mejor la emoción que refleja la mirada.</p>
	<h2>Consentimiento Informado</h2>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

	<button on:click={() => goto('/question')}>Iniciar el test</button>
</div>


<style>
  .questionnaire-container {
    display: flex;
    width: 70%;
    margin: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh; /* Use full screen height to center vertically */
  }

  img {
  	width: 60%;
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

  .thank-you {
    text-align: center;
    margin-top: 2rem;
  }
</style>

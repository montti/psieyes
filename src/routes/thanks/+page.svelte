<script>
  import { goto } from '$app/navigation';
</script>



<div class="questionnaire-container">
  <h1>¡Muchas gracias por sus respuestas!</h1>
  <img src="/images/monalisa.jpg" alt="Eyes of the Mona Lisa" />
  <p>Puede cerrar la pagina, si lo desea comparta el test con sus amigos y conocidos pero no repita el test. ¡Puede afectar los datos! 😨</p>
</div>


<style>
  .questionnaire-container {
    display: flex;
    width: 80%;
    margin: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh; /* Use full screen height to center vertically */
  }

  img {
    width: 50%;
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
<script>
  import { goto } from '$app/navigation';
  import { skipRageStore } from '$lib/store.js';
  $skipRageStore = Math.random() < 0.5;
</script>



<div class="questionnaire-container">
	<h1>Reading the Mind in the Eyes Test</h1>
	<img src="/images/monalisa.jpg" alt="Eyes of the Mona Lisa" />
	<p>Este test pretende evaluar su capacidad para discernir emociones a través de la expresión de los ojos. Se le presentarán imágenes de pares de ojos junto a cuatro etiquetas emocionales. Su tarea consistirá en elegir cuál de las palabras disponibles describe mejor la emoción que refleja la mirada.</p>
	
  	<div style="overflow:scroll;">
		<h1>Consentimiento Informado de Participación en Estudio sobre la Empatía de los Humanos bajo Estados Alterados.</h1>
		<p>Ha sido invitado a participar del estudio titulado "Medición de empatía a través de la etiquetación emocional de los ojos" conducido por Iván Montti, estudiante de pregrado de la Facultad de Ingeniería en la Universidad de Concepción. En el presente documento se explicarán factores clave para que pueda decidir si participar del Estudio. Si tiene alguna duda, puede comunicarse con el equipo de investigación utilizando la información de contacto al final de este documento.</p>
		<p>El objetivo de este estudio es investigar la relación entre la empatía en estados tanto alterados como no alterados y la capacidad de etiquetar emociones en imágenes de ojos, para probar si los estados alterados cambian la empatía de la gente.</p>  
		<p>La participación en este estudio implica responder una serie de cuestionarios y etiquetar la emoción que identifique en la imagenes de ojos con las emociones dadas, desde la presente página web, que tiene un tiempo estimado de 10 a 15 minutos. Cabe recalcar que puede abandonar el estudio en cualquier momento.</p>  
		<p>Los sujetos invitados a participar del estudio son todas aquellas personas que hablen español; sean mayores de 18 años, que cuenten con un dispositivo tecnológico que le permita acceder a la página, y sepan leer. Sin distinción de género.</p>  
		<p>El protocolo a seguir es, si usted decide participar del estudio, será sorteado aleatoriamente (con un porcentaje del 50%) dentro de 2 grupos:</p>
		<p>Grupo 1: En este grupo los participantes tendrán que contestar un breve cuestionario sobre sus datos básicos que no requerirá de datos que lo identifiquen y pasarán a etiquetar las imágenes de ojos con la emoción identificada.</p>  
		<p>Grupo 2: En este grupo los participantes tendrán que contestar dos cuestionarios, uno sobre alguna experiencia en la que hayan experimentado un evento específico y el mismo cuestionario breve sobre sus datos básicos como el grupo 1. Después procederán a etiquetar las imágenes de ojos con la emoción identificada.</p>
		<p>No existen riesgos implicados en su participación de este estudio, ni tanto física como psicológica. En caso de sentir molestias a causa de participar está en todo su derecho de retirarse del estudio en el momento que desee. </p> 
		<p>Su participación en este estudio no tiene ningún tipo de beneficio económico o material.</p> 
		<p>La recopilación de datos durará hasta el 2 de diciembre de 2023, después de que participe en el estudio si, no se volverá a requerir más participación o información de su parte.</p>
		<p>Los datos recopilados al no requerir que el participante entregue información que lo vincule con el estudio, son totalmente anónimos. Aún así cabe recalcar que los investigadores tendrán acceso completo a los datos que entregue si decide participar. Estos datos serán usados con fines académicos, en posibles publicaciones científicas  y en ningún momento serán comercializados. El responsable de esto, en calidad de custodio de los datos, será el Investigador jefe Iván Montti que se encargará de resguardar los datos en un archivo digital donde solo los investigadores adjuntos tendrán acceso a estos, después de realizar todos los análisis estadísticos planeados y terminar el estudio, se estima que a fines del año 2023 estos datos serán borrados.</p>
		<p>Su participación es de carácter libre y voluntario, por tanto tiene todo el derecho a negarse o de retirarse de la investigación en cualquier momento si cambia de opinión. Si lo hace no habrá ninguna consecuencia en lo absoluto.</p>
		<p>En caso de tener dudas o inquietudes sobre la investigación y su participación, tanto antes de decidir si participar como después puede contactar con el equipo de investigación a través del siguiente/ o siguientes correo electrónico/s: montti@posteo.net, ccristinich2021@inf.udec.cl</p> 
	</div>

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

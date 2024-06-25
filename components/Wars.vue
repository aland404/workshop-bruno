<script setup>
import { ref, onMounted } from 'vue'
import BattleInfo from "./BattleInfo.vue"
import JSConfetti from 'js-confetti'

const jsConfetti = new JSConfetti()

const warsInfo = ref([])
const fetchHasFailed = ref(false)
const loading = ref(false)
const isRebellionWinning = ref(false)

async function fetchWars() {
  loading.value = true
  try {
    const response = await fetch("http://localhost:3000/star-wars/wars")
    warsInfo.value = await response.json()
    if(warsInfo.value.summary.winner === 'rebellion') {
      isRebellionWinning.value = true
      jsConfetti.addConfetti({
        emojis: ['🌟', '✨', '⚔️', '💫'],
        emojiSize: 50,
      });
      jsConfetti.addConfetti({
        confettiColors: [
          '#0057e7', // Bleu sabre laser
          '#d32f2f', // Rouge sabre laser
          '#f4f4f4', // Blanc (Stormtroopers)
          '#000000', // Noir (Dark Vador, l'espace)
          '#ffe81f', // Jaune (C3PO, certaines planètes)
          '#7e7e7e', // Gris (vaisseaux)
        ],
        confettiNumber: 250,
      })
    } else {
      isRebellionWinning.value = false
    }
  } catch(error) {
    fetchHasFailed.value = true
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchWars()
})
</script>

<template>
  <div class="block">
    <div class="title">Guerres en cours dans la galaxie</div>
    <br/>

    <div v-if="loading" class="loader-container"><span class="loader"></span></div>
    <div v-else-if="!fetchHasFailed">
      <div v-for="war in warsInfo.wars" :key="`war-${war.name}`">
        <b>Guerre : "{{war.name}}"</b>
        <ul v-for="battle in war.battles" :key="`battle-${battle.name}`">
          <BattleInfo :war-slug="war.slug" :battle-slug="battle.slug" />
        </ul>
      </div>
    </div>
    <div v-else>Le serveur ne semble pas être démarré en local</div>
    <br />

    <div v-if="isRebellionWinning" id="rebellion-wins-message">
      <div>👏 BRAVO 👏</div>
      <div>VOUS AVEZ PERMIS A LA REBELLION DE GAGNER</div>
      <div>LA GUERRE CONTRE l'EMPIRE !</div>
    </div>
    <div class="button-container">
      <input type="button" class="button" @click="fetchWars" value="Rafraichir les données" :disabled="loading" />
    </div>
  </div>
</template>

<style scoped>
.title {
  text-align: center;
  font-size: 2rem;
  text-decoration: underline;
}
.block {
  border: 1px solid white;
  padding: 0.5rem;
  border-radius: 5px;
}
#rebellion-wins-message {
  text-align: center;
}
.button-container {
  display: flex;
  justify-content: right;
  .button {
    cursor: pointer;
    background-color: var(--vp-c-green-2);
    border: 1px solid var(--vp-c-divider);
    border-radius: 8px;
    padding: 5px;
    transition: border-color 0.25s;
  }
  .button:hover {
    border-color: var(--vp-c-green-1);
  }
  .button:disabled {
    background-color: lightgray;
    border-color: lightgray;
    cursor: auto;
  }
}

.loader-container {
  display: flex;
  justify-content: center;
  margin: 40px 0px;

  .loader {
    width: 48px;
    height: 48px;
    border: 2px solid #FFF;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }
  .loader::after,
  .loader::before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    background: #FF3D00;
    width: 6px;
    height: 6px;
    transform: translate(150%, 150%);
    border-radius: 50%;
  }
  .loader::before {
    left: auto;
    top: auto;
    right: 0;
    bottom: 0;
    transform: translate(-150%, -150%);
  }
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
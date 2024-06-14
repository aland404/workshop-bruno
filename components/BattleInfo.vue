<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  warSlug: String,
  battleSlug: String,
  displayAlone: {
    type: Boolean,
    default: false
  }
})

const battle = ref(undefined)
const fetchHasFailed = ref(false)
const loading = ref(false)

async function fetchBattleSummary() {
  loading.value = true
  try {
    const response = await fetch(`http://localhost:3000/star-wars/wars/${props.warSlug}/battles/${props.battleSlug}/summary`)
    battle.value = await response.json()
  } catch(error) {
    fetchHasFailed.value = true
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchBattleSummary()
})

</script>

<template>
  <div v-if="loading" class="loader-container"><span class="loader"></span></div>
  <div v-else-if="battle" :class="displayAlone && 'block'">
    <b>Bataille: {{ battle.name }}</b>
    <div class="winner">--> Gagnant: {{ battle.winner.faction }} - Puissance: {{ battle.winner.totalPower }}</div>
    <div class="loser">--> Perdant: {{ battle.loser.faction }} - Puissance: {{ battle.loser.totalPower }}</div>

    <div v-if="displayAlone">
        <br/>
        <div v-if="battle.loser.faction === 'rebellion'" class="loser">Vous perdez cette bataille... 😢</div>
        <div v-else class="winner">Vous gagnez cette bataille! 💪</div>
        <div class="button-container">
          <input type="button" class="button" @click="fetchBattleSummary" value="Rafraichir les données" :disabled="loading" />
        </div>
    </div>
  </div>
  <div v-else>Le serveur ne semble pas être démarré en local</div>
</template>

<style scoped>
.block {
  border: 1px solid white;
  padding: 0.5rem;
  border-radius: 5px;
}
.loser {
  color: lightcoral;
  padding-left: 1rem;
}
.winner {
  color: lightgreen;
  padding-left: 1rem;
}

.loader-container {
  display: flex;
  justify-content: left;
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

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
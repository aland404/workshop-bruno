<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  warSlug: String,
  battleSlug: String
})

const battle = ref(undefined)
const loading = ref(false)
async function fetchBattleSummary() {
  loading.value = true
  const response = await fetch(`http://localhost:3000/star-wars/wars/${props.warSlug}/battles/${props.battleSlug}/summary`)
  battle.value = await response.json()
  loading.value = false
}

onMounted(() => {
  fetchBattleSummary()
})

</script>

<template>
  <div v-if="loading" class="loader-container"><span class="loader"></span></div>

  <div v-if="battle">
    <b>Bataille: {{ battle.name }}</b>
    <div class="winner">--> Gagnant: {{ battle.winner.faction }}</div>
    <div class="loser">--> Perdant: {{ battle.loser.faction }}</div>
  </div>
</template>

<style scoped>
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

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
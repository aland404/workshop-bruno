<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  warSlug: String,
  battleSlug: String
})

const battle = ref(undefined)
async function fetchBattleSummary() {
  const response = await fetch(`http://localhost:3000/star-wars/wars/${props.warSlug}/battles/${props.battleSlug}/summary`)
  battle.value = await response.json()
}

onMounted(() => {
  fetchBattleSummary()
})

function refreshWarInfo() {
  fetchBattleSummary()
}

</script>

<template>
  <div v-if="battle">
    <b>Bataille: {{ battle.name }}</b>
    <div>--> Gagnant: {{ battle.winner.faction }}</div>
    <div>--> Perdant: {{ battle.loser.faction }}</div>
  </div>
</template>

<style scoped>

</style>
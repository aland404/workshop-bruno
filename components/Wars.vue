<script setup>
import { ref, onMounted } from 'vue'
import BattleInfo from "./BattleInfo.vue";
const wars = ref([])
async function fetchWars() {
  const response = await fetch("http://localhost:3000/star-wars/wars")
  wars.value = await response.json()
}

onMounted(() => {
  fetchWars()
})

function refreshWarInfo() {
  fetchWars()
}
</script>

<template>
  <div v-for="war in wars" :key="`war-${war.name}`">
    <b>Guerre: "{{war.name}}"</b>
    <ul v-for="battle in war.battles" :key="`battle-${battle.name}`">
      <BattleInfo :war-slug="war.slug" :battle-slug="battle.slug" />
    </ul>
  </div>
  <br />
  <input type="button" @click="refreshWarInfo" value="Rafraichir les données" />
</template>

<style scoped>

</style>
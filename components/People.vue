<script setup>
import { ref, onMounted } from 'vue'
import PeopleInfo from "./PeopleInfo.vue";

const people = ref([])
const fetchHasFailed = ref(false)
const loading = ref(false)

async function fetchPeople() {
  loading.value = true
  try {
    const response = await fetch("http://localhost:3000/star-wars/people")
    people.value = await response.json()
  } catch(error) {
    fetchHasFailed.value = true
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchPeople()
})
</script>

<template>
  <div class="block">
    <div class="title">Personnages de la galaxie</div>
    <br/>

    <div v-if="loading" class="loader-container"><span class="loader"></span></div>
    <div v-else-if="!fetchHasFailed">
      <div v-for="currentPeople in people" :key="`people-${currentPeople.name}`">
        <PeopleInfo :people="currentPeople" />
      </div>
    </div>
    <div v-else>Le serveur ne semble pas être démarré en local</div>
    <br />

    <div class="button-container">
      <input type="button" class="button" @click="fetchPeople" value="Rafraichir les données" :disabled="loading" />
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
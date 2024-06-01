<script setup lang="ts">
import type { PropType } from 'vue'

interface PeopleInfo {
  slug: string
  kind: string
  faction: string
  power: number
}

defineProps({
  people: Object as PropType<PeopleInfo>
})
</script>

<template>
  <div>
    <b :class="people.faction">{{ people.kind.toUpperCase() }}</b>: {{ people.faction }}, puissance: {{ people.power }}
  </div>
</template>

<style scoped>
.empire {
  color: lightcoral;
}
.rebellion {
  color: lightgreen;
}
</style>
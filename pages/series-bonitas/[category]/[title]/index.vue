<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const title = route.params.title
const category = route.params.category

</script>

<template>
    <div class="series">
        <h1 class="series__title series__title--primary">Serie de la categoría: {{ category }}</h1>
        <h2 class="series__title">Episodio 1 de {{ title }}</h2>
    </div>
</template>

<style lang="scss" scoped>
.series {
  width: 100%;
  padding: 1rem;

  &__title {
    font-size: 1.3em;
    text-align: center;
    
  }

}
</style>
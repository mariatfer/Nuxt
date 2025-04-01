<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const category = route.params.category;
console.log(route.params);
let titles: { id: number; name: string }[] = [];
if (category === "aventura") {
  titles = [
    {
      id: 1,
      name: "Spiderman",
    },
    {
      id: 2,
      name: "Supergirl",
    },
  ];
} else if (category === "comedia") {
  titles = [
    {
      id: 1,
      name: "The Big Bang Theory",
    },
    {
      id: 2,
      name: "The Office",
    },
  ];
} else {
  titles = [];
}
</script>

<template>
  <div class="series">
    <h1 class="series__title series__title--primary">Series de la categoría: {{ category }}</h1>
    <h2 class="series__title">Títulos</h2>
    <nav class="series__nav">
      <ul class="series__list">
        <li v-for="title in titles" :key="title.id" class="series__list--item">
          <NuxtLink :to="`/series-bonitas/${category}/${title.name}`">
            {{ title.name }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.series {
  width: 100%;
  padding: 1rem;

  &__title {
    font-size: 1.4em;

    &--primary {
      text-align: center;
    }
  }

  &__list {
    padding-left: 0.5rem;
  }
}
</style>

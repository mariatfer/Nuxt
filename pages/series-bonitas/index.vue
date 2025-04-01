<script setup lang="ts">
const categories = [
  {
    id: 1,
    name: "aventura",
  },
  {
    id: 2,
    name: "comedia",
  },
];
</script>

<template>
  <div class="series">
    <h1 class="series__title series__title--primary">Series bonitas</h1>
    <h2 class="series__title">Categorías</h2>
    <nav class="series__nav">
      <ul class="series__list">
        <li
          v-for="category in categories"
          :key="category.id"
          class="series__list--item"
        >
          <NuxtLink :to="`/series-bonitas/${category.name}`"> {{ category.name }}</NuxtLink>
        </li>
        <!-- <li class="series__list--item">
          <NuxtLink to="/series-bonitas/aventuras">Aventuras</NuxtLink>
        </li> -->
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

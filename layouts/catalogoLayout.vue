<script setup lang="ts"></script>

<template>
  <div>
    <header class="header">
      <h2 class="header__title">Menú</h2>
      <nav class="header__nav">
        <ul class="header__nav--list">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/catalogo">Catalogo</NuxtLink></li>
          <li><NuxtLink to="/productos">Productos</NuxtLink></li>
          <li><NuxtLink to="/series-bonitas/">Series</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__nav--list {
    display: flex;
    gap: 2em;
    list-style-type: none;
    padding: 0;
  }
}
</style>

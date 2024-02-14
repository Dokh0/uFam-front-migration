<!-- src/layouts/HomeLayout.vue -->
<template>
  <div>
    <!-- Puedes incluir elementos comunes como cabecera, menú, etc. -->
    <nav> <!-- Menú de navegación --> </nav>
    <h1>uFam</h1>
    <main>
      <router-view />
    </main>
    <footer> <!-- Pie de página --> </footer>
  </div>
</template>

<script>
export default {
  name: 'HomeLayout'
};
</script>

<style>
/* Estilos específicos para HomeLayout */
</style>
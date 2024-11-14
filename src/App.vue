<script setup>
</script>

<template>
    <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/pokemon">Pokemon</RouterLink> |
      </nav>
    </div>
  </header>
  <RouterView />
</template>
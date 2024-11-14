<template>
  <input v-model="pokemon" type="text" class="add" />
  <button @click="addItem">Add</button>
  <input v-model="filterText" type="text" class="filter" />
  <div v-for="(item, index) in filterPokemon" :key="index">
    {{ item.name }}
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";

const request = ref([]);
const pokemon = ref("");
const filterText = ref("");

const fetchPokemon = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    const data = await response.json();
    request.value = data.results;
  } catch (error) {
    console.log(error);
  }
};

const addItem = () => {
  const duplicate = request.value.some((element) => {
    return element.name === pokemon.value;
  });

  if (duplicate) {
    alert("Not duplicate allowed");
  } else {
    request.value.push({ name: pokemon.value });
    pokemon.value = "";
  }
};

const filterPokemon = computed(() => {
  return request.value.filter((element) => {
    return element.name.includes(filterText.value);
  });
});

onMounted(() => {
  fetchPokemon();
});
</script>

<style lang="scss" scoped></style>

<template>
  <div class="home">
    <h2>Tasks</h2>
    <div class="row">
      <todo-card v-for="t in todos" :key="t.Id" :todo="t" />
    </div>
  </div>
</template>

<script lang="ts" src="./Home.ts"></script>
<style lang="scss" src="./Home.scss"></style>

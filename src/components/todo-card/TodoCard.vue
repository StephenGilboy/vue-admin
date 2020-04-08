<template>
  <div class="card col-lg-4 col-md-4 col-sm-12">
    <div class="card-body">
      <h5 class="card-title">{{ todo.Title }}</h5>
      <p v-if="todo.Completed">Completed</p>
      <p v-else>Incomplete</p>
      <!-- TODO Rotuer Link -->
    </div>
  </div>
</template>

<script lang="ts" src="./TodoCard.ts">
</script>

<style lang="scss" src="./TodoCard.scss" scoped>

</style>

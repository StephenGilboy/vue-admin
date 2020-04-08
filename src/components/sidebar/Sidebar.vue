<template>
  <nav class="col-md-2 d-none d-md-block bg-light sidebar">
    <div class="sidebar-sticky">
      <ul class="nav flex-column">
        <li class="nav-item"><router-link to="/" class="nav-link" active-class="active">Home</router-link></li>
        <li class="nav-item"><router-link to="/about" class="nav-link" active-class="active">About</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts" src="./Sidebar.ts"></script>
<style lang="scss" src="./Sidebar.scss" scoped></style>

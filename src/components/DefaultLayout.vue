<template>
    <div>
        <navBar/>

        <main>
            <router-view />
        </main>
  </div>
</template>

<script setup>
import navBar from './navBar.vue';

</script>
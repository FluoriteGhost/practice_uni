<script setup>
import Myheader from './components/header.vue'
import Myfooter from './components/footer.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <Myheader/>
  </header>
  <main>
    <RouterView/>
  </main>
  <footer>
    <Myfooter/>
  </footer>
</template>

<style scoped>
header
{
  width: 100%;
  position: static;
  top: 0px;
  background-color: #000000;
  margin-bottom: 50px;
}
footer
{
  width: 100%;
  position: fixed;
  bottom: 0px; 
  color:rgb(255, 255, 255);
  background-color: #000000;
}

main 
{
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
}
</style>
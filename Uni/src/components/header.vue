<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
<nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
        <RouterLink to="/disciplines">Дисциплины</RouterLink>
        <RouterLink to="/">Кафедра</RouterLink>
        <RouterLink to="/extrawork">Дополнительная работа</RouterLink>
    </div>

</nav>
</template>
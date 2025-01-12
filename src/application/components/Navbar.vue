<template>
<nav class="container mx-auto">
    <ul class="flex justify-center items-center gap-x-6">
        <li :class="[ activeLink.includes('dashboard') ? 'border-blue-600' : 'border-transparent hover:border-blue-600' ,'py-2 px-2 border-b-4']">
            <RouterLink :to="{ name: 'dashboard' }" :class="[ activeLink.includes('dashboard') ? 'text-blue-600 font-semibold' : 'text-gray-600', 'hover:text-blue-600 hover:font-semibold text-lg']">
                <i class="bi bi-graph-up-arrow"></i> Painel
            </RouterLink>
        </li>
        <li :class="[ activeLink.includes('norms') ? 'border-blue-600' : 'border-transparent hover:border-blue-600' ,'py-2 px-2 border-b-4']">
            <RouterLink :to="{ name: 'norms' }" :class="[ activeLink.includes('norms') ? 'text-blue-600 font-semibold' : 'text-gray-600', 'hover:text-blue-600 hover:font-semibold text-lg']"><i class="bi bi-book"></i> Normas</RouterLink>
        </li>

        <li :class="[ activeLink.includes('programs') ? 'border-blue-600' : 'border-transparent hover:border-blue-600' ,'py-2 px-2 border-b-4']">
            <RouterLink :to="{ name: 'programs' }" :class="[ activeLink.includes('programs') ? 'text-blue-600 font-semibold' : 'text-gray-600', 'hover:text-blue-600 hover:font-semibold text-lg']"><i class="bi bi-archive"></i> Programas</RouterLink>
        </li>

        <li :class="[ activeLink.includes('process') ? 'border-blue-600' : 'border-transparent hover:border-blue-600' ,'py-2 px-2 border-b-4']">
            <RouterLink :to="{ name: 'process' }" :class="[ activeLink.includes('process') ? 'text-blue-600 font-semibold' : 'text-gray-600', 'hover:text-blue-600 hover:font-semibold text-lg']"><i class="bi bi-collection"></i> Processos</RouterLink>
        </li>
     
        <li :class="[ activeLink.includes('conformities') ? 'border-blue-600' : 'border-transparent hover:border-blue-600' ,'py-2 px-2 border-b-4']">
            <RouterLink :to="{ name: 'conformities' }" :class="[ activeLink.includes('conformities') ? 'text-blue-600 font-semibold' : 'text-gray-600', 'hover:text-blue-600 hover:font-semibold text-lg']"><i class="bi bi-arrow-repeat text-[1.2rem]"></i>  Conformidades</RouterLink>
        </li>
     
        <li :class="[ activeLink.includes('audits') ? 'border-blue-600' : 'border-transparent hover:border-blue-600' ,'py-2 px-2 border-b-4']">
            <RouterLink :to="{ name: 'audits' }" :class="[ activeLink.includes('audits') ? 'text-blue-600 font-semibold' : 'text-gray-600', 'hover:text-blue-600 hover:font-semibold text-lg']"><i class="bi bi-clipboard-check"></i> Auditorias</RouterLink>
        </li>
        <li :class="[ activeLink.includes('training') ? 'border-blue-600' : 'border-transparent hover:border-blue-600' ,'py-2 px-2 border-b-4']">
            <RouterLink :to="{ name: 'trainings' }" :class="[ activeLink.includes('trainings') ? 'text-blue-600 font-semibold' : 'text-gray-600', 'hover:text-blue-600 hover:font-semibold text-lg']"><i class="bi bi-person-video3"></i> Treinamentos</RouterLink>
        </li>
        <li :class="[ activeLink.includes('documentations') ? 'border-blue-600' : 'border-transparent hover:border-blue-600' ,'py-2 px-2 border-b-4']">
            <RouterLink :to="{ name: 'documentations' }" :class="[ activeLink.includes('documentations') ? 'text-blue-600 font-semibold' : 'text-gray-600', 'hover:text-blue-600 hover:font-semibold text-lg']"><i class="bi bi-card-heading"></i> Documentação</RouterLink>
        </li>
    </ul>
</nav>
</template>

<script setup>

import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';


const router = useRouter();
const activeLink = ref("dashboard");

router.beforeResolve((to) => {
  if (to.name === 'dashboard') {
    activeLink.value = to.name;
  }else{
    activeLink.value = to.path;
  }
});


</script>
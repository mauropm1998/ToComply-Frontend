<template>
    <article class="bg-white rounded-lg p-4">
        <h2 class="text-gray-700 font-semibold">Estatísticas dos Processos</h2>
        <p class="text-sm text-gray-500">Principais dados de todos os processos criados</p>
        <div class="grid grid-cols-4 gap-4 my-7">
            <ProcessStatisticsCard type="procedures" />
            <ProcessStatisticsCard type="norms" />
            <ProcessStatisticsCard type="oportunities" />
            <ProcessStatisticsCard type="risks" />
        </div>
    </article>
</template>

<script setup>
import ProcessStatisticsCard from './ProcessStatisticsCard.vue';


</script>
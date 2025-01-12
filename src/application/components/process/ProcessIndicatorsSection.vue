<template>
    <article class="bg-white rounded-lg p-4">
        <h2 class="text-gray-700 font-semibold">Indicadores-chave de Performance (KPIs)</h2>
        <p class="text-sm text-gray-500">Processo PRC-20231 | Limites Aplicáveis de Segurança</p>
        <div class="grid grid-cols-3 gap-4 my-7">
            <ProcessIndicatorsBox type="politic_procedure" />
            <ProcessIndicatorsBox type="n_conformity" />
            <ProcessIndicatorsBox type="conformity" />
        </div>
    </article>
</template>

<script setup>
import ProcessIndicatorsBox from './ProcessIndicatorsBox.vue';


</script>
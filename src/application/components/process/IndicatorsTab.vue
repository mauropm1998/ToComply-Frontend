<template>
    <section class="mt-3">
        <div class="flex justify-between items-center">
            <h2 class="text-gray-700 font-semibold text-xl">Indicadores-chave de Performance (KPIs)</h2>
            <button class="btn-neutral-dark">
                <i class="bi bi-pencil text-[1rem]"></i>
            </button>
        </div>
        <div class="mt-5 rounded-lg  gap-6 grid grid-cols-5">
            <ProcessIndicatorsBox type="politic_procedure" get-options />
            <ProcessIndicatorsBox type="n_conformity" get-options />
            <ProcessIndicatorsBox type="conformity" get-options />
            <ProcessIndicatorsBox type="politic_procedure" get-options />
            <ProcessIndicatorsBox type="conformity" get-options />
            <ProcessIndicatorsBox type="n_conformity" get-options />
            <ProcessIndicatorsBox type="conformity" get-options />
            <ProcessIndicatorsBox type="politic_procedure" get-options />
            <ProcessIndicatorsBox type="n_conformity" get-options />
            <ProcessIndicatorsBox type="conformity" get-options />
        </div>
    </section>
</template>

<script setup>
import ProcessIndicatorsBox from './ProcessIndicatorsBox.vue';

</script>
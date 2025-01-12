<template>
    <section class="mt-3 pb-12">
        <div class="flex justify-between items-center mb-7">
            <div>
                <h2 class="text-gray-700 font-semibold text-xl">Mapeamento de Processos</h2>
                <p class="text-sm text-gray-500 max-w-[700px] mt-1 mb-2">
                    O mapeamento de processos possibilita a equipe ter uma visão clara e
                    estruturada de toda a rotina e dinâmica das operações da empresa.
                </p>
            </div>

            <button class="btn-neutral-dark">
                <i class="bi bi-pencil text-[1rem]"></i>
            </button>
        </div>

        <div class="max-w-[70%] mt-2 MB-8">
            <FormProcedureMap @success="stop" @error="stop" @processing="stop" @change-step="32" />
        </div>

    </section>
</template>

<script setup>
import FormProcedureMap from './FormProcedureMap.vue';


</script>
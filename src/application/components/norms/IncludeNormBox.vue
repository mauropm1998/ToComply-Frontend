<template>
    <div class="border-s-4 border-y ps-3 pb-2 pt-1 border-s-blue-500 mb-3">
        <p class="mb-1">Norma de Segurança de Informação</p>
        <div class="flex items-center justify-between">
              <div v-if="status === 'CERTIFIABLE'"
            class="inline-flex items-center px-2 py-1 rounded-xl text-blue-500 bg-blue-100">
            <span class="text-xs font-semibold">Certificável</span>
        </div>
        <div v-if="status === 'NOT_CERTIFIABLE'"
            class="inline-flex items-center px-2 py-1 text-orange-500 rounded-xl bg-orange-100/80">
            <span class="text-sm font-semibold">Não Certificável</span>
        </div>

        <RouterLink to="/" class="text-gray-400 hover:text-blue-500">
            <i class="bi bi-box-arrow-up-right text-[1.2rem]"></i>
        </RouterLink>
        </div>
    </div>
</template>

<script setup>

import { ref } from 'vue';

const status = ref("CERTIFIABLE");

</script>
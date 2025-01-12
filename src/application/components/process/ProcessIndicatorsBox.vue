<template>
    <div v-if="type === 'conformity'" :class="[ getOptions ? 'bg-white' : 'bg-slate-100', 'rounded-lg border shadow-lg py-4 ps-4 pe-2']">
        <div class="flex items-start justify-between">
            <span class="block w-11 h-11 text-center leading-[1.6rem] rounded-lg p-2 bg-emerald-400 text-white">
                <i class="bi bi-bag-check-fill text-[1.3rem]"></i>
            </span>
            <div class="relative" v-if="getOptions">
                <BaseDropdownOptions :options="['DELETE', 'PREVIEW_ROUTER_LINK']"
                :preview_route_object="{ name: 'process-preview', params: { id: 2 } }" @delete="showDialogDelete(1)" />
            </div>
        </div>

        <span class="block my-2 text-sm text-gray-600">Taxa de Conformidade</span>
        <div class="flex items-center gap-x-1">
            <i v-if="up" class="bi bi-arrow-up text-[1rem] text-green-600"></i>
            <i v-else class="bi bi-arrow-down text-[1rem] text-red-600"></i>
            <span class="font-bold text-2xl">34%</span>
        </div>
    </div>
    <div v-if="type === 'politic_procedure'" :class="[getOptions ? 'bg-white' : 'bg-slate-100', 'rounded-lg border shadow-lg py-4 ps-4 pe-2']">
        <div class="flex justify-between items-start">
            <span class="block w-11 h-11 text-center leading-[1.6rem] rounded-lg p-2 bg-rose-400 text-white">
                <i class="bi bi-archive-fill text-[1.3rem]"></i>
            </span>
            <div class="relative" v-if="getOptions">
                <BaseDropdownOptions :options="['DELETE', 'PREVIEW_ROUTER_LINK']"
                :preview_route_object="{ name: 'process-preview', params: { id: 2 } }" @delete="showDialogDelete(1)" />
            </div>
        </div>

        <span class="block my-2 text-sm text-gray-600">Taxa de Reconhecimento de Políticas e Procedimentos</span>
        <div class="flex items-center gap-x-1">
            <i class="bi bi-arrow-down text-[1rem] text-red-600"></i>
            <span class="font-bold text-2xl">2.34%</span>
        </div>
    </div>
    <div v-if="type === 'n_conformity'" :class="[ getOptions ? 'bg-white' : 'bg-slate-100', 'rounded-lg border shadow-lg py-4 ps-4 pe-2']">
        <div class="flex justify-between items-start">
              <span class="block w-11 h-11 text-center leading-[1.6rem] rounded-lg p-2 bg-orange-400 text-white">
            <i class="bi bi-escape text-[1.3rem]"></i>
        </span>
        <div class="relative" v-if="getOptions">
                <BaseDropdownOptions :options="['DELETE', 'PREVIEW_ROUTER_LINK']"
                :preview_route_object="{ name: 'process-preview', params: { id: 2 } }" @delete="showDialogDelete(1)" />
            </div>
        </div>
      
        <span class="block my-2 text-sm text-gray-600">Número de Incidentes de Conformidade</span>
        <div class="flex items-center gap-x-1">
            <i class="bi bi-arrow-down text-[1rem] text-red-600"></i>
            <span class="font-bold text-2xl">2.34%</span>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import BaseDropdownOptions from '@/components/BaseDropdownOptions.vue';



defineProps({
    type: {
        type: String,
        default: "conformity", // 
    },
    getOptions: {
        type: Boolean,
        default: false,
    }
})

const up = ref(true);

</script>
<template>
    <div class="py-4 border-b border-slate-200">
        <div class="flex justify-between items-center">
            <h3 class="font-normal text-gray-800">Rever as informações de segurança</h3>
            <CorrectivePreventivePriority :priority="priority" />
        </div>

        <div class="mt-1">
            <p class="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet accusamus adipisci dolor? Pariatur optio qui nobis nostrum.</p>
            <p class="text-sm mt-2 text-gray-500 font-medium">12 Abr 2023, 21:34 </p>
        </div>
    </div>
</template>

<script setup>
import CorrectivePreventivePriority from './CorrectivePreventivePriority.vue';

defineProps({
    priority: {
        type: String,
        default: "LOW"
    }
})

</script>
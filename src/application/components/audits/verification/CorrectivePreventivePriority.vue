<template>
    <div v-if="priority === 'URGENT'" class="inline-flex items-center px-2.5 pb-0.5 rounded-md border text-red-600 bg-red-100/80 border-red-400">
        <span class="text-sm font-semibold">Urgente</span>
    </div>

    <div v-if="priority === 'MEDIUM'"
        class="inline-flex items-center px-2.5 pb-0.5 rounded-md border text-yellow-600 bg-yellow-100/80 border-yellow-400">
        <span class="text-sm font-semibold">Média</span>
    </div>

    <div v-if="priority === 'LOW'" class="inline-flex items-center px-2.5 pb-0.5 rounded-md border text-blue-600 bg-blue-100 border-blue-400"> 
        <span class="text-sm font-semibold">Baixa</span>
    </div>
</template>

<script setup>

defineProps({
    priority: {
        type: String, // URGENT, MEDIUM, LOW
    }
});

</script>
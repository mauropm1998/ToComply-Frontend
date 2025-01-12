<template>
    <div v-if="priority === 'LOW'"
        class="inline-flex items-center px-3 py-1 rounded-xl text-emerald-500 bg-emerald-100/60">
        <span class="text-sm font-normal">Baixa</span>
    </div>

    <div v-if="priority === 'MIDDLE'" class="inline-flex items-center px-3 py-1 text-yellow-500 rounded-xl bg-yellow-100/60">
        <span class="text-sm font-normal">Média</span>
    </div>

    <div v-if="priority === 'HIGH'" class="inline-flex items-center px-3 py-1 text-red-500 rounded-xl bg-red-100">
        <span class="text-sm font-normal">Alta</span>
    </div>
</template>

<script setup>

defineProps({
    priority: {
        type: String, // LOW, MIDDLE, HIGH
    }
});

</script>
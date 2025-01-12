<template>
    <div v-if="status === 'PLANNED'"
        class="inline-flex items-center px-3 py-1 rounded-xl text-blue-500 bg-blue-100/60">
        <span class="text-sm font-normal">Planejado</span>
    </div>

    <div v-if="status === 'IN_COURSE'" class="inline-flex items-center px-3 py-1 text-yellow-500 rounded-xl bg-yellow-100/60">
        <span class="text-sm font-normal">Em Vigor</span>
    </div>

    <div v-if="status === 'SUSPENDED'" class="inline-flex items-center px-3 py-1 text-red-500 rounded-xl bg-red-100">
        <span class="text-sm font-normal">Suspenso</span>
    </div>
</template>

<script setup>

defineProps({
    status: {
        type: String, // PLANNED, IN_COURSE, SUSPENDED
    }
});

</script>
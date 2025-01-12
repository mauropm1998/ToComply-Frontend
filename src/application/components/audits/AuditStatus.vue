<template>
    <div v-if="status === 'SUSPENDED'"
        class="inline-flex items-center px-3 py-1 text-yellow-500 rounded-xl bg-yellow-100/60">
        <span class="text-sm font-normal">Suspensa</span>
    </div>

    <div v-if="status === 'CANCELED'"
        class="inline-flex items-center px-3 py-1 rounded-xl text-red-500 bg-red-100/60">
        <span class="text-sm font-normal">Cancelada</span>
    </div>

    <div v-if="status === 'IN_COURSE'" class="inline-flex items-center px-3 py-1 rounded-xl text-blue-500 bg-blue-100/60">
        <span class="text-sm font-normal">Em andamento</span>
    </div>

    <div v-if="status === 'DONE'" class="inline-flex items-center px-3 py-1 text-emerald-500 bg-emerald-100/60">
        <span class="text-sm font-normal">Concluída</span>
    </div>
</template>

<script setup>

defineProps({
    status: {
        type: String, // OPENED, IN_COURSE, DONE, CANCELED
    }
});

</script>
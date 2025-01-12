<template>
    <div v-if="status === 'ACTIVE'"
        class="inline-flex items-center px-3 py-1 rounded-xl text-emerald-500 bg-emerald-100/60">
        <span class="text-sm font-normal">Ativa</span>
    </div>

    <div v-if="status === 'EVALUATION'" class="inline-flex items-center px-3 py-1 text-yellow-500 rounded-xl bg-yellow-100/60">
        <span class="text-sm font-normal">Revisão</span>
    </div>

    <div v-if="status === 'INACTIVE'" class="inline-flex items-center px-3 py-1 text-red-500 rounded-xl bg-red-100">
        <span class="text-sm font-normal">Inativa</span>
    </div>
</template>

<script setup>

defineProps({
    status: {
        type: String, // ACTIVE, EVALUATION, INACTIVE
    }
});

</script>
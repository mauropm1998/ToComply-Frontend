<template>
    <div v-if="priority === 'HIGHT'" class="inline-flex items-center py-1 gap-x-3">
        <svg width="30" height="30">
            <circle id="progress-circle" cx="15" cy="15" r="13" aria-valuenow="4"></circle>
        </svg>
        <span class="text-sm font-normal text-gray-600">Alta</span>
    </div>

    <div v-if="priority === 'NORMAL'"
        class="inline-flex items-center px-3 py-1 text-yellow-500 rounded-xl bg-yellow-100/60">
        <span class="text-sm font-normal">Média</span>
    </div>

    <div v-if="priority === 'LOW'" class="inline-flex items-center px-3 py-1 text-red-500 rounded-xl bg-red-100">
        <span class="text-sm font-normal">Baixa</span>
    </div>
</template>

<script setup>

defineProps({
    priority: {
        type: String, // HIGHT, NORMAL, LOW
    }
});

</script>

<style scoped>
.progress-circle {
    stroke: #f6c511;
    fill: none;
    stroke-width: 3;
    stroke-dasharray: 50;
    transition: stroke-dasharray 0.3s;
}

#progress-circle {
    stroke: #f6c511;
    fill: none;
    stroke-width: 3;
    stroke-dasharray: 50;
    transition: stroke-dasharray 0.3s;
}
</style>
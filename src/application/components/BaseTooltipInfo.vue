<template>
    <div class="flex justify-end">
        <!-- Tooltip toggle button -->
        <button
            class="text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-blue-50" type="button"
            @click="toggleTooltip">
           <i class="bi bi-exclamation-circle text-[1.3rem]"></i>
        </button>
        <!-- Tooltip content -->
        <Transition name="tooltip" mode="in-out">
            <div v-show="openTooltip"
                class="tooltip absolute top-[1.5rem] right-0 w-[270px] p-3 mt-2 z-30 bg-gray-50 rounded-md shadow-2xl border-2 border-solid border-gray-200 dark:bg-gray-800">
                {{ info }}
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { ref } from "vue"

const openTooltip = ref(false);

defineProps({
    info: String,
})

const closeTooltipOnClickOutside = (event) => {
    if (!event.target.classList.contains("tooltip")) {
        openTooltip.value = false;
        document.removeEventListener("click", closeTooltipOnClickOutside);
    }
};

const toggleTooltip = () => {
    openTooltip.value = !openTooltip.value;

    if (openTooltip.value) {
        setTimeout(() => {
            document.addEventListener("click", closeTooltipOnClickOutside)
        }, 100)
    }
};

</script>

<style scoped>
.tooltip-enter-active {
    transition: all .3s ease;
}

.tooltip-leave-active {
    transition: all .2s ease;
}

.tooltip-enter-from {
    opacity: 0;
    transform: translateY(20%);
}

.tooltip-leave-to {
    opacity: 0;
}</style>
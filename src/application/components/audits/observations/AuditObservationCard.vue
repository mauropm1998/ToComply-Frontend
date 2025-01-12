<template>
    <div class="flex gap-x-4 items-top mb-6">
        <img :src="observationData.responsable.picture" alt="Identidade Visual"
            class="object-cover w-7 h-7 rounded-full dark:border-gray-700 shrink-0">
        <div>
            <div class="flex gap-x-3 items-center">
                <h3 class="font-medium leading-none uppercase  text-gray-800 dark:text-white">
                    {{ observationData.responsable.name }}
                </h3>
                <span class="text-sm font-normal leading-none text-gray-600 dark:text-gray-400">
                    Auditor Sénior</span>
            </div>

            <div class="content mt-2">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quis non, illum vel ex
                    consequuntur molestias! Ab nobis error optio quam placeat nostrum temporibus ut modi. Veniam
                    magnam deserunt ullam.</p>

                <div class="flex justify-between mt-3">
                    <div class="options flex gap-x-4">
                        <button class="text-gray-500 flex gap-x-1 items-center">
                            <i class="bi bi-check-circle text-[1.2rem] hover:text-blue-500"></i> 3
                        </button>
                        <button class="text-gray-500 flex gap-x-1 items-center">
                            <i class="bi bi-pin-angle text-[1.3rem] hover:text-blue-500"></i>
                        </button>
                    </div>
                    <span class="text-sm font-normal leading-none text-gray-600 dark:text-gray-400">
                        {{ observationData.date }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { ref, onMounted } from 'vue';


const props = defineProps({
    observationData: {
        type: Object,
        default: null
    }
});

const observation = ref({});


onMounted(() => {

    if(props.observationData != null) {
        observation
    }


});

</script>
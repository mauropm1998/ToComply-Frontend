<template>
    <div class="flex justify-between container mx-auto pb-3">
        <div class="logo">
            <RouterLink to="/" class="flex items-center">
                <span class="text-xl font-bold">Comply</span>
                <span class="text-2xl text-blue-600 font-bold">360</span>
            </RouterLink>
        </div>
        <div class="options flex gap-x-4 items-center">
            <div class="flex gap-x-3 items-center">
                <button>
                    <i class="bi bi-search text-[1.4rem] text-gray-400 hover:text-gray-500"></i>
                </button>

                <div class="relative">
                    <BaseNotificationsBox />
                </div>

                <button>
                    <i class="bi bi-gear-fill text-[1.4rem] text-gray-400 hover:text-gray-500"></i>
                </button>
            </div>
            <div class="relative">
                <UserProfileBox />
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseNotificationsBox from './BaseNotificationsBox.vue';
import UserProfileBox from './UserProfileBox.vue';

</script>
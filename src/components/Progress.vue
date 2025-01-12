<template>
  <div class="absolute top-0 left-0 w-full h-full bg-white/60">
    <div class="h-1.5 w-full bg-blue-100 overflow-hidden">
      <div class="progress w-full h-full bg-blue-500 left-right"></div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.progress {
  animation: progress 1s infinite linear;
}

.left-right {
  transform-origin: 0% 50%;
}

@keyframes progress {
  0% {
    transform: translateX(0) scaleX(0);
  }

  40% {
    transform: translateX(0) scaleX(0.4);
  }

  100% {
    transform: translateX(100%) scaleX(0.5);
  }
}
</style>

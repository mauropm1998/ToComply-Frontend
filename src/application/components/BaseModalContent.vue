<template>
    <Transition v-if="to === 'COMPONENT'" name="modal-outer">
        <div style="transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); height: calc(100% - 55px);" v-show="openModal" class="fixed bg-black bg-opacity-20 top-[55px] left-[280px] flex justify-center items-center z-[1000] modal overflow-auto" @click="closeOutside">
            <Transition name="modal-inner">
                <div v-if="openModal" class="bg-transparent flex justify-center items-center w-full max-w-[95%] max-h-[90%] h-full rounded-md modal-content">
                    <slot />
                </div>
            </Transition>
        </div>
    </Transition>
    <Teleport v-if="to === 'BODY' || to === 'body'" to="body">
        <Transition name="modal-outer">
            <div style="transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);" v-show="openModal" class="fixed bg-black h-full w-full bg-opacity-20 top-0 left-0 flex justify-center items-center z-[9999] modal-content" @click="closeOutside">
                <Transition name="modal-inner">
                    <div v-if="openModal" class="bg-transparent flex justify-center items-center w-full max-w-[95%] max-h-[90%] h-full rounded-md modal-content">
                        <slot />
                    </div>
                </Transition>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup>

const closeOutside = (click) => {
    if(props.enableCloseOutside){
        if (click.target.classList.contains('modal-content') || click.target.classList.contains('modal')) {
            emit('close-modal');
        }
    }  
}  

const emit = defineEmits(['close-modal']);

const props = defineProps ({
    openModal: {
        type: Boolean,
        default: false,
    },
    enableCloseOutside: {
        type: Boolean,
        default: true
    },
    to: {
        type: String,
        default: "BODY" // COMPONENT | BODY
    }
})
</script>

<style scoped>
.modal-outer-enter-active {
    transition: opacity .3s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.modal-outer-leave-active {
    transition: opacity .3s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.modal-outer-enter-from,
.modal-outer-leave-to {
    opacity: 0;
}

.modal-inner-enter-active{
    transition: all .3s cubic-bezier(0.075, 0.82, 0.165, 1) .15s;
}
.modal-inner-leave-active {
    transition: opacity .3s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.modal-inner-enter-from{
    opacity: 0;
    transform: scale(0.8);
}
.modal-inner-leave-to {
    opacity: 0;
    transform: scale(0.8);
}
</style>
<template>
    <section class="">

        <div class="bg-white rounded-lg py-4 px-5">
            <div class="flex justify-between items-center">
                <div>
                    <h2 class="text-gray-500 font-bold text-2xl">Auditoria de Segurança | Departamento de IT</h2>
                    <div class="flex items-center gap-x-6">
                        <div class="flex items-center gap-x-1">
                            <i class="bi bi-person text-[1.1rem] text-blue-400"></i>
                            <span class="text-gray-500 font-normal">Jezael António</span>
                        </div>
                        <div class="flex items-center gap-x-1">
                            <i class="bi bi-clock text-[1.1rem] text-blue-400"></i>
                            <span class="text-gray-500 font-normal">28 Mar 2024</span>
                        </div>
                        <div class="flex items-center gap-x-1">
                            <i class="bi bi-pin text-[1.1rem] text-blue-400"></i>
                            <span class="text-gray-500 font-normal">Departamento de IT</span>
                        </div>
                    </div>
                </div>
                <button
                    class="bg-gray-50 text-gray-500 flex first-letter:flex items-center justify-center w-1/2 px-4 py-2 text-sm tracking-wide  transition-colors duration-200 rounded-md shrink-0 sm:w-auto gap-x-2 hover:bg-gray-100"
                    @click="$emit('open_update_dialog')">
                    <i class="bi bi-pencil text-[1rem]"></i> 
                    <span class="sr-only">Atualizar</span>
                </button>
            </div>

            <hr class="border-slate-300 my-3" />

            <div class="audit-text-info mt-5">
                <div class="description mb-2">
                    <h3 class="font-semibold uppercase">Descrição</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit esse quaerat veniam
                        vel
                        perspiciatis at exercitationem quasi iusto qui ducimus dolor beatae eligendi dolorem,
                        earum
                        est
                        repellendus consectetur animi alias. Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit.
                        Numquam illo veritatis eos et corporis quas voluptatem facere adipisci doloremque,
                        doloribus
                        aliquam explicabo aspernatur odit. Voluptatem veniam reiciendis laborum quaerat
                        pariatur!
                    </p>
                </div>
            </div>
        </div>

    </section>
</template>

<script setup>

</script>
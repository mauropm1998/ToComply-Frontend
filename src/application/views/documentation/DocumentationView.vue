<template>
    <main class="container mx-auto mt-8">
        <h1 class="font-bold text-xl">Documentação</h1>

        <nav class="flex" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li class="inline-flex items-center">
                    <RouterLink :to="{ name: 'dashboard' }"
                        class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                        </svg>
                        Painel
                    </RouterLink>
                </li>
                <li aria-current="page">
                    <div class="flex items-center">
                        <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 9 4-4-4-4" />
                        </svg>
                        <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                            Documentação</span>
                    </div>
                </li>
            </ol>
        </nav>

        <div class="mt-5 md:flex md:items-center md:justify-between">
            <button @click="showDialogNewDocumentation"
                class="btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="font-semibold">Nova Documentação</span>
            </button>

            <div class="flex gap-x-3 relative">
                <button class="text-sm btn-light w-[155px]" @click="toggleDropdown">
                    {{ documentationsStatus }} <i class="bi bi-chevron-down"></i>
                </button>

                <Transition name="dropdown" mode="out-in">
                    <div v-if="open_dropdown"
                        class="absolute dropdown bg-white shadow-xl py-1 top-[45px] left-0 z-[2] rounded-lg w-[155px]">
                        <ul class="flex flex-col">
                            <li class="px-4 text-sm cursor-pointer hover:bg-blue-50 py-3"
                                @click="setDocumentationsStatus('ALL')">
                                Todos os estados</li>
                            <hr class="border-slate-300 my-0" />
                            <li class="px-4 text-sm cursor-pointer hover:bg-blue-50 py-3"
                                @click="setDocumentationsStatus('APPROVED')">
                                Aprovados</li>
                            <hr class="border-slate-300 my-0" />
                            <li class="px-4 text-sm cursor-pointer hover:bg-blue-50 py-3"
                                @click="setDocumentationsStatus('NOT_APPROVED')">
                                Não aprovados</li>
                            <hr class="border-slate-300 my-0" />
                            <li @click="setDocumentationsStatus('PENDENT')"
                                class="px-4 text-sm cursor-pointer hover:bg-blue-50 py-3">Pendente
                            </li>
                        </ul>
                    </div>
                </Transition>

                <div class="-z-0 relative flex items-center">
                    <span class="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </span>

                    <input v-model="searchBy" type="text" placeholder="Procurar por nome..."
                        @input="getdocumentationsByName"
                        class="block w-[250px] py-1.5 pr-5 text-gray-700 bg-white border border-gray-400/70 rounded-lg placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
                </div>
            </div>
        </div>

        <div class="flex flex-col mt-8">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div class="overflow-hidden pb-20">

                        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead class="bg-gray-50 dark:bg-gray-800">
                                <tr>
                                    <th
                                        class="py-3.5 px-4 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        <div class="flex items-center gap-x-3">
                                            <input @change="onChangeSelectedAllDocumentations"
                                                v-model="selected_all_documentations" type="checkbox"
                                                class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700">
                                            <button @click="changeOrderId()"
                                                class="flex items-center w-full gap-x-3 focus:outline-none">
                                                <span>Nº</span>
                                                <i v-if="order_id" class="bi bi-sort-numeric-down h-5 text-[1.2rem]"></i>
                                                <i v-if="!order_id"
                                                    class="bi bi-sort-numeric-down-alt h-5 text-[1.2rem]"></i>
                                            </button>
                                        </div>
                                    </th>
                                    <th scope="col"
                                        class="py-3.5 px-4 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        <button class="flex items-center gap-x-3 focus:outline-none">
                                            <span>Título</span>

                                            <svg class="h-3" viewBox="0 0 10 11" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
                                                    fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                                <path
                                                    d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
                                                    fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                                <path
                                                    d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
                                                    fill="currentColor" stroke="currentColor" stroke-width="0.3" />
                                            </svg>
                                        </button>
                                    </th>
                                    <th scope="col"
                                        class="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        Categoria
                                    </th>

                                    <th scope="col"
                                        class="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        Responsável
                                    </th>

                                    <th scope="col"
                                        class="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        Validade
                                    </th>

                                    <th scope="col"
                                        class="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        Estado
                                    </th>

                                    <th scope="col">
                                        <span class="sr-only">Opções</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody
                                class="bg-white divide-y divide-gray-200 text-gray-700 dark:divide-gray-700 dark:bg-gray-900">
                                <tr>
                                    <td
                                        class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                        <div class="inline-flex items-center gap-x-3">
                                            <input id="complaint.id" @change="onChangeSelectdocumentation"
                                                :checked="selected_all_documentations" type="checkbox"
                                                class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700">
                                            <span># 12</span>
                                        </div>
                                    </td>
                                    <td class="px-4 py-4 text-sm font-normal whitespace-nowrap table-long-text">
                                        Um documento qualquer
                                    </td>
                                    <td class="px-4 py-4 text-sm font-normal whitespace-nowrap">
                                        Higiene e Segurança
                                    </td>
                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        Naor de Almeida
                                    </td>
                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        26 Abril 2025
                                    </td>

                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        <DocumentStatus status="NOT_APPROVED" />
                                    </td>

                                    <td class="px-4 py-4 text-sm whitespace-nowrap relative">
                                        <BaseDropdownOptions :options="['DELETE', 'PREVIEW']"
                                            @preview="showDialogUpdateDocumentation(1)" @delete="showDialogDelete(1)" />
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                        <div class="inline-flex items-center gap-x-3">
                                            <input id="complaint.id" @change="onChangeSelectdocumentation"
                                                :checked="selected_all_documentations" type="checkbox"
                                                class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700">
                                            <span># 13</span>
                                        </div>
                                    </td>
                                    <td class="px-4 py-4 text-sm font-normal whitespace-nowrap table-long-text">
                                        Procedimento de Segurança
                                    </td>
                                    <td class="px-4 py-4 text-sm font-normal whitespace-nowrap">
                                        Normas e Procedimentos
                                    </td>
                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        Naor de Almeida
                                    </td>
                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        11 Março 2024
                                    </td>

                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        <DocumentStatus status="PENDENT" />
                                    </td>

                                    <td class="px-4 py-4 text-sm whitespace-nowrap relative">
                                        <BaseDropdownOptions :options="['DELETE', 'PREVIEW']"
                                            @preview="showDialogUpdateDocumentation(1)" @delete="showDialogDelete(1)" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div class="my-6 sm:flex sm:items-center sm:justify-between ">
            <div class="text-sm text-gray-500 dark:text-gray-400">
                Página <span class="font-Documentaçãol text-gray-700 dark:text-gray-100">1 de 10</span>
            </div>

            <div class="flex items-center mt-4 gap-x-4 sm:mt-0">
                <a href="#"
                    class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>

                    <span>
                        Anterior
                    </span>
                </a>

                <a href="#"
                    class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                    <span>
                        Próximo
                    </span>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </a>
            </div>
        </div>
    </main>

    <BaseModalDialog @close-modal="closeModalAlertDelete" @yes="axiosDeleteDocumentation" @no="closeModalAlertDelete"
        :open-modal="open_modal_delete" :enable-close-outside="true" title="Eliminar Documentação" type="DANGER"
        buttons="YES_NO">
        Você está prestes a eliminar esta<strong> Documentação.</strong> Deseja realmente
        prosseguir? *Essa operação não pode ser desfeita.
    </BaseModalDialog>

    <BaseModalContent @close-modal="closeModalAlertNewDocumentation" :open-modal="open_modal_new_documentation"
        :enable-close-outside="false">

        <div class="relative max-w-[800px] w-full">
            <div class="bg-white w-full rounded-t-lg h-[80vh] overflow-hidden">
                <div class="bg-gray-50 border-b pb-2">
                <button @click="closeModalAlertNewDocumentation"
                    class="absolute -top-3 -right-3 flex items-center justify-center w-1/2 p-2.5 text-sm tracking-wide transition-colors duration-200 bg-gray-50 border shadow-sm rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-gray-100">
                    <i class="bi bi-x-lg text-[1rem]"></i>
                </button>
                <div class="text-center pt-4 pb-2 px-8">
                    <h2 class="font-semibold text-2xl text-gray-500">Documentação</h2>
                    <span class="text-gray-400">Armazene, versione e aprove documentos facilmente.</span>
                </div>
                </div>

                <div class="h-[68vh] overflow-auto beauty-scrollbar px-6">
                    <FormDocumentation @processing="stop" @success="stop" @error="stop" @success-update="stop"
                        @error-update="stop" @close-modal="closeModalAlertNewDocumentation" />
                </div>
            </div>

            <div class="bg-gray-50 border-t rounded-b-lg p-4">
                <div class="flex items-center justify-end gap-x-3">
                    <button
                        class="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span class="font-semibold">Salvar Documentação</span>
                    </button>
                    <button type="button" @click="closeModalAlertNewDocumentation"
                        class="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide transition-colors duration-200 bg-gray-200 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-gray-300">
                        <i class="bi bi-x-circle"></i>
                        <span class="font-semibold">Cancelar</span>
                    </button>
                </div>
            </div>
        </div>

    </BaseModalContent>

    <BaseModalContent @close-modal="closeModalAlertUpdateDocumentation" :open-modal="open_modal_update_documentation"
        :enable-close-outside="false">

        <div class="relative max-w-[800px] w-full">
            <div class="bg-white pt-4 w-full rounded-t-lg h-[85vh] overflow-hidden">
                <button @click="closeModalAlertUpdateDocumentation"
                    class="absolute -top-3 -right-3 flex items-center justify-center w-1/2 p-2.5 text-sm tracking-wide transition-colors duration-200 bg-gray-50 border shadow-sm rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-gray-100">
                    <i class="bi bi-x-lg text-[1rem]"></i>
                </button>
                <div class="flex items-center justify-between px-8 pb-3 shadow-md">
                    <div>
                        <h2 class="font-semibold text-2xl text-gray-500">Documentação de Procedimentos DTI</h2>
                        <span class="text-gray-400">Procedimentos Organizacionais</span>
                    </div>

                    <button type="button" @click="closeModalAlertNewDocumentation"
                        class="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide transition-colors duration-200 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-gray-100">
                        <i class="bi bi-pencil"></i>
                        <span class="font-semibold">Editar</span>
                    </button>
                </div>

                <div class="h-[70vh] px-8 overflow-auto beauty-scrollbar">

                    <div class="flex items-center justify-between rounded-lg p-3 border bg-gray-50 border-gray-200 mt-4">
                        <div class="flex items-center gap-x-3">
                            <i class="bi bi-file-earmark-pdf-fill text-[1.9rem] text-red-600"></i>
                            <div>
                                <p class="text-gray-500 text-lg font-medium">
                                    Documento_de_verificacao.pdf
                                </p>
                                <div class="text-gray-600">
                                    234.7KB | <span class="text-blue-600 font-medium">Mauro Mateus</span> | 22 Abr 2024
                                </div>
                            </div>
                        </div>

                        <BaseDropdownOptions :options="['DELETE', 'DOWNLOAD']" @download="showDialogUpdateDocumentation(1)"
                            @delete="showDialogDelete(1)" />
                    </div>

                    <ul class="mt-5 text-gray-600">
                        <li class="flex border-b pt-4 pb-5 items-start gap-x-4">
                            <div class="w-[35%] flex items-center gap-x-3">
                                <i class="bi bi-check-circle text-[1.3rem]"></i>
                                <h3 class="font-semibold">Objectivos da Documentação</h3>
                            </div>
                            <p class="w-[65%] m-0">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio aperiam mollitia eveniet
                                quae
                                veniam excepturi natus accusantium dolore, officia nostrum alias perferendis exercitationem,
                                et
                                odit recusandae soluta, consectetur praesentium vero.
                            </p>
                        </li>
                        <li class="flex border-b pt-4 pb-5 items-start gap-x-4">
                            <div class="w-[35%] flex items-center gap-x-3">
                                <i class="bi bi-card-checklist text-[1.3rem]"></i>
                                <h3 class="font-semibold">Aplicabilidade (Âmbito)</h3>
                            </div>
                            <p class="w-[65%] m-0">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio aperiam mollitia eveniet
                                quae
                                veniam excepturi natus accusantium dolore, officia nostrum alias perferendis exercitationem,
                                et
                                odit recusandae soluta, consectetur praesentium vero.
                            </p>
                        </li>
                        <li class="flex border-b pt-4 pb-5 items-start gap-x-4">
                            <div class="w-[35%] flex items-center gap-x-3">
                                <i class="bi bi-book text-[1.3rem]"></i>
                                <h3 class="font-semibold">Procedimentos</h3>
                            </div>
                            <ul class="w-[65%] list-disc ps-4 text-gray-600">
                                <li class="">Procedimendo labore voluptatibus incidunt!</li>
                                <li class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                                <li class="">Harum inventore saepe veritatis perspiciatis repellendus quis.</li>
                                <li class="">Est architecto voluptatem adipisci optio hic amet possimus, molestias porro at
                                    iusto.</li>
                            </ul>
                        </li>
                        <li class="flex border-b pt-4 pb-5 items-start gap-x-4">
                            <div class="w-[35%] flex items-center gap-x-3">
                                <i class="bi bi-clipboard-check text-[1.3rem]"></i>
                                <h3 class="font-semibold">Responsabilidades</h3>
                            </div>
                            <ul class="w-[65%] list-disc ps-4 text-gray-600">
                                <li class="">Procedimendo labore voluptatibus incidunt!</li>
                                <li class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                                <li class="">Harum inventore saepe veritatis perspiciatis repellendus quis.</li>
                                <li class="">Est architecto voluptatem adipisci optio hic amet possimus, molestias porro at
                                    iusto.</li>
                            </ul>
                        </li>
                        <li class="flex border-b pt-4 pb-5 items-start gap-x-4">
                            <div class="w-[35%] flex items-center gap-x-3">
                                <i class="bi bi-link-45deg text-[1.4rem]"></i>
                                <h3 class="font-semibold">Referências</h3>
                            </div>
                            <ul class="w-[65%] list-disc ps-4 text-gray-600">
                                <li class="">www.akringo.com</li>
                                <li class="">Livro: Procedimentos Essenciais - Mauro Almeida </li>
                                <li class="">Harum inventore saepe veritatis perspiciatis repellendus quis.</li>
                                <li class="">Est architecto voluptatem adipisci optio hic amet possimus, molestias porro at
                                    iusto.</li>
                            </ul>
                        </li>
                    </ul>

                    <div class="grid grid-cols-2 gap-x-5 my-5">
                        <div>
                            <h3 class="font-medium mb-4">Responsável pela elaboração</h3>
                            <div class="flex items-center gap-x-3 rounded-lg p-4 bg-blue-50">
                                <div>
                                    <h3 class="font-medium text-gray-600 leading-none ">Naor de Almeida</h3>
                                    <span class="text-sm text-blue-600">Adminstrador</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 class="font-medium mb-4">Responsável pela aprovação</h3>
                            <div class="flex items-center gap-x-3 rounded-lg p-4 bg-blue-50">
                                <div>
                                    <h3 class="font-medium text-gray-600 leading-none ">Naor de Almeida</h3>
                                    <span class="text-sm text-blue-600">Adminstrador</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </BaseModalContent>

    <PageLoader :open="show_deletation_process" text="Processando..." />
</template>

<script setup>

import { onMounted, ref } from 'vue';
import BaseDropdownOptions from "@/components/BaseDropdownOptions.vue";
import BaseModalDialog from "@/components/BaseModalDialog.vue";
import BaseModalContent from "@/components/BaseModalContent.vue";
import PageLoader from "@/components/PageLoader.vue";
import DocumentStatus from "@/components/documentations/DocumentStatus.vue";
import FormDocumentation from "@/components/documentations/FormDocumentation.vue";

const searchBy = ref("");
const open_dropdown = ref(false);
const id_documentation_to_delete = ref(false);
const show_deletation_process = ref(false);
const open_modal_delete = ref(false);
const open_modal_new_documentation = ref(false);
const open_modal_update_documentation = ref(false);
const selected_all_documentations = ref(false);
const at_least_one_documentation_selected = ref(null);
const count_selected_documentations = ref(null);
const documentationsStatus = ref('Todos os estados');

const list_documentation_to_delete = ref([]);
const documentationsData = ref([]);


const setDocumentationsStatus = (state) => {
    searchBy.value = '';

    if (state === 'APPROVED') {
        documentationsStatus.value = 'Aprovados';
    } else if (state === 'NOT_APPROVED') {
        documentationsStatus.value = 'Não aprovados';
    } else if (state === 'PENDENT') {
        documentationsStatus.value = 'Pendente';
    } else {
        documentationsStatus.value = 'Todos os estados';
    }

    if (state === 'ALL') {
        //getOportunityActivities();
    } else {
        //getOportunityActivitiesByStatus(state);
    }

};

const onChangeSelectedAllDocumentations = (event) => {
    if (event.target.checked) {
        count_selected_documentations.value = documentationsData.value.length;
        at_least_one_documentation_selected.value = true;

        list_documentation_to_delete.value = [];
        documentationsData.value.forEach((documentation) => {
            list_documentation_to_delete.value.push({ id: documentation.id })
        });
    }
    else {
        at_least_one_documentation_selected.value = false;
        list_documentation_to_delete.value = [];
    }
};

const onChangeSelectdocumentation = (event) => {
    if (event.target.checked) {
        count_selected_documentations.value += 1;
        list_documentation_to_delete.value.push({ id: Number.parseInt(event.target.id) })
    }
    else {
        count_selected_documentations.value -= 1;
        list_documentation_to_delete.value = list_documentation_to_delete.value.filter((obj => obj.id !== Number.parseInt(event.target.id)));
    }

    if (count_selected_documentations.value > 0) {
        if (count_selected_documentations.value === documentationsData.value.length) {
            selected_all_documentations.value = true;
        }

        at_least_one_documentation_selected.value = true;
    }
    else {
        selected_all_documentations.value = false;
        at_least_one_documentation_selected.value = false;
    }
};

const toggleDropdown = () => {
    open_dropdown.value = !open_dropdown.value;

    if (open_dropdown.value) {
        setTimeout(() => {
            document.addEventListener("click", closeDropdownOnClickOutside)
        }, 100)
    }
};

const showDialogDelete = (documentation_id) => {
    open_modal_delete.value = true;
    id_documentation_to_delete.value = documentation_id;
    document.body.style.overflow = "hidden";
};

const closeModalAlertDelete = () => {
    open_modal_delete.value = false;
    document.body.style.overflow = "auto";
};

const showDialogNewDocumentation = () => {
    open_modal_new_documentation.value = true;
    document.body.style.overflow = "hidden";
};

const closeModalAlertNewDocumentation = () => {
    open_modal_new_documentation.value = false;
    document.body.style.overflow = "auto";
};

const showDialogUpdateDocumentation = () => {
    open_modal_update_documentation.value = true;
    document.body.style.overflow = "hidden";
};

const closeModalAlertUpdateDocumentation = () => {
    open_modal_update_documentation.value = false;
    document.body.style.overflow = "auto";
};

const closeDropdownOnClickOutside = (event) => {
    if (!event.target.classList.contains("dropdown")) {
        open_dropdown.value = false;
        document.removeEventListener("click", closeDropdownOnClickOutside);
    }
};


onMounted(() => {

    document.title = "Comply 360 | Documentação";

});

</script>

<style scoped>
</style>
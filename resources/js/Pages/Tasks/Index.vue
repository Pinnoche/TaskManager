<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link, router, usePage } from '@inertiajs/vue3';
import { onMounted, defineProps, ref, onUpdated } from 'vue';

const page = usePage();
const props = defineProps({
    tasks: {
        type: Object,
        required: true
    },
    pageName: {
        type: String,
        default: ''
    },
    messages: {
        type: Object
    },
    dM: {
        type: String
    }
});
const showMessage = ref(false);
const showDm = ref(false);
onMounted( ()=> {
    console.log(page);
    if(props.messages){
        showMessage.value = true;
        setTimeout( () => {
            showMessage.value = false;
        }, 3000);
    }
    
console.log(props.messages);
});
onUpdated( () => {
    if(props.dM) {
        showDm.value = true;
        setTimeout( () => {
            showDm.value = false;
        }, 3000);
    }
})

const deleteData = (taskId) => {
    router.delete(route('tasks.destroy', taskId));
}

</script>

<template>
    <Head :title="pageName" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">{{ pageName }}</h2>
        </template>

        <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div v-for="(task, index) in tasks.data" :key="index" class="bg-white shadow-md rounded-lg p-6 mb-4 border border-gray-200">
                <div class="mb-2">
                    <h3 class="text-lg font-semibold text-gray-800">{{ task.title }}</h3>
                    <p class="text-sm text-gray-600">By {{ task.author }} on {{ task.created_at }}</p>
                </div>
                <p class="text-gray-700 mb-4">{{ task.description }}</p>
                <div v-if="showMessage && messages.taskId === task.id" class="text-sm text-green-500 font-medium mt-2">
                    {{ messages.message }}
                </div>
                <div class="flex justify-end space-x-4">
                    <Link :href="route('tasks.edit', {task: task.id})" class="text-blue-600 hover:text-blue-900 font-medium">
                        Edit
                    </Link>
                    <p class="text-red-600 hover:text-red-800 font-medium cursor-pointer" @click="deleteData(task.id)">
                        Delete
                    </p>
                </div>
            </div>
        </div>

        <div class="max-w-7xl mx-auto sm:px-6 lg:px- flex justify-between">
            <Link :href="route('tasks.create')">
                <button class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                    Create a New Task
                </button>
            </Link>
            <div v-if="showDm" class="text-red-500 text-base font-bold mt-2">
                {{ dM }}
            </div>
        </div>
    </div>
    </AuthenticatedLayout>
</template>

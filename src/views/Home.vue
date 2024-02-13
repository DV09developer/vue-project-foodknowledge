<template>
    <div>
        <div>
            <Meals :meals="meals" />
        </div>
    </div>
</template>

<script setup>
import {ref,computed, onMounted} from 'vue';
import store from '../store';
const meals = computed(() => store.state.meals);
const ingredients = ref([])
onMounted(async() => {
    const response =await axiosClient.get('/list.php?i=list')
    ingredients.value = response.data;
})
</script>
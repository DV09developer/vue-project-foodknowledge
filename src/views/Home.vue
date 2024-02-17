<template>
    <div id="Disclaimer">
        <h4>
            This project is only for Practise purposes.
        </h4>
    </div>
    <div class="mealblock">
    <div class="mealdetail" v-for="meal of meals" :key="meal.idMeal">
        <img class="mealphoto" :src="meal.strMealThumb" alt="MealImage">
        <h3>{{ meal.strMeal }}</h3>
        <h5>Country : {{ meal.strArea }}</h5>
        <div>
            <a  :href="meal.strYoutube" target="_blank">More about meal</a>
        </div>
    </div>
    </div>
</template>

<script setup>
import store from '@/store';
import { computed , onMounted  } from 'vue';

const meals = computed(() => store.state.randomMeals)

onMounted( () => {
    store.dispatch('randomMeals');
});
</script>

<style>

h4{
    font-weight: bolder;
    font-size: larger;
    text-align: center;
    background-color: rgb(238, 225, 225);
    padding: 20px;
}
</style>
<template>
    <div>
        Meal-List By Name
        <input type="text" placeholder="Search Meals" v-model="keyword" @change="searchMeals">
    </div>
    <div>
        <div v-for="meal of meals" :key="meal.idMeal">
            <img :src="meal.strMealThumb" alt="MealImage">
            <h3>{{ meal.strMeal }}</h3>
            <h5>{{ meal.strArea }}</h5>
            <div>
                <a  :href="meal.strYoutube" target="_blank">More about meal</a>
            </div>
        </div>
    </div>
</template>

<script setup>
import store from '@/store';
import { computed , ref} from 'vue';
const keyword = ref('');

const meals = computed(() => store.state.searchedMeals)
function searchMeals() {
    store.dispatch('searchMeals', keyword.value);
}

</script>
<template>
    <div class="header">
        <!-- <label >Enter Your Meal:</label> -->
        <input type="text" placeholder="Search Meals" v-model="keyword" @change="searchMeals">
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
    <div v-if="meals == null">
        <h4>
            This search is not have meal data.
        </h4>
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

<style scoped>
.header {
    display: flex;
    align-items: center;
    background-color: rgb(238, 225, 225);
}
input{
    margin: 15px auto;
    width: 400px;
    height: 40px;
    align-items: center;
    border-radius: 4px;
}
</style>
<template>
    <!-- <div>Meal-List By Letter</div> -->
    <div class="alletters">
        <router-link class="letterdata" 
            :to="{name:'byLetter' , params:{letter}}" 
            v-for="letter of letters" :key="letter" @change="meals">
            {{ letter }}
        </router-link>
    </div>
    <!-- <p>{{ meals }}</p> -->
    <div class="mealblock">
        <div class="mealdetail" v-for="meal of meals" :key="meal.idMeal" >
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
    <!-- <Meals :meals="meals" /> -->
</template>

<script setup>
import { onMounted , computed, watch} from "vue";
import { useRoute } from "vue-router";
import store from "../store";

const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealwithletters);

watch(route, () => {
    store.dispatch("searchletter", route.params.letter);
})

onMounted( () => {
  store.dispatch("searchletter", route.params.letter);
});

</script>

<style scoped>
.alletters{
    padding: 4px;
    width: auto;
    background-color: rgb(238, 225, 225);
    text-align: center;
}
.letterdata{
    text-decoration: none;
    padding: 6px;
    margin: 2px;
    color: black;
}
</style>
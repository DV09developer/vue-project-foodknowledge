<template>
    <div>Meal-List By Letter</div>
    <div>
        <router-link :to="{name:'byLetter' , params:{letter}}" v-for="letter of letters" :key="letter">
            {{ letter }}
        </router-link>
    </div>
    <!-- <div>
        <Router-Link v-for="meals of letters" :key="meals.idMeal">
            <img :src="meals.strMealThumb" alt="MealImage">
            <h3>{{ meals.strMeal }}</h3>
            <h5>{{ meals.strArea }}</h5>
            <div>
                <a  :href="letter.strYoutube" target="_blank">More about meal</a>
            </div>
        </Router-Link>
    </div> -->
</template>

<script setup>
// import { computed } from "@vue/reactivity";
// import { onMounted, watch } from "vue";
// import { useRoute } from "vue-router";
// import store from "../store";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
// const meals = computed(() => store.state.mealsByLetter);

// watch(route, () => {
//   store.dispatch("setletterMeals", route.params.letter);
// });

// onMounted(() => {
//   store.dispatch("setletterMeals", route.params.letter);
// });
// </script>
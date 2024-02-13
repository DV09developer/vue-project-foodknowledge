<template>
    <header>
      <div>
        <router-link class="home" :to="{name: 'home'}">
          Home
        </router-link>
      </div>

      <div class="menu">
        <router-link class="link" :to="{name:'byname'}">
          Search Meals
        </router-link>

        <router-link class="link" :to="{name:'byLetter'}">
          Meals By Letter
        </router-link>

        <router-link class="link" :to="{name:'byIngredient'}">
          Meals By Ingredients
        </router-link>
      </div>
    </header>
</template>

<style scoped>
header{
  height: 60px;
  background-color: #ff2d2dd6;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 20px 10px; */
}

.home{
  margin-left: 40px;
}

.menu{
  display: flex;
  column-gap: 20px;
  flex-wrap: wrap;
  width: 35%;
}
.link,.home 
{
  color: rgb(246, 246, 246);
  text-decoration: none;
  transition: color 0.7s;
}
.link:hover , .home:hover{
  color: cyan;
}
</style>
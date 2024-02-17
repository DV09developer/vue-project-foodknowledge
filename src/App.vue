<script setup>
</script>

<template>
  <RouterView/>
</template>

<style >
*{
  margin: 0%;
  padding: 0%;
}
.mealblock{ 
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.mealdetail{
    width: 300px;
    margin: 25px;
    border-radius: 12px;
    background-color: rgb(239, 239, 239);
    text-align: center;
    box-shadow: 0 15px 40px grey;
    padding: 10px;
}
.mealphoto{
    margin: 4%;
    margin-top: 4.5%;
    width: 90%;
    /* padding: 5px; */
    border-radius: 6px;
}

.mealdetail div {
    margin-top: 4px;
}
.mealdetail div a{
    padding: 4px;
    border-radius: 3px;
    text-decoration: none;
    background-color: #ff2d2dd6;
    color: rgb(246, 246, 246);
}
</style>
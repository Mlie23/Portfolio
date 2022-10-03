
<template>
<div class="bg-black h-screen">
<div>
<img class="w-screen h-1/2" alt="Homepage" src="../assets/homepage.jpg"/>
</div> 
<p class="text-white">Message is: {{text}} </p>
<!-- <h1 class="text-white">{{loading}}</h1> -->
<img  v-if="loading" alt="Vue logo" src="../assets/Loading.svg"/>
<img  class ="bg-black" v-if="done" alt="Vue logo" src="../assets/done.svg"/>

  <input class="w-1/3" v-model="text" placeholder="name"/>
    <!-- <input class="w-1/2" v-model="text" placeholder="name"/> -->
  <h2 v-if="done">Successful</h2>
  <div class="flex">
  <button type="button" v-if="!loading" @click="addData().then(addfinish)" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Submit</button>
</div>
  </div>
</template>
<script setup>
/* eslint-disable */
import {db} from "../main";
import{ref} from 'vue';
// import loadingsvg from '../assets/Loading.svg';
const text = ref("");
const loading = ref(false);
const done = ref(false);
const state = ref(0);


 function addData()
{
    db.collection("Authentication").add({
  name: text.value,
  Done: true,
  });
      return new Promise(function(resolve) {
        setTimeout(function() {
            loading.value = !loading.value;
            resolve();
        }, 2000);
        loading.value = !loading.value;
    });
    
}

 function addfinish () {
    return new Promise(function(resolve) {
        setTimeout(function() {
            done.value = !done.value;
            resolve();
        }, 2000);
        done.value = !done.value;
    });
}


//  function addData()
// {
//     db.collection("Authentication").doc("username").set({
//   name: text.value,
//   Done: true,
//   });
//       return new Promise(function(resolve) {
//         setTimeout(function() {
//             loading.value = !loading.value;
//             resolve();
//         }, 2000);
//         loading.value = !loading.value;
//     });
    
// }
</script>
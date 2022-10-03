

<template>
  <!-- <Header> -->
  <!-- <img alt="Vue logo" src="./assets/neural.jpg"> -->
  <div class="flex h-screen flex-col">
    <h1 v-if="userstate.usercred.isauthenticated">
      <router-link to="/login">Login</router-link>
      <router-link to="/About">About</router-link>
    </h1>
    <Suspense>
      <main class="flex-grow">
        <router-view></router-view>
      </main>
      <!-- component matched by the route will render here -->
    </Suspense>
    <!-- <Footer> -->
  </div>
</template>

<script setup>
/* eslint-disable */
import NoteView from "./components/NoteView.vue";
import AddNote from "./components/AddNote.vue";
import HelloWorld from "./components/HelloWorld.vue";
import userStore from "./stores/user.js"
import {storeToRefs} from "pinia";
const userstate = userStore();

storeToRefs(userstate);





</script>




<template>

  <!-- <Header> -->
  <!-- <img alt="Vue logo" src="./assets/neural.jpg"> -->
  <div class="flex h-screen flex-col">
    <!-- <v-if="userstate.usercred.isauthenticated"> -->
    <NavBar  />
    <!-- <h1 v-if="userstate.usercred.isauthenticated">
      <router-link to="/login">Login</router-link>
      <router-link to="/About">About</router-link>
    </h1> -->
    <!-- <h1>{{ userstate.usercred.isauthenticated }}</h1> -->
    <Suspense>
      <main class="flex-grow">
        <router-view></router-view>
      </main>
    </Suspense>
    <!-- <Footer> -->
  </div>
</template>

<script setup>
/* eslint-disable */
import NoteView from "./components/NoteView.vue";
import AddNote from "./components/AddNote.vue";
import HelloWorld from "./components/HelloWorld.vue";
import NavBar from "./components/NavBar.vue";
import userStore from "./stores/user.js";
import { storeToRefs } from "pinia";
import userinfo from "./stores/userinfo.js";
import { getAuth, signOut } from "firebase/auth";
const userstate = userStore();
storeToRefs(userstate);
const userInformation = userinfo();
storeToRefs(userInformation);
var timeout;
const auth = getAuth();

function refresh() {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    console.log(timeout);
    console.log("time's up");

    console.log(userstate.usercred.isauthenticated);
    console.log("done");

    signOut(auth)
      .then(() => {
        userInformation.logout();
        userstate.logout();
        console.log("Signed out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  }, 60*10 * 1000);
}
if(userstate.usercred.isauthenticated)
{

  refresh();
};

document.addEventListener("click", refresh);
document.addEventListener("mousedown", refresh);
document.addEventListener("mousemove", refresh);
document.addEventListener("touchstart", refresh);
document.addEventListener("scroll", refresh);
document.addEventListener("keydown", refresh);

</script>


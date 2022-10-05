<template>
<h1>Hello</h1>
    <input v-model="text" />
</template>



<script setup>
import userStore from "../stores/user";
import { storeToRefs } from "pinia";
import { router } from "../main";
const userstate = userStore();
storeToRefs(userstate);

if (!userstate.usercred.isauthenticated)
{
  router.push({ path: "/login" });
}


</script>
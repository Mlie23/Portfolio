

<template>
    <h1 class="text-center text-red-500">Apakabar?</h1>
   <div v-for="todo in todos" :key="todo.id">
     {{todo.content}}, {{todo.Done}}
   </div>
   <button @click="addData">Press</button>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
</template>

<script setup>
/* eslint-disable */
import {db} from "../main";
import{ref} from 'vue';
import userStore from "../stores/user";
import { storeToRefs } from "pinia";
import { router } from "../main";
const userstate = userStore();
storeToRefs(userstate);

if (!userstate.usercred.isauthenticated)
{
  router.push({ path: "/login" });
}

var todos = ref([]);
todos.value =  await db.collection('notes')
  .get()
  .then(querySnapshot => {
    const documents = querySnapshot.docs.map(doc => doc.data())
    // do something with documents
    console.log(documents);
    return documents;
    // console.log (documents);
  })

function addData()
{
  db.collection('notes').add({
  content: "It is cold here",
  Done: true,
  });
}

</script>

<script>
export default {
  computed: {
    username() {
      // We will see what `params` is shortly
      return this.$route.params.username
    },
  },
  methods: {
    goToDashboard() {
      if (isAuthenticated) {
        this.$router.push('/dashboard')
      } else {
        this.$router.push('/login')
      }
    },
  },
}
</script>


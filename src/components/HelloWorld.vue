

<template>
  <h1 class="text-center text-red-500">Apakabar?</h1>
  <div v-for="todo in todos" :key="todo.id">
    {{ todo.content }}, {{ todo.Done }}
  </div>
  <h1>{{ usernote }}</h1>
  <h1>{{ userstate }}</h1>
  <h1>{{ usernote.userinfo.notes }}</h1>
  <h1>{{ typeof usernote.userinfo.notes }}</h1>
  <button @click="writeNotes">Press</button>
  <p>
    For a guide and recipes on how to configure / customize this project,<br />
    check out the
    <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
      >vue-cli documentation</a
    >.
  </p>

  <button @click="retrieveData">Click here</button>
</template>

<script setup>
/* eslint-disable */
import { db } from "../main";
import { ref } from "vue";
import userStore from "../stores/user";
import { storeToRefs } from "pinia";
import { router } from "../main";
import userinfo from "../stores/userinfo";
const usernote = userinfo();
storeToRefs(usernote);
const userstate = userStore();
storeToRefs(userstate);

if (!userstate.usercred.isauthenticated) {
  router.push({ path: "/login" });
}

var todos = ref([]);
todos.value = await db
  .collection("notes")
  .get()
  .then((querySnapshot) => {
    const documents = querySnapshot.docs.map((doc) => doc.data());
    // do something with documents
    console.log(documents);
    return documents;
    // console.log (documents);
  });

// function setQuizlet()
// {
//     db.collection("users").document(userstate.usercred.uid)
//     .collection("messages").document("message1").set()
//     {
//       name="what";
//     }

// }
function writeNotes()
{
db.collection("users").doc(userstate.usercred.uid).collection("notes").doc("Bio exam 1").set(
  {
    message:"It is really cold in here"
  }
)
};
function retrieveData() {
  db.collection("users")
    .doc(userstate.usercred.uid)
    .get()
    .then((snapshot) => {
      const document = snapshot.data();
      console.log(document);
      console.log(document.name);
    });
}
function addData() {
  db.collection("notes").add({
    content: "It is cold here",
    Done: true,
  });
}
</script>





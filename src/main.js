import { createApp } from 'vue'
import App from './App.vue';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import './index.css';
// import VueRouter from 'vue-router'
import { createPinia } from 'pinia'
import { createWebHistory, createRouter } from 'vue-router';
import NoteView from './components/NoteView.vue';
import AddNote from './components/AddNote.vue';
import HelloWorld from './components/HelloWorld.vue';
import LoginView from './components/LoginView.vue';
import AboutMe from './components/AboutMe.vue';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import userStore from "./stores/user.js"
// import VueRouter from 'vue-router';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

var firebaseConfig = {
  apiKey: "AIzaSyAJ5pjmiGXRjTS7qeQTiIAqxnrzmN0r2Mo",
  authDomain: "learnvue-fdefb.firebaseapp.com",
  projectId: "learnvue-fdefb",
  storageBucket: "learnvue-fdefb.appspot.com",
  messagingSenderId: "688549364547",
  appId: "1:688549364547:web:ed608bbd15156a1cd4e5f6",
  measurementId: "G-C6VTEZ1QVJ"
};


// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();


// const routerHistory = createWebHistory();
const router = createRouter({
  history: createWebHistory(),
  routes: [
  { name:"dashboard", path: "/", component: NoteView },
  { name: "note",path: "/note", component: AddNote },
  { name: "hello", path: "/hello", component: HelloWorld },
  { name: "login", path: "/login", component: LoginView },
  { name: "about", path: "/about", component: AboutMe  }
]
})
const app = createApp(App);
// app.use(VueRouter);
// const routes = [
//   { path: "/", name:"a",component: NoteView,requiresAuth:false},
//     { name: "note",path: "/note", component: AddNote,requiresAuth:true },
//     { name: "hello", path: "/hello", component: HelloWorld,requiresAuth:true },
//     { name: "login", path: "/login", component: LoginView ,requiresAuth:true},
//     { name: "about", path: "/about", component: AboutMe,requiresAuth:true }
// ]
// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.requiresAuth);

  if (requiresAuth) next('/login')
  else next();
});
app.use(pinia);
app.use(router);
// app.use(VueRouter);

app.mount('#app');



export default router
export { auth, db, userStore ,router};
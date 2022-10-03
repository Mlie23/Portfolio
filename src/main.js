import { createApp } from 'vue'
import App from './App.vue';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import './index.css';
import { createPinia } from 'pinia'
import { createWebHistory, createRouter } from 'vue-router'
import NoteView from './components/NoteView.vue';
import AddNote from './components/AddNote.vue';
import HelloWorld from './components/HelloWorld.vue';
import LoginView from './components/LoginView.vue';
import AboutMe from './components/AboutMe.vue';
import userStore from './stores/user';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
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
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: [  {path: "/",component:NoteView},
  {path: "/note",component:AddNote},
  {path: "/hello",component:HelloWorld},
  {path: "/login",component:LoginView},
  {path: "/about",component:AboutMe}]
})
const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount('#app');
export { auth, db , userStore, router};
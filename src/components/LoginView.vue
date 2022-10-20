<template>
  <div class="h-screen w-screen overflow-hidden bg-gray-400">
    <div class="max-w-10xl">
      <div>
        <main
          class="
            mx-auto
            mt-10
            max-w-7xl
            px-4
            sm:mt-12 sm:px-6
            md:mt-16
            lg:mt-20 lg:px-8
            xl:mt-28
          "
        >
          <div class="text-center">
            <h1
              class="
                text-3xl
                font-extrabold
                tracking-tight
                text-gray-900
                sm:text-5xl
                md:text-6xl
              "
            >
              <span class="block xl:inline">Simply Notetaking</span>
            </h1>
            <p class="mt-3 text-gray-200 mx-auto md:mt-5 md:text-xl lg:mx-0">
              Hi, I am Michael Lie! Welcome to my website &#128513;
            </p>
            <p class="text-gray-200 mx-auto md:text-xl lg:mx-0">
              Please create an account and login to explore different features
              that this website offer!
            </p>
          </div>
        </main>
        <!-- Ethereum + blockchain svg -->
      </div>

      <!-- Sponsor / Partnership!!! -->
    </div>
    <div class="w-full">
      <div
        class="mt-1 flex flex-col justify-center items-center"
        @click="signup = !signup"
      >
        <div
          class="
            w-14
            h-8
            flex
            bg-gray-300
            rounded-full
            p-1
            duration-300
            ease-in-out
          "
          :class="{ 'bg-tan': signup }"
        >
          <div
            class="
              bg-red-500
              w-6
              h-6
              rounded-full
              shadow-md
              transform
              duration-300
              ease-in-out
            "
            :class="{ 'bg-green-500 translate-x-6': signup }"
          ></div>
        </div>
      </div>
      <div v-if="signup">
        <div class="bg-grey-lighter flex flex-col">
          <div
            class="
              container
              mt-1
              max-w-sm
              mx-auto
              flex-1 flex flex-col
              items-center
              justify-center
              px-2
            "
          >
            <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <h1 class="mb-8 text-3xl text-center">Sign up</h1>
              <Form :validation-schema="schema" @submit="register">
                <div>
                  <!-- <label>Name</label> -->
                  <Field
                    id="name"
                    v-model="personalInfo.name"
                    name="nameRules"
                    placeholder="Name"
                    class="block w-full rounded-lg border-2 border-box"
                  />
                  <ErrorMessage
                    class="text-red-600"
                    name="nameRules"
                  ></ErrorMessage>
                </div>
                <div>
                  <!-- <label>Email </label> -->
                  <Field
                    id="email"
                    v-model="personalInfo.email"
                    name="emailRules"
                    placeholder="Email"
                    class="mt-4 block w-full rounded-lg border-2 border-box"
                  />
                  <ErrorMessage
                    class="text-red-600"
                    name="emailRules"
                  ></ErrorMessage>
                </div>
                <div>
                  <!-- <label>Confirm Email</label> -->
                  <Field
                    id="verifyEmail"
                    v-model="personalInfo.verifyEmail"
                    name="confirmEmail"
                    placeholder="Confirm Email"
                    class="mt-4 block w-full rounded-lg border-2 border-box"
                  />
                  <ErrorMessage
                    class="text-red-600"
                    name="confirmEmail"
                  ></ErrorMessage>
                </div>
                <!-- <div>
                      <Field
                        id="Username"
                        v-model="personalInfo.username"
                        name="usernameRules"
                        placeholder="Username"
                        class="mt-4 block w-full rounded-lg border-2 border-box"
                      />
                      <ErrorMessage
                        class="text-red-600"
                        name="usernameRules"
                      ></ErrorMessage>
                    </div> -->
                <div>
                  <!-- <label>Password</label> -->
                  <Field
                    type="password"
                    id="Password"
                    v-model="personalInfo.password"
                    name="passwordRules"
                    placeholder="Password"
                    class="mt-4 block w-full rounded-lg border-2 border-box"
                  />
                  <ErrorMessage
                    class="text-red-600"
                    name="passwordRules"
                  ></ErrorMessage>
                </div>
                <div>
                  <!-- <label>Confirm Password</label> -->
                  <Field
                    type="password"
                    id="ConfirmPassword"
                    v-model="personalInfo.confirmPassword"
                    name="confirmPasswordRules"
                    placeholder="Confirm Password"
                    class="mt-4 block w-full rounded-lg border-2 border-box"
                  />
                  <ErrorMessage
                    class="text-red-600"
                    name="confirmPasswordRules"
                  ></ErrorMessage>
                </div>
                <!-- <img v-if="loading" alt="Vue logo" src="../assets/Loading.svg" />
        <img v-if="done" alt="Vue logo" src="../assets/done.svg" />
        <button
          type="button"
          v-if="!loading && !done"
          @click="addData().then(addfinish)"
          class="
            inline-block
            mt-3
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out
          "
        >
          Submit
        </button> -->
                <button
                  class="
                    inline-block
                    mt-3
                    px-6
                    py-2.5
                    bg-gray-500
                    text-white
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    rounded
                    shadow-md
                    hover:bg-blue-700 hover:shadow-lg
                    focus:bg-blue-700
                    focus:shadow-lg
                    focus:outline-none
                    focus:ring-0
                    active:bg-blue-800 active:shadow-lg
                    transition
                    duration-150
                    ease-in-out
                  "
                >
                  submit
                </button>
              </Form>
            </div>
          </div>
        </div>

        <!-- <div class="bg-grey-lighter min-h-screen flex flex-col">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name" />

                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" />

                    <button
                        type="submit"
                        class="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                    >Create Account</button>

                    <div class="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div class="text-grey-dark mt-6">
                    Already have an account? 
                    <a class="no-underline border-b border-blue text-blue" href="../login/">
                        Log in
                    </a>.
                </div>
            </div>
        </div> -->
      </div>

      <div v-else>
        <div class="bg-grey-lighter flex flex-col">
          <div
            class="
              container
              mt-1
              max-w-sm
              mx-auto
              flex-1 flex flex-col
              items-center
              justify-center
              px-2
            "
          >
            <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <h1 class="mb-8 text-3xl text-center">Login</h1>
              <div v-if="errorstate == 1">
                <div
                  class="
                    p-3
                    mb-4
                    text-sm text-red-600
                    bg-oxford
                    border-b border-red-500-300
                    rounded-lg
                    dark:bg-blue-200 dark:text-blue-800
                  "
                  role="alert"
                >
                  <span class="font-medium">Warning!</span> Wrong Password.
                  <button class="underline" @click="resetPassword">
                    Click here to reset your password
                  </button>
                </div>
              </div>

              <div v-else-if="errorstate == 3">
                <div
                  class="
                    p-3
                    mb-4
                    text-sm text-red-600
                    bg-oxford
                    border-2 border-red-500
                    rounded-lg
                    dark:bg-blue-200 dark:text-blue-800
                  "
                  role="alert"
                >
                  <span class="font-medium">Warning!</span>Reset password email
                  has been sent!
                </div>
              </div>

              <div v-else-if="errorstate == 4">
                <div
                  class="
                    p-3
                    mb-4
                    text-sm text-red-600
                    bg-oxford
                    border-2 border-red-500
                    rounded-lg
                    dark:bg-blue-200 dark:text-blue-800
                  "
                  role="alert"
                >
                  <span class="font-medium">Warning!</span>Email has not been
                  verified! Click here to
                  <button @click="reverifyEmail" class="underline">
                    re-verify!
                  </button>
                </div>
              </div>

              <div v-else-if="errorstate == 2">
                <div
                  class="
                    p-3
                    mb-4
                    text-sm text-red-600
                    bg-oxford
                    border-2 border-red-500
                    rounded-lg
                    dark:bg-blue-200 dark:text-blue-800
                  "
                  role="alert"
                >
                  <span class="font-medium">Warning!</span>Email not found!
                </div>
              </div>
              <!-- <label>Username / Email </label> -->
              <Field
                id="Email"
                v-model="email"
                class="block w-full rounded-lg border-2 border-box"
                placeholder="Email"
              />
              <!-- <label>Password</label> -->
              <Field
                type="password"
                id="password"
                v-model="password"
                name="emailRules"
                placeholder="Password"
                class="block w-full rounded-lg border-2 border-box mt-4"
              />
              <img v-if="loading" alt="Vue logo" src="../assets/Loading.svg" />
              <img v-if="done" alt="Vue logo" src="../assets/done.svg" />
              <button
                type="button"
                v-if="!loading && !done"
                @click="login"
                class="
                  inline-block
                  mt-3
                  px-6
                  py-2.5
                  bg-gray-500
                  text-white
                  font-medium
                  text-xs
                  leading-tight
                  uppercase
                  rounded
                  shadow-md
                  hover:bg-blue-700 hover:shadow-lg
                  focus:bg-blue-700
                  focus:shadow-lg
                  focus:outline-none
                  focus:ring-0
                  active:bg-blue-800 active:shadow-lg
                  transition
                  duration-150
                  ease-in-out
                "
              >
                Login
              </button>
              <button v-if="errorstate == 1" @click="resetPassword">
                Reset email
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- Toggle button -->
    </div>

    <div class="mt-3 sm:pt-3 md:pt-5 sm:mt-0 flex justify-center">
      <!-- Verify an asset w/ a href link -->
      <div class="mt-3 sm:mt-0 px-4">
        <a
          href="#"
          class="
            flex
            w-full
            items-center
            justify-center
            rounded-md
            border border-transparent
            bg-gray-500
            px-8
            py-3
            text-base
            font-medium
            text-white
            hover:bg-gray-600
            md:py-4 md:px-10 md:text-lg
          "
        >
          Database
        </a>
      </div>
      <!-- learn more w/ href link -->
      <div class="mt-3 sm:mt-0 px-4">
        <a
          href="/about"
          class="
            flex
            w-full
            items-center
            justify-center
            rounded-md
            border border-transparent
            bg-oxford
            px-8
            py-3
            text-gray-600
            font-medium
            hover:bg-indigo-200
            md:py-4 md:px-10 md:text-lg
          "
        >
          About Me
        </a>
      </div>
    </div>
    <div class="grid grid-cols-4 gap-3 pt-10">
      <div>
        <!-- <h1>NoteTaking</h1> -->
        <!-- <a href="https://opensea.io/">
            <img class="object-cover" src="@/assets/openSea.svg" />
          </a> -->
      </div>
      <div>
        <!-- <a href="https://nbatopshot.com/">
            <img class="object-cover" src="@/assets/topShot.svg" />
          </a> -->
      </div>

      <!-- These two does not work in computer-view -->
      <div>
        <!-- <a href="https://superrare.com/">
            <img class="object-cover" src="@/assets/SuperRare.svg" />
          </a> -->
      </div>
      <div>
        <!-- <a href="google.com">
            <img class="object-cover" src="@/assets/Foundation.svg" />
          </a> -->
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { db } from "../main";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object({
      nameRules: yup.string().required("Name is required"),
      emailRules: yup
        .string()
        .required("Email is required")
        .email("Email is invalid"),
      confirmEmail: yup
        .string()
        .oneOf([yup.ref("emailRules"), null], "Email must match")
        .required("Email confirmation is required"),
      usernameRules: yup
        .string()
        .min(5, "Username must be at least 5 characters"),
      passwordRules: yup
        .string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
      confirmPasswordRules: yup
        .string()
        .oneOf([yup.ref("passwordRules"), null], "Password must match")
        .required("Password confirmation is required"),
    });
    return {
      schema,
      personalInfo: {
        name: "",
        verifyEmail: "",
        email: "",

        password: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    async register() {
      try {
        const firebaseAuth = getAuth();
        const result = await createUserWithEmailAndPassword(
          firebaseAuth,
          this.personalInfo.email,
          this.personalInfo.password
        );
        console.log(result);
        const database = db.collection("users").doc(result.user.uid);
        await database
          .set({
            name: this.personalInfo.name,
            email: this.personalInfo.email,
            quizlet: [],
            notes:[]
          })
          .then(
            sendEmailVerification(firebaseAuth.currentUser).then(() => {
              console.log("Verification sent!");
            })
          );
        this.signup = !this.signup;
      } catch (e) {
        window.alert("Email address is already in use");
      }
    },
    emitPayload() {
      console.log(this.personalInfo);
      this.$emit("Callback", this.personalInfo);
    },
    reverifyEmail() {
      const firebaseAuth = getAuth();
      sendEmailVerification(firebaseAuth.currentUser).then(() => {
        console.log("Verification sent!");
      });
    },
  },
};
</script>
<script setup>
import { ref } from "vue";
import { router } from "../main";
import userStore from "../stores/user";
import { storeToRefs } from "pinia";
import userinfo from "../stores/userinfo";
const usernote = userinfo();
const userstate = userStore();
storeToRefs(userstate);
storeToRefs(usernote);

if (userstate.usercred.isauthenticated) {
  router.push({ path: "/hello" });
}
const errorstate = ref(0);
const signup = ref(true);
const email = ref("");
const password = ref("");
const loading = ref(false);
const done = ref(false);
const auth = getAuth();

function resetPassword() {
  sendPasswordResetEmail(auth, email.value)
    .then(() => {
      errorstate.value = 3;
      console.log("Password email has been sent!");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
}

function retrieveData() {
  db.collection('users')
    .doc(userstate.usercred.uid)
    .get()
    .then((snapshot) => {
      const document = snapshot.data();
      usernote.fillUser(document.name,document.email);
      usernote.fillDb(document.quizlet, document.notes);
      console.log(document);
      console.log(document.name);
      console.log(document.quizlet);
      // console.log(usernote.userinfo.notes[0].name);
      // console.log(usernote.userinfo);
      // console.log(usernote.userinfo.quizlet);
    });
}

function login() {
  // const auth = getAuth();
  errorstate.value = 0;
  const result = signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in
      // console.log("success");
      const user = userCredential.user;
      if (user.emailVerified == true) {

        console.log(user.emailVerified);
        console.log(userCredential);
        console.log(user.email);
        userstate.setUid(user.uid);
        console.log(userstate.usercred);
        retrieveData();
        router.push({ path: "/hello" });
      } else {
        errorstate.value = 4;
        console.log("User is not verified");
      }

    })
    .catch((error) => {
      const errorCode = error.code;
      // const errorMessage = error.message;
      if (errorCode == "auth/wrong-password") {
        console.log("wrong password");
        errorstate.value = 1;
      } else if (
        errorCode == "auth/invalid-email" ||
        errorCode == "auth/user-not-found"
      ) {
        console.log("Username not found");
        errorstate.value = 2;
      }
    });
}
function addData() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      loading.value = !loading.value;
      resolve();
    }, 2000);
    loading.value = !loading.value;
  });
}

function addfinish() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      done.value = !done.value;
      resolve();
    }, 2000);
    done.value = !done.value;
  });
}
</script>
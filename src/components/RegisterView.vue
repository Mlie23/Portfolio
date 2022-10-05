<template>
  <div
    v-else-if="!signup"
    class="flex flex-col justify-center items-center rounded-2xl z-10"
  >
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
                p-4
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
              <p class="underline" @click="resetPassword">
                Click here to reset your password
              </p>
            </div>
          </div>

          <div v-else-if="errorstate == 3">
            <div
              class="
                p-4
                mb-4
                text-sm text-red-600
                bg-oxford
                border-2 border-red-500
                rounded-lg
                dark:bg-blue-200 dark:text-blue-800
              "
              role="alert"
            >
              <span class="font-medium">Warning!</span>Reset password email has
              been sent!
            </div>
          </div>

          <div v-else-if="errorstate == 4">
            <div
              class="
                p-4
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
                p-4
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
            id="username"
            v-model="username"
            class="block rounded-lg border-2 border-box"
            placeholder="Username"
          />
          <!-- <label>Password</label> -->
          <Field
            type="password"
            id="password"
            v-model="password"
            name="emailRules"
            placeholder="Password"
            class="block rounded-lg border-2 border-box"
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
              focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
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
      emailRules: yup
        .string()
        .required("Email is required")
        .email("Email is invalid"),
      usernameRules: yup
        .string()
        .min(5, "Username must be at least 5 characters"),
      passwordRules: yup.string().required("Password is required"),
    });
    return {
      schema,
      account: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    resetPassword() {
      sendPasswordResetEmail(auth, this.account.email)
        .then(() => {
          errorstate.value = 3;
          console.log("Password email has been sent!");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    },
    login() {
      // const auth = getAuth();
      errorstate.value = 0;
      const result = signInWithEmailAndPassword(
        auth,
        this.account.email,
        this.account.password
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          if (user.emailVerified == true) {
            console.log(user.emailVerified);
            console.log(userCredential);
            console.log(user.email);
            userstate.setUid(user.uid);
            console.log(userstate.usercred);
          } else {
            errorstate.value = 4;
            console.log("User is not verified");
          }
          // router.push({ path: "/hello" });
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
          // console.log(errorCode);
        });
    },
    addData() {
      return new Promise(function (resolve) {
        setTimeout(function () {
          loading.value = !loading.value;
          resolve();
        }, 2000);
        loading.value = !loading.value;
      });
    },

    addfinish() {
      return new Promise(function (resolve) {
        setTimeout(function () {
          done.value = !done.value;
          resolve();
        }, 2000);
        done.value = !done.value;
      });
    },
    emitPayload() {
      console.log(this.personalInfo);
      this.$emit("Callback", this.personalInfo);
    },
  },
};
</script>


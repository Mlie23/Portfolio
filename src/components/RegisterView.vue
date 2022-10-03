<template>
  <div class="bg-white">
    <div class="flex" @click="signup = !signup">
      <div
        class="
          w-14
          h-8
          flex
          items-center
          bg-gray-300
          rounded-full
          p-1
          duration-300
          ease-in-out
        "
        :class="{ 'bg-green-400': signup }"
      >
        <div
          class="
            bg-white
            w-6
            h-6
            rounded-full
            shadow-md
            transform
            duration-300
            ease-in-out
          "
          :class="{ 'translate-x-6': signup }"
        ></div>
      </div>
    </div>
    <div
      v-if="signup"
      class="flex flex-col justify-center items-center rounded-2xl z-10"
    >
      <Form :validation-schema="schema" @submit="register">
        <div>
          <label>Name</label>
          <Field
            id="name"
            v-model="personalInfo.name"
            name="nameRules"
            placeholder="Jon Doe"
            class="block w-full rounded-lg border-2 border-blue-300"
          />
          <ErrorMessage class="text-red-500" name="nameRules"></ErrorMessage>
        </div>
        <div>
          <label>Email </label>
          <Field
            id="email"
            v-model="personalInfo.email"
            name="emailRules"
            placeholder="JDoe@my.edu"
            class="block w-full rounded-lg border-2 border-blue-300"
          />
          <ErrorMessage class="text-red-500" name="emailRules"></ErrorMessage>
        </div>
        <div>
          <label>Confirm Email</label>
          <Field
            id="verifyEmail"
            v-model="personalInfo.verifyEmail"
            name="confirmEmail"
            placeholder="Jon Doe"
            class="block w-full rounded-lg border-2 border-blue-300"
          />
          <ErrorMessage class="text-red-500" name="confirmEmail"></ErrorMessage>
        </div>
        <div>
          <label>Username</label>
          <Field
            id="Username"
            v-model="personalInfo.username"
            name="usernameRules"
            placeholder="Jon Doe"
            class="block w-full rounded-lg border-2 border-blue-300"
          />
          <ErrorMessage
            class="text-red-500"
            name="usernameRules"
          ></ErrorMessage>
        </div>
        <div>
          <label>Password</label>
          <Field
            :type="password"
            id="Password"
            v-model="personalInfo.password"
            name="passwordRules"
            placeholder="Jon Doe"
            class="block w-full rounded-lg border-2 border-blue-300"
          />
          <ErrorMessage
            class="text-red-500"
            name="passwordRules"
          ></ErrorMessage>
        </div>
        <div>
          <label>Confirm Password</label>
          <Field
            id="ConfirmPassword"
            v-model="personalInfo.confirmPassword"
            name="confirmPasswordRules"
            placeholder="Jon Doe"
            class="block w-full rounded-lg border-2 border-blue-300"
          />
          <ErrorMessage
            class="text-red-500"
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
          submit
        </button>
      </Form>
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
        .oneOf([yup.ref("passwordRules"), null], "Email must match")
        .required("Password confirmation is required"),
    });
    return {
      schema,
      personalInfo: {
        name: "",
        verifyEmail: "",
        email: "",
        username: "",
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
            username: this.personalInfo.username,
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
  },
};
</script>


// <script setup>
// import { ref } from "vue";
// import { router } from "../main";
// import userStore from "../stores/user";
// import { storeToRefs } from "pinia";
// const userstate = userStore();
// storeToRefs(userstate);
// const errorstate = ref(0);
// const signup = ref(true);
// const username = ref("");
// const password = ref("");
// const loading = ref(false);
// const done = ref(false);
// const auth = getAuth();
// function resetEmail() {
//   sendPasswordResetEmail(auth, username.value)
//     .then(() => {
//       errorstate.value = 3;
//       console.log("Password email has been sent!");
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorCode, errorMessage);
//     });
// }
// function login() {
//   // const auth = getAuth();
//   errorstate.value = 0;
//   const result = signInWithEmailAndPassword(
//     auth,
//     username.value,
//     password.value
//   )
//     .then((userCredential) => {
//       // Signed in
//       // console.log("success");
//       const user = userCredential.user;
//       if (user.emailVerified == true) {
//         console.log(user.emailVerified);
//         console.log(userCredential);
//         console.log(user.email);
//         userstate.setUid(user.uid);
//         console.log(userstate.usercred);
//       } else {
//         errorstate.value = 4;
//         console.log("User is not verified");
//       }
//       // router.push({ path: "/hello" });
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       // const errorMessage = error.message;
//       if (errorCode == "auth/wrong-password") {
//         console.log("wrong password");
//         errorstate.value = 1;
//       } else if (
//         errorCode == "auth/invalid-email" ||
//         errorCode == "auth/user-not-found"
//       ) {
//         console.log("Username not found");
//         errorstate.value = 2;
//       }
//       // console.log(errorCode);
//     });
// }
// function change() {
//   signup = !signup;
// }

// function addData() {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       loading.value = !loading.value;
//       resolve();
//     }, 2000);
//     loading.value = !loading.value;
//   });
// }

// function addfinish() {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       done.value = !done.value;
//       resolve();
//     }, 2000);
//     done.value = !done.value;
//   });
// }
// </script>
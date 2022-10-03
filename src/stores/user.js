import { defineStore } from "pinia";


const userStore = defineStore('user',{
    state:()=>({
        // userinfo:{
        //     username:null,
        //     name:null,
        //     email:null,
        //     isAuthenticated:false,
        //     userid:null
        // }
        usercred:{
        uid:null,
        isauthenticated:false
        }
    }),
    actions:{
        // authenticated()
        // {
        //     this.isAuthenticated = true;
        // },
        // logout()
        // {
        //     this.isAuthenticated = false;
        // },
        // fillUser(username, name, email, isAuthenticated)
        // {
        //     this.userinfo.username=username,
        //     this.userinfo.name=name,
        //     this.userinfo.email=email,
        //     this.userinfo.isAuthenticated=isAuthenticated
        // }

        setUid(Uid){
            this.usercred.uid=Uid;
            this.usercred.isauthenticated=true;
        }
    },
      persist: true,
});

export default userStore;
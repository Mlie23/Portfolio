import { defineStore } from "pinia";


const userinfo = defineStore('user',{
    state:()=>({
        userinfo:{
            username:null,
            name:null,
            email:null,
        }
    }),
    actions:{
        authenticated()
        {
            this.isAuthenticated = true;
        },
        logout()
        {
            this.userinfo.username=null;
            this.userinfo.name=null;
            this.userinfo.email=null;
        },
        fillUser(username, name, email)
        {
            this.userinfo.username=username,
            this.userinfo.name=name,
            this.userinfo.email=email
        }

        // setUid(Uid){
        //     this.usercred.uid=Uid;
        //     this.usercred.isauthenticated=true;
        // }
    },
      persist: true,
});

export default userinfo;
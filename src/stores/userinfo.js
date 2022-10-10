import { defineStore } from "pinia";


const userinfo = defineStore('userinfo',{
    state:()=>({
        userinfo:{
            name:null,
            email:null,
            quizlet:null,
            notes:null
        }
    }),
    actions:{
        authenticated()
        {
            this.isAuthenticated = true;
        },
        logout()
        {
            this.userinfo.name=null;
            this.userinfo.email=null;
            this.userinfo.quizlet=null,
            this.userinfo.notes=null;
        },
        fillUser( name, email)
        {
            this.userinfo.name=name,
            this.userinfo.email=email
        },
        fillDb(quizlet, notes){
            this.userinfo.quizlet=quizlet,
            this.userinfo.notes = notes
        }
        // setUid(Uid){
        //     this.usercred.uid=Uid;
        //     this.usercred.isauthenticated=true;
        // }
    },
      persist: true,
});

export default userinfo;
import { defineStore } from "pinia";


const userStore = defineStore('user',{
    state:()=>({
        usercred:{
        uid:null,
        isauthenticated:false
        }
    }),
    actions:{

        setUid(Uid){
            this.usercred.uid=Uid;
            this.usercred.isauthenticated=true;
        }
,
        logout()
        {
            this.usercred.uid=null;
            this.usercred.isauthenticated=false;
        }
    },
      persist: true,
});

export default userStore;
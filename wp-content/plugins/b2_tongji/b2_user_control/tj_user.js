var tjuser = new Vue({
    el:'#tjuser',
    mounted(){
        if(b2token){
    	    this.$http.post(b2_rest_url+'tjuser','').then(res=>{
    	    }).catch(err=>{
    	    }) 
        }
    },
})
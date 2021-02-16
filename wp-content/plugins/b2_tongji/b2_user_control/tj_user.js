var tjuser = new Vue({
    el:'#tjuser',
    mounted(){
        let userData = JSON.parse(localStorage.getItem('userData'))
        if(userData){
    	    this.$http.post(b2_rest_url+'tjuser','').then(res=>{
    	        
    	    }).catch(err=>{
    	    	
    	    }) 
        }
    },
})
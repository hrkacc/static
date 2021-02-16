var tjsearch = new Vue({
    el:'#tjsearch',
    mounted(){
	    this.$http.post(b2_rest_url+'tjsearch','type='+tj_search_data.type+'&key='+tj_search_data.key).then(res=>{
	        
	    }).catch(err=>{
	    	
	    })
    },
})
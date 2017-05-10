$(document).ready(function() {
	$("#CUForm").submit(function(){

		var data = $('#example').serializeObject();
		
		/*
		 * <form id="example">
		 * 
		 * <input type="text" name="NaVn">
		 * <
		 * 
		 * 
		 * </form>
		 */
		
		console.log(data);
		
		$.ajax({
			url: "http://localhost:8080/24_cdio3/rest2/cdio3/createuser",
			data: JSON.stringify(data),
			contentType: "application/json",
			method: 'POST',
			success: function(resp){
				console.log('This is the Success method')
				console.log(resp)
			},
			error: function(resp){
				console.log('This is the ERROR method')
				console.log(resp)
			}
		});
		
		/*
		 * @Path("/something")
		 * @POST
		 * @Consumes(MediaType.APPLICATION_JSON)
		 * Public void createUser(UserDTO user) {
		 *  //DO SOMETHING ---- add user to database...
		 * }
		 * 
		*/
		// Don't submit the form again
		return false;
	});

});
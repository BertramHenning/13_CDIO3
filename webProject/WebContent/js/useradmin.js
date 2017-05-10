$(document).ready(function() {

	// Variable ini
	var allUsers;
	
	//Load User table on request
	document.getElementById("createusermenu").addEventListener("click",function() {
		$("#table").hide();
		$("#createuser").show();
		return false;
	});
	
	//Load logout
	document.getElementById("logoutmenu").addEventListener("click",function() {
		$("#table").hide();
		$("#createuser").hide();
		alert("Du er nu logget ud.");
		$("#login").show();
		$("#usradmin").hide();
		return false;
	});
	
	
	// Load users on useradmin page
	document.getElementById("usradminmenu").addEventListener("click",function() {
		$("#table").show();
		$("#createuser").hide();
		$.ajax({
		url: "http://localhost:8080/webProject/rest2/service/users",
		method: "GET",
		success: function(data){
			alert(data);
			allUsers = data;
		},
		error: function(error){
			alert("Error D:");
		},
//		complete: loadRows()
	});
		return false;
	});
	document.getElementById("Forfattere").addEventListener("click",function myFunction() {
	    var popup = document.getElementById("myPopup");
	    popup.classList.toggle("show");
	    $("#popupID").show();
	    
	});
	
	
		$("#CreateUserForm").submit( function() {
		
			event.preventDefault();
		//if (validateForm() == true) {
			
			var data = $('#CreateUserForm').serializeObject();

			console.log(data);
			debugger;
			$.ajax({
				url: "http://localhost:8080/webProject/rest2/service/create/user",
				data: JSON.stringify(data),
				contentType: "application/json",
				method: 'POST',
				success: function(resp){
					console.log(data);
					console.log('This is the Success method')
					console.log(resp)
					document.getElementById("CreateUserForm").reset();
					console.log("CUForm has been cleared")
				},
				error: function(resp){
					console.log(data);
					console.log('This is the ERROR method')
					console.log(resp)
				}
			});

			return false;

	});
	
});
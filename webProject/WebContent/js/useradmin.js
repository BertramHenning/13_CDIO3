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
		url: "http://localhost:8080/webProject/rest2/find/users",
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
	
// function loadRows() {
// for (i in allUsers) {
// <tr><th> allUers[i].name </th> <th> + allUsers[i].ini </th> + cpr + roles
// <th></tr>
// }
// }
});
/* ======================================================================
  Author Custom JavaScript
====================================================================== */
// Loop through Array of Objects
var objPeople = [
	{ // Object @ 0 index
		username: "patoo05",
		password: "carlos."
	},
	{ // Object @ 1 index
		username: "amalio",
		password: "amalio1000"
	},
	{ // Object @ 2 index
		username: "maria",
		password: "termure"
	},
        { // Object @ 3 index
		username: "esther",
		password: "esther"
	} 

]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + " is logged in!!!")
			location.href="web/r.html"
			// stop the function if this is found to be true
			return
		}
	}
	console.log("incorrect username or password")
}

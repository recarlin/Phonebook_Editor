function deleteContact(contact) {
	var table = contact.closest('table');
	var row = contact.parentNode.parentNode;
	var rowIndex = row.rowIndex;
	var blankIndex = row + 1;
	table.deleteRow(rowIndex);
	table.deleteRow()
}
// Original JavaScript code by Chirp Internet: www.chirp.com.au
// Please acknowledge use of this code by including this header.

document.getElementById("modal_feedback").addEventListener("submit", function(e) {
	var form = this;
	if(form.name.value == "") {
		alert("Please enter your Name");
		form.name.focus();
		e.preventDefault();
	} else if(form.email.value == "") {
		alert("Please enter a valid Email address");
		form.email.focus();
		e.preventDefault();
	} else if(form.message.value == "") {
		alert("Please enter your comment or question in the Message box");
		form.message.focus();
		e.preventDefault();
	}
	}, false);
	
	document.addEventListener("DOMContentLoaded", function() {
	var modalWrapper = document.getElementById("modal_wrapper");
	var modalWindow  = document.getElementById("modal_window");
	
	var openModal = function(e) {
		modalWrapper.className = "overlay";
		modalWindow.style.marginTop = (-modalWindow.offsetHeight)/2 + "px";
		modalWindow.style.marginLeft = (-modalWindow.offsetWidth)/2 + "px";
		e.preventDefault();
	};
	
	var closeModal = function(e) {
		modalWrapper.className = "";
		e.preventDefault();
	};
	
	var clickHandler = function(e) {
		if(e.target.tagName == "DIV") {
			if(e.target.id != "modal_window") closeModal(e);
		}
	};
	
	var keyHandler = function(e) {
		if(e.keyCode == 27) closeModal(e);
	};
	
	document.getElementById("modal_open").addEventListener("click", openModal, false);
	document.getElementById("modal_close").addEventListener("click", closeModal, false);
	document.addEventListener("click", clickHandler, false);
	document.addEventListener("keydown", keyHandler, false);
}, false);
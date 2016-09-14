function addGroup() {
	var container = document.getElementById('whole_container');
	var table_container = document.createElement('div');
	var title_container = document.createElement('div');
	var table = document.createElement('table');
	
	table_container.className = 'table_container';
	title_container.className = 'title_container';
	table.className = 'group';
	
	title_container.innerHTML = '<input class="group_name" type="text" placeholder="Group Name"><a href="#" class="delete_button" onclick="deleteGroup(this)">Delete Group</a></div>';
	table.innerHTML = '<tr class="contact"><td class="button_container"><a href="#" class="add_button"  onclick="addContact(this)">Add Contact</a></td></tr>';
	
	table_container.appendChild(title_container);
	table_container.appendChild(table);
	container.appendChild(table_container);
}

function deleteGroup(button) {
	var titleNode = button.parentNode;
	var container = titleNode.parentNode;
	var whole = container.parentNode;

	whole.removeChild(container);
}

function addContact(newRow) {
	var table = newRow.closest('table');
	var row = newRow.closest('tr');
	var rowIndex = row.rowIndex;
	var blankIndex = rowIndex + 1;
	var newRow = table.insertRow(rowIndex);
	var cell1 = newRow.insertCell(0);
	var cell2 = newRow.insertCell(1);
	var cell3 = newRow.insertCell(2);
	var cell4 = newRow.insertCell(3);
	var cell5 = newRow.insertCell(4);
	
	cell1.innerHTML = '<td><input class="contact_name" type="text" placeholder="Contact Name"></td>';
	cell2.innerHTML = '<td><input class="number" type="text" placeholder="Phone Number"></td>';
	cell3.innerHTML = '<td><input class="number" type="text" placeholder="Phone Number"></td>';
	cell4.innerHTML = '<td><input class="number" type="text" placeholder="Phone Number"></td>';
	cell5.innerHTML = '<td class="button_container"><a href="#" class="delete_button" onclick="deleteContact(this)">Delete Contact</a></td>';
	
	var newBlank = table.insertRow(blankIndex);
	var cell1_blank = newBlank.insertCell(0);
	
	cell1_blank.innerHTML = '<tr class="blank_row"><td colspan="3"></td></tr>';
}

function deleteContact(contact) {
	var table = contact.closest('table');
	var row = contact.closest('tr');
	var rowIndex = row.rowIndex;
	var blankIndex = rowIndex + 1;
	table.deleteRow(blankIndex);
	table.deleteRow(rowIndex);
}

function readXML() {
	$(xml).find('Menu').each(function(){
		$name = $(this).attr('Name');
		
		var container = document.getElementById('whole_container');
		var table_container = document.createElement('div');
		var title_container = document.createElement('div');
		var table = document.createElement('table');
		
		table_container.className = 'table_container';
		title_container.className = 'title_container';
		table.className = 'group';
		
		title_container.innerHTML = '<input class="group_name" type="text" placeholder="' + $name + '"><a href="#" class="delete_button" onclick="deleteGroup(this)">Delete Group</a></div>';
		table.innerHTML = '<tr class="contact"><td class="button_container"><a href="#" class="add_button"  onclick="addContact(this)">Add Contact</a></td></tr>';
	
		table_container.appendChild(title_container);
		table_container.appendChild(table);
		container.appendChild(table_container);
		
		$(this).find('Unit').each(function(){
			$contact = $(this).attr('Name');
			$p1 = $(this).attr('Phone1');
			$p2 = $(this).attr('Phone2');
			$p3 = $(this).attr('Phone3');
		});
	});	
	
/*
	var table = newRow.closest('table');
	var row = newRow.closest('tr');
	var rowIndex = row.rowIndex;
	var blankIndex = rowIndex + 1;
	var newRow = table.insertRow(rowIndex);
	var cell1 = newRow.insertCell(0);
	var cell2 = newRow.insertCell(1);
	var cell3 = newRow.insertCell(2);
	var cell4 = newRow.insertCell(3);
	var cell5 = newRow.insertCell(4);
	
	cell1.innerHTML = '<td><input class="contact_name" type="text" placeholder="Contact Name"></td>';
	cell2.innerHTML = '<td><input class="number" type="text" placeholder="Phone Number"></td>';
	cell3.innerHTML = '<td><input class="number" type="text" placeholder="Phone Number"></td>';
	cell4.innerHTML = '<td><input class="number" type="text" placeholder="Phone Number"></td>';
	cell5.innerHTML = '<td class="button_container"><a href="#" class="delete_button" onclick="deleteContact(this)">Delete Contact</a></td>';
	
	var newBlank = table.insertRow(blankIndex);
	var cell1_blank = newBlank.insertCell(0);
	
	cell1_blank.innerHTML = '<tr class="blank_row"><td colspan="3"></td></tr>';
*/
}

var xml = "phonebook.xml"; //How to set path this line?


$.ajax({
	type: "GET",
	url: "phonebook.xml",
	data: jsonData,
	success: function(xml){
	
	$(xml).find('Menu').each(function(){
		$name = $(this).attr('Name');
		
		var container = document.getElementById('whole_container');
		var table_container = document.createElement('div');
		var title_container = document.createElement('div');
		var table = document.createElement('table');
		
		table_container.className = 'table_container';
		title_container.className = 'title_container';
		table.className = 'group';
		
		title_container.innerHTML = '<input class="group_name" type="text" placeholder="' + $name + '"><a href="#" class="delete_button" onclick="deleteGroup(this)">Delete Group</a></div>';
		table.innerHTML = '<tr class="contact"><td class="button_container"><a href="#" class="add_button"  onclick="addContact(this)">Add Contact</a></td></tr>';
	
		table_container.appendChild(title_container);
		table_container.appendChild(table);
		container.appendChild(table_container);
		
		$(xml).find('Unit').each(function(){
			$contact = $(this).attr('Name');
			$p1 = $(this).attr('Phone1');
			$p2 = $(this).attr('Phone2');
			$p3 = $(this).attr('Phone3');
		});
	},
    error: function(jqXhr, textStatus, errorThrown){
        alert(errorThrown);
    }
});



/*
"<note>" +
"<to>Tove</to>" +
"<from>Jani</from>" +
"<heading>Reminder</heading>" +
"<body>Don't forget me this weekend!</body>" +
"</note>";


<?xml version="1.0" encoding="UTF-8"?>
<YealinkIPPhoneBook>
<Title>Phonebook</Title>
	<Menu Name="Bradner">
		<Unit Name="Adam Brossia" Phone3="" Phone2="4192069454" Phone1="1702"/>
		<Unit Name="Bradner Office" Phone3="" Phone2="4192873275" Phone1="1701"/>
		<Unit Name="Brock Abke" Phone3="" Phone2="4193456578" Phone1=""/>
		<Unit Name="Cameron Shirer" Phone3="" Phone2="4193418510" Phone1=""/>
		<Unit Name="Jim Walter" Phone3="" Phone2="4199341693" Phone1="1703"/>
	</Menu>
	<Menu Name="Curtice">
		<Unit Name="Brice Gahler" Phone3="" Phone2="4195520169" Phone1="3103"/>
		<Unit Name="Chris Milbrodt" Phone3="" Phone2="4196997538" Phone1=""/>
	</Menu>
	<Menu Name="Lemonye">
		<Unit Name="Russell Carlin" Phone3="" Phone2="4192069454" Phone1="1054"/>
		<Unit Name="Lemoyne Office" Phone3="" Phone2="4192873275" Phone1="1031"/>
		<Unit Name="Tim Alexander" Phone3="" Phone2="4193456578" Phone1="1030"/>
		<Unit Name="Mark Radabaugh" Phone3="" Phone2="4193418510" Phone1="1021"/>
	</Menu>
</YealinkIPPhoneBook>
*/
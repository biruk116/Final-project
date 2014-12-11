var locations_array = [];
var items_array = [];
var mapArray = [];

function loc_object() {
	this.locname = "";
	this.locvisited = false;
	this.locdesc = "";
	this.locdesc2 = "";
	this.locitems = "";
}

function item() {
	this.itemname = "";
	this.itempoints = 0;
	this.item_quantity = 0;
	this.item_desc = "";
}

function init_locations() {
	var loc0 = new loc_object();
	loc0.locname = "Cave";
	loc0.locdesc = "You have entered the cave.";
	locations_array.push(loc0);

	var loc1 = new loc_object();
	loc1.locname = "Entrance";
	loc1.locdesc = "You are at the entrance. There is a torch on the ground.";
	loc1.locdesc2 = "You are at the entrance.";
	loc1.locvisited = true;
	locations_array.push(loc1);
	
	var loc2 = new loc_object();
	loc2.locname = "Dungeon";
	loc2.locdesc = "You are in the dungeon. There are gold coins on the ground.";
	loc2.locdesc2 = "You are in the dungeon.";
	locations_array.push(loc2);
	
	var loc3 = new loc_object();
	loc3.locname = "Trap Room";
	loc3.locdesc = "You are in the trap room!";
	locations_array.push(loc3);
	
	var loc4 = new loc_object();
	loc4.locname = "Treasure Room";
	loc4.locdesc = "You are in the treasure room. There are some gold coins on the ground.";
	loc4.locdesc2 = "You are in the treasure room.";
	locations_array.push(loc4);
	
	var loc5 = new loc_object();
	loc5.locname = "Mummy Room";
	loc5.locdesc = "You are in the mummy room!";
	locations_array.push(loc5);
	
	var loc6 = new loc_object();
	loc6.locname = "Chimney";
	loc6.locdesc = "You are by the chimney.";
	locations_array.push(loc6);
	
	var loc7 = new loc_object();
	loc7.locname = "Library";
	loc7.locdesc = "You are in the library. There is a book on the floor";
	loc7.locdesc2 = "You are in the library.";
	locations_array.push(loc7);
	
	var loc8 = new loc_object();
	loc8.locname = "Prison Rooms";
	loc8.locdesc = "You are at the prison cells. There is water on a table in front of you.";
	loc8.locdesc2 = "You are at the prison cells.";
	locations_array.push(loc8);
	
	var loc9 = new loc_object();
	loc9.locname = "Fire Well";
	loc9.locdesc = "You are at the fire well.";
	locations_array.push(loc9);
	
	mapArray = [[1,4,3,2],
				[-1,-1,0,-1],
				[-1,0,-1,8],
				[0,-1,5,-1],
				[-1,9,-1,0],
				[3,-1,6,-1],
				[5,-1,7,-1],
				[6,-1,-1,-1],
				[-1,2,-1,-1],
				[-1,-1,-1,4]];
}

function init_items() {
	var gold = new item();
	gold.itemname = "Gold Coins";
	gold.itempoints = 10;
	gold.item_desc = "You have taken the gold coins!";
	items_array.push(gold);
	
	var torch = new item();
	torch.itemname = "Torch";
	torch.itempoints = 5;
	torch.item_desc = "You have taken the torch!"
	items_array.push(torch);
	
	var water = new item();
	water.itemname = "Water";
	water.itempoints = 1;
	water.item_desc = "You have taken the water.";
	items_array.push(water);
	
	var books = new item();
	books.itemname = "Inscription Book";
	books.itempoints = 2;
	books.item_desc = "You now have an inscription book!";
	items_array.push(books);
}

var current_loc = 1;
var points = 0;
var message = "";

function display_message(message) {
	var txt_area = document.getElementById("ta_main");
	txt_area.value = message + "\n\n" + txt_area.value;
}

function init() {
	init_locations();
	init_items();
	message = "Welcome to Treasure Hunt. Your objective is to explore the areas. Every time you visit a new location you will receive 5 points.\n\n"
	display_message(message);
	set_buttons();
}

function new_loc(direction) {
	var newloc = current_loc;
	var destination = mapArray[current_loc][direction];
	newloc = destination;
	return newloc;
}

function set_buttons() {
	var north = document.getElementById("btnNorth");
	var east = document.getElementById("btnEast");
	var south = document.getElementById("btnSouth");
	var west = document.getElementById("btnWest");
	
	switch (current_loc) {
		case 0:
			if (north.disabled === true) {
				north.disabled = false;
			}
			if (east.disabled === true) {
				east.disabled = false;
			}
			if (south.disabled === true) {
				south.disabled = false;
			}
			if (west.disabled === true) {
				west.disabled = false;
			}
			break;
		case 1:
			if (north.disabled === false) {
				north.disabled = true;
			}
			if (east.disabled === false) {
				east.disabled = true;
			}
			if (south.disabled === true) {
				south.disabled = false;
			}
			if (west.disabled === false) {
				west.disabled = true;
			}
			break;
		case 2:
			if (north.disabled === false) {
				north.disabled = true;
			}
			if (east.disabled === true) {
				east.disabled = false;
			}
			if (south.disabled === false) {
				south.disabled = true;
			}
			if (west.disabled === true) {
				west.disabled = false;
			}
			break;
		case 3:
			if (north.disabled === true) {
				north.disabled = false;
			}
			if (east.disabled === false) {
				east.disabled = true;
			}
			if (south.disabled === true) {
				south.disabled = false;
			}
			if (west.disabled === false) {
				west.disabled = true;
			}
			break;
		case 4:
			if (north.disabled === false) {
				north.disabled = true;
			}
			if (east.disabled === true) {
				east.disabled = false;
			}
			if (south.disabled === false) {
				south.disabled = true;
			}
			if (west.disabled === true) {
				west.disabled = false;
			}
			break;
		case 5:
			if (north.disabled === true) {
				north.disabled = false;
			}
			if (east.disabled === false) {
				east.disabled = true;
			}
			if (south.disabled === true) {
				south.disabled = false;
			}
			if (west.disabled === false) {
				west.disabled = true;
			}
			break;
		case 6:
			if (north.disabled === true) {
				north.disabled = false;
			}
			if (east.disabled === false) {
				east.disabled = true;
			}
			if (south.disabled === true) {
				south.disabled = false;
			}
			if (west.disabled === false) {
				west.disabled = true;
			}
			break;
		case 7:
			if (north.disabled === true) {
				north.disabled = false;
			}
			if (east.disabled === false) {
				east.disabled = true;
			}
			if (south.disabled === false) {
				south.disabled = true;
			}
			if (west.disabled === false) {
				west.disabled = true;
			}
			break;
		case 8:
			if (north.disabled === false) {
				north.disabled = true;
			}
			if (east.disabled === true) {
				east.disabled = false;
			}
			if (south.disabled === false) {
				south.disabled = true;
			}
			if (west.disabled === false) {
				west.disabled = true;
			}
			break;
		case 9:
			if (north.disabled === false) {
				north.disabled = true;
			}
			if (east.disabled === false) {
				east.disabled = true;
			}
			if (south.disabled === false) {
				south.disabled = true;
			}
			if (west.disabled === true) {
				west.disabled = false;
			}
			break;
	}
}

function update_loc() {
	var txt_loc_a = document.getElementById("txt_loc");
	var txt_points_a = document.getElementById("txt_points");
	txt_loc_a.value = locations_array[current_loc].locname;
	message = locations_array[current_loc].locdesc;
	display_message(message);
	if (locations_array[current_loc].locvisited === false) {
		points += 5;
		txt_points_a.value = points;
		locations_array[current_loc].locvisited = true;
	}
	set_buttons();
}

function btnNorth_Click() {
	if (new_loc(0) != -1) {
		current_loc = new_loc(0);
		update_loc();
	}
	else {
		message = "You cannot go North from here.";
		display_message(message);
	}
}
		
function btnEast_Click() {
	if (new_loc(1) != -1) {
		current_loc = new_loc(1);
		update_loc();
	}
	else {
		message = "You cannot go East from here.";
		display_message(message);
	}
}

function btnSouth_Click() {
	if (new_loc(2) != -1) {
		current_loc = new_loc(2);
		update_loc();
	}
	else {
		message = "You cannot go South from here.";
		display_message(message);
	}
}

function btnWest_Click() {
	if (new_loc(3) != -1) {
		current_loc = new_loc(3);
		update_loc();
	}
	else {
		message = "You cannot go West from here.";
		display_message(message);
	}
}

function item_take(item_num) {
	if (locations_array[current_loc].locdesc != locations_array[current_loc].locdesc2) {
		display_message(items_array[item_num].item_desc);
		if (item_num === 0) {
			items_array[item_num].item_quantity += 5;
		}
		else {
			items_array[item_num].item_quantity += 1;
		}
		points += items_array[item_num].itempoints;
		txt_points_a.value = points;
		locations_array[current_loc].locdesc = locations_array[current_loc].locdesc2;
	}
}

function btnTake_Click() {
	var txt_loc_a = document.getElementById("txt_loc");
	var txt_points_a = document.getElementById("txt_points");
	
	switch (current_loc) {
		case 1:
			item_take(1);
			break;
		case 2:
			item_take(0);
			break;
		case 4:
			item_take(0);
			break;
		case 7:
			item_take(3);
			break;
		case 8:
			item_take(2);
			break;
		default:
			display_message("There is nothing to take!");
	}
}

function exit() {
	if (current_loc = 9) {
		display_message("You have found the hidden treasure room! You win!");
	}
	else {
		display_message("You cannot exit from here!");
	}
}

function inventory() {
	var invty_list = "INVENTORY:\n";
	for (i = 0, len = items_array.length; i < len; i++) {
		invty_list = invty_list + items_array[i].itemname + " - " + items_array[i].item_quantity + "\n";
	}
	display_message(invty_list);
}

function btn_Command() {
	var txt_Command = document.getElementById("txtCommand");
	var txt_loc_a = document.getElementById("ta_main");
	var Command = txt_Command.value.toLowerCase();
	if (Command === "n") {
		btnNorth_Click();
	}
	else if (Command === "s") {
		btnSouth_Click();
	}
	else if (Command === "e") {
		btnEast_Click();
	}
	else if (Command === "w") {
		btnWest_Click();
	}
	else if (Command === "take") {
		btnTake_Click();
	}
	else if (Command === "inventory") {
		inventory();
	}
	else if (Command === "exit") {
		exit();
	}
	else {
		txt_loc_a.value = "Please enter a valid command!" + txt_loc_a.value;
	}
	txt_Command.value = "";
}
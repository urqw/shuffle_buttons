/**
 * Copyright (C) 2019, 2025 Nikita Tseykovets <tseikovets@rambler.ru>
 * SPDX-License-Identifier: GPL-2.0-or-later
 */

// Save link to original function from UrqW (/js/Client.js)
var drawButtonsOriginal = Client.prototype.drawButtons;

// Rewrite original function for drawing buttons
Client.prototype.drawButtons = function() {
	// Shuffle buttons
	GlobalPlayer.buttons = shuffle(GlobalPlayer.buttons);
	// Call original function with execution context
	drawButtonsOriginal.call(this);
};

// Function to shuffle array
function shuffle(arr) {
	var j, temp;
	for(var i = arr.length - 1; i > 0; i--) {
		j = Math.floor(Math.random()*(i + 1));
		temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
	}
	return arr;
}

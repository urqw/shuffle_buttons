/**
 * Copyright (C) 2019 Nikita Tseykovets <tseikovets@rambler.ru>
 * Copyright (C) 2015, 2016 Akela <akela88@bk.ru>
 *     (UrqW project from which part of code is borrowed)
 * SPDX-License-Identifier: GPL-2.0-or-later
 */

/**
 * Modifying buttons drawing function
 * from UrqW (/js/Client.js)
 * to build in button shuffling
 */
Client.prototype.drawButtons = function() {
	var me = this;
	this.crtlButtonField.empty();

	GlobalPlayer.buttons = shuffle(GlobalPlayer.buttons);

	$.each(GlobalPlayer.buttons, function(index, button) {
		if (button) {
			var buttonCtrl = $('<button class="list-group-item button">').attr('data-action', button.id).html(button.desc);

			me.crtlButtonField.append(buttonCtrl);
		}
	});
};

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

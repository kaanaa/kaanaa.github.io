
function navDropDownShow() {
    "use strict";
	document.getElementById('navddmenu').style.display = 'flex';
	document.getElementById('navdropdownshow').style.display = 'none';
	document.getElementById('navdropdownhide').style.display = 'initial';
}

function navDropDownHide() {
    "use strict";
	document.getElementById('navddmenu').style.display = 'none';
	document.getElementById('navdropdownshow').style.display = 'initial';
	document.getElementById('navdropdownhide').style.display = 'none';
}

function noScriptNavHide() {
    "use strict";
    document.getElementById('noscriptnav').style.display = 'none';
}

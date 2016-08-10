function mobileValidate(mobile){
	if (null === mobile || "" === mobile) {
		return false;
	} else {
		var reg = /^0?(13[0-9]|14[57]|15[012356789]|17[012356789]|18[0-9])[0-9]{8}$/;
		if (!reg.test(mobile)) {
			return false;
		} else {
			return true;
		}
	}
}


function emailValidate(email){
	if (null === email || "" === email) {
		return false;
	} else {
		var reg =/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
		if (!reg.test(email)) {
			return false;
		} else {
			return true;
		}
	}
}

function strValidate(str){
	if (null === str || "" === str) {
		return false;
	} else {
		var reg =/[@#\$%\^&\*]+/;
		if (reg.test(str)) {
			return false;
		} else {
			return true;
		}
	}
}
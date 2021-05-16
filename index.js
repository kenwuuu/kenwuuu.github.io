// generates a password based off Apple patterns, three groups of lowercase characters,
// one group with an uppercase character and one with a number, and six characters each.
function generate_password() {
	var lowercase_string = generate_string(6, 'lower');
	var number_string = generate_string(5, 'lower');
	var uppercase_string = generate_string(5, 'lower');
  
	number_string = number_string.concat(generate_string(1, 'numbers'));
	uppercase_string = uppercase_string.concat(generate_string(1, 'upper'));
  
	number_string = shuffle(number_string);
	uppercase_string = shuffle(uppercase_string);
  
	var password_array = [lowercase_string, number_string, uppercase_string];
	shuffle_array(password_array);
	var password = password_array.join('-');
	
  document.getElementById("password_output").innerHTML = password;
	// return password;
}

function generate_string(length, type) {
	var result = [];
	var characters = new Map([
		['lower', 'abcdefghijklmnopqrstuvwxyz'],
		['upper', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'],
		['all', 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'],
		['numbers', '0123456789']
	]);

	var charactersLength = characters.get(type).length;
	for ( var i = 0; i < length; i++ ) {
		result.push(characters.get(type).charAt(Math.floor(Math.random() * charactersLength)));
	}
  
	return result.join('');
}

function shuffle(string) {
  var parts = string.split('');
  for (var i = parts.length; i > 0;) {
    var random = parseInt(Math.random() * i);
    var temp = parts[--i];
    parts[i] = parts[random];
    parts[random] = temp;
  }
  return parts.join('');
}

function shuffle_array(parts) {
  for (var i = parts.length; i > 0;) {
    var random = parseInt(Math.random() * i);
    var temp = parts[--i];
    parts[i] = parts[random];
    parts[random] = temp;
  }
}

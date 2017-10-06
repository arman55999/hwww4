<script>


//triangle
const rows = 6;
const space = function(n){
	if (n==0) {
		return "";
	}
	return " " + space(n-1);
	
}

const asterisk = function(n){
	if(n==0){
		return "";
	}
	
	return "*" + asterisk(n-1);
}

const triangle = function(n){
	
	if(n==0){
		return "";
		
	}
	return triangle(n-1) + "\n" + space(rows - n) + asterisk(2*n-1);
	
}

console.log(triangle(rows);






//base to power n

const i = 0;
const pow = function(base, n){
	
		if (n = 0){
			return 1;
		}
		else {
			i = pow(base, (n-1));
		}
		
}

console.log(i);






//reverse string
const string = 'abcd';
const reverse = function(string){
		
	if (string.length === 0) {
        return "";
    }

    return string[string.length - 1] + reverse(string.substring(0, string.length - 1));
}
		
}





//checkboard
const checkboard = function (n) {
  if (n === 0)
    return "";

  return "*" + checkboard(n-1);
};

const sp = function (n) {
  if (n === 0)
    return "";

  return " " + sp(n-1);
};

const print = function(n) {
  if  (n===0) {
    return "";
  }
  return (checkboard(1) + sp(1) + print(n-1));
}

print(5);





//











</script>
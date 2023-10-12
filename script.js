
function decimalToBinary(num) {
	let arr=[];
    while(num!=0)
		{
			arr.push(num%2);
			num=num/2;
		}
	return arr;
  
}

window.decimalToBinary = decimalToBinary;

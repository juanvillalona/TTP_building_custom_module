function setDifference(arr1, arr2) {
	
	var test1 = arr1.filter(x => !arr2.includes(x));
	var test2 = arr2.filter(x => !arr1.includes(x));
	var test3 = test1.concat(test2);


	return test3;
};

module.exports = setDifference;



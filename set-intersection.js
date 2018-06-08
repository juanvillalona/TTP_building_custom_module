function setIntersection(set1, set2){

	var test2 =  set1.filter(x => set2.includes(x));
	return test2
};

module.exports = setIntersection;
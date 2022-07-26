Array.prototype.myReduce = function (cb, initial) {
	let prevVal = 0;

	if (initial) {
		prevVal = initial;
	}

	this.forEach((currVal, i) => {
		cb(prevVal, currVal, i, this);
		prevVal += currVal;
	});

	// previous value holds the total
	return prevVal;
};
